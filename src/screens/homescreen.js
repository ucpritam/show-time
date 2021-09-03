import React from "react";
import Banner from "../banner";
import "./homescreen.css";
import Nav from "../navbar";
import requests from "../requests";
import Row from "../Row";

function homescreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row 
                title= "NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrendingNow} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            </div>
    );
}

export default homescreen;
