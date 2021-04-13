import React from 'react';
import Row from './Row';
import requests from './requests';
import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";




function App() {
    return (
        <div className="App">
            {/* nav*/}
            <Nav />
            <Banner />
           
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
            <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
            <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
            <Row title="COMEDY MOVIES" fetchUrl={requests.fetchtComedyMovies} />
            <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="DOCUMENTRIES" fetchUrl={requests.fetchDocumentaries} />
            <Footer/>
        </div>

    );
}

export default App;



 