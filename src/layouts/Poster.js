import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(27, 26, 26, 0.5);
`;

function Poster({
  id,
  poster_path,
  vote_average,
  original_title,
  release_date,
}) {
  return (
    <Link to={`/detail/${id}`}>
      <Container>
        <ImageContainer>
          <Image bgUrl={`https://image.tmdb.org/t/p/w300/${poster_path}`} />
          <Rating>
            <span role="img" aria-label="rating">
              ⭐️
            </span>
            {vote_average}/10
          </Rating>
        </ImageContainer>
        <Title>
          {original_title.length > 10
            ? `${original_title.substring(0, 10)}...`
            : original_title}
        </Title>
        <Year>{release_date.substring(0, 4)}</Year>
      </Container>
    </Link>
  );
}

export default Poster;
