//get the tmdb api key
// api key- b5d0de38dbe4ff4bb1cae576ea3649ab;
// axios is installed with npm i axios
import React from "react";
import Row from "./Row";
import requests from "./requests";
import "./MainStyle.css";
import Banner from "./Banner";
import Nav from "./Nav";

function Main() {
  return (
    <>
      <div className="main">
        <Nav></Nav>
        <Banner></Banner>
        <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals}></Row>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
        <Row title="Animation" fetchUrl={requests.fetchAnimation}></Row>
        <Row title="Comedy" fetchUrl={requests.fetchComedy}></Row>
        <Row title="Adventure" fetchUrl={requests.fetchAdventure}></Row>
        <Row title="Mystery" fetchUrl={requests.fetchMystery}></Row>
        <Row title="Crime" fetchUrl={requests.fetchCrime}></Row>
        <Row title="Science Fiction" fetchUrl={requests.fetchSciFi}></Row>
        <Row title="Romance" fetchUrl={requests.fetchRomance}></Row>
      </div>
    </>
  )
}

export default Main;