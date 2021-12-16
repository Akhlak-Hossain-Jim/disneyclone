import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import movieData from "./data.json";

function Detail() {
  const [movie, setMovie] = useState();

  const data = movieData.movieData;

  const path = useParams();

  useEffect(() => {
    setMovie(path && data.filter((d) => d.title === path.id));
  }, [data, path]);

  return (
    <>
      {movie && (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{movie[0].title} | Disney+ clone</title>
            <link rel="canonical" href={window.location} />
            <link rel="icon" href={movie[0].titleImg} />
            <link rel="apple-touch-icon" href={movie[0].titleImg} />
            <meta name="description" content={movie[0].description} />
          </Helmet>
          <Container>
            {/* <> */}
            <Background>
              <img src={movie[0].backgroundImg} alt="" />
            </Background>
            <ImageTitle>
              <img src={movie[0].titleImg} alt="" />
            </ImageTitle>
            <Controls>
              <PlayButton>
                <img src="/images/play-icon-black.png" alt="" />
                <span>PLAY</span>
              </PlayButton>
              <TrailerButton>
                <img src="/images/play-icon-white.png" alt="" />
                <span>Trailer</span>
              </TrailerButton>
              <AddButton>
                <span>+</span>
              </AddButton>
              <GroupWatchButton>
                <img src="/images/group-icon.png" alt="" />
              </GroupWatchButton>
            </Controls>
            <SubTitle>{movie[0].subTitle}</SubTitle>
            <Description>{movie[0].description}</Description>
          </Container>
        </>
      )}
    </>
  );
}

export default Detail;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin: 60px 0;
  @media (max-width: 768px) {
    margin: 10px 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0 24px;
  margin-right: 22px;
  height: 56px;
  letter-spacing: 1.8px;
  display: flex;
  align-items: center;
  background-color: rgb(249, 249, 249);
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 12px;
    height: 30px;
    padding: 0 10px;
    margin-right: 10px;
    img {
      height: 50%;
    }
    span {
      padding: 0 10px 0 0;
    }
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  @media (max-width: 768px) {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    span {
      font-size: 20px;
    }
  }
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
  @media (max-width: 768px) {
    img {
      height: 80%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;
