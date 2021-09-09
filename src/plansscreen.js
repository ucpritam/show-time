import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import "./plansscreen.css";
import { loadStripe } from "@stripe/stripe-js";


function Plansscreen() {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);
    const[subscription, setSubscription]=useState(null);
    useEffect(() =>{
        db.collection("customer")
        .doc(user.uid)
        .collection("subscription")
        .get()
        .then(querySnapshot=>{
            querySnapshot.forEach(async subscription=> {
                setSubscription({
                    role: subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_start: subscription.data().current_period_start.seconds,
                })
            })
        })
    }, [])

    useEffect(() => {
        db.collection("products")
            .where("active", "==", true)
            .get()
            .then((querySnapshot) => {
                const products = {};
                querySnapshot.forEach(async (productDoc) => {
                    products[productDoc.id] = productDoc.data();
                    const priceSnap = await productDoc.ref.collection("prices").get();
                    priceSnap.docs.forEach((price) => {
                        products[productDoc.id].prices = {
                            priceId: price.id,
                            priceData: price.data(),
                        };
                    });
                });
                setProducts(products);
            });
    }, []);

    console.log(products);
    console.log(subcription);

    const loadCheckout = async (priceId) => {
        const docRef = await db
            .collection("customers")
            .doc(user.uid)
            .collection("checkout_session")
            .add({
                price: priceId,
                success_url: window.location.origin,
                cancel_url: window.location.origin,
            });
        docRef.onSnapshot(async (snap) => {
            const { error, sessionId } = snap.data();
            if (error) {
                // Show an error to your customer and
                // inspect your Cloud function logs in the firebase console.
                alert(`An error-occured: ${error.message}`);
            }
            if (sessionId) {
                //We have a session, let's redirect to Checkout
                //Init Stripe
                const stripe = await loadStripe (
                     
                


                );
                stripe.redirectToCheckout({sessionId});
            }

        });

    };
    return (
        <div className="plansscreen" >
            <br />
            {subscription && (
            <p>Renewal Date:{" "}
                {new Date(
                    subscription?.current_period_end*1000
                    ).toLocaleDateString}
                    </p>
                )}
            {Object.entries(products).map(([productId, productData]) => {
                // To add some logic to check if the user's suscription is active....
                const isCurrentPackage = productData.name?.toLowerCase().inclueds(subscription?.role);


                return (
                    <div 
                        key={productId}
                         className={`${
                             isCurrentPackage && "PlansScreen__plan--disabled" }
                              plansscreen__plan`}>
                        <div className="plansscreen__info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>

                        <button onClick={() => 
                            !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
                            {isCurrentPackage ? 'Curent Package': 'Subscribe'}
                        </button>
                    </div>
                );
            })}
        </div >
    );
}

export default Plansscreen;