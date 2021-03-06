import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_Url = "https://image.tmdb.org/t/p/w1280";
//  https://image.tmdb.org/t/p/originals/

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    // console.table(movies);
    const opts = {
        height: "390",
        width: "100",
        playerVars: {
            autoplay: 1,
        }
    };

    const handleclick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        }
        else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch((error) => console.log(error));
        }
    };
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => (
                    <img
                        key={movies.id} onClick={() => handleclick(movie)} className="row_poster"
                        src={`${base_Url}${movie.backdrop_path}`} alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row