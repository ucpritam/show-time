import React from 'react';
import "./signupscreen.css";

function SignupScreen() {
    
    const register = (e) => {
        e.preventDefault();
    };

    const signIn = (e) => {
        e.preventDefault();
    };

    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email"/>
                <input placeholder="Password" type="password"/>
                <button type="Submit" onClick={signIn}>
                    Sign In
                </button>
                <div className="s-bot">
                    <span className="signupScreen__gray">New to Netflix?</span> 
                    <span className="signupScreen__link" onClick={register}> Sign Up now.</span>
                </div>
            </form>
        </div>
    )
}

export default SignupScreen