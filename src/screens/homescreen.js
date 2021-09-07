import React from "react";
import Banner from "../banner";
import "./homescreen.css";
import Nav from "../navbar";
import requests from "../requests";
import Row from "../row";

function homescreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row 
                title= "Showtime Originals"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
            {/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
            </div>
    );
}

export default homescreen;