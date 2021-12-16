import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import { Helmet } from "react-helmet";
import { selectUserName } from "../features/user/userSlice";
import { useHistory } from "react-router-dom";

function Home() {
  const userName = useSelector(selectUserName);
  const history = useHistory();

  useEffect(() => {
    if (!userName) {
      history.push("/login");
    }
  }, [userName]);

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
