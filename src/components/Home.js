import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setMovies } from "../features/movie/movieSlice";
import db from "../firebase";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import { Helmet } from "react-helmet";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(tempMovies));
    });
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Disney+ Clone</title>
        <link rel="canonical" href={window.location} />
        <link rel="icon" href="/images/logo.svg" />
        <link rel="apple-touch-icon" href="/images/logo.svg" />
        <meta
          name="description"
          content="Disney+ clone created by Akhlak Hossain Jim with React-Redux tamplate, Styled-Component, react-hrlmet & firebase"
        />
      </Helmet>
      <Container>
        <ImgSlider />
        <Viewers />
        <Movies />
      </Container>
    </>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
