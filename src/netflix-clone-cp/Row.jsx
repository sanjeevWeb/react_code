import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_img_url = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}){
    const [movie,setMovie] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

    //a snippet of code which runs based on a specific condition/variable
    // if am using some variable(here fetchUrl) or anything which is coming outside of function or useeffect
    //hook that means it is dependent on that and i must include it in dependency list
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovie(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVar: {
            autoplay:1,
        },
    };

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        }
        else {
            //https://www.youtube.com/watch?v=lsV8JQgSW1s
            movieTrailer(movie?.name || "")
              .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
              })
              .catch((error) => console.error(error))
        }
    }

    return(
        <>
          <h2>{title}</h2>
          <div className="row">
            <div className={`row_posters ${isLargeRow && "row_posterLarge"}`}>
                {
                    movie.map((currElem) => {
                        return(
                            <>
                              <img key={currElem.id} className="row_poster" onClick={() => handleClick(currElem)} src={`${base_img_url}${isLargeRow ? currElem.poster_path : currElem.backdrop_path}`} alt="img" />
                            </>
                        )
                    })
                }
            </div>
            { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          </div>
        </>
    )
}

export default Row;