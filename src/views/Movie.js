import React, { useEffect, useState } from "react";
import { moviesApi } from "api/api";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Poster from "layouts/Poster";
import { Link } from "react-router-dom";

function Movie() {
  const [state, setState] = useState({
    movies: null,
    loading: true,
  });

  useEffect(() => {
    async function getMovies() {
      try {
        const {
          data: { results },
        } = await moviesApi.popular();
        setState({ movies: results, loading: false });
        console.log(results);
      } catch (e) {
        console.log(e);
      }
    }

    getMovies();
  }, []);

  return (
    <>
      {state.loading ? (
        "Loading..."
      ) : (
        <Container fluid>
          <Row className="p-5">
            <Col>
              <Carousel className="w-100">
                {state.movies.map((movie, index) => (
                  <Carousel.Item key={movie.id} style={{ maxHeight: 500 }}>
                    <Link to={`/detail/${movie.id}`}>
                      <img
                        className="w-100"
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt={movie.original_title}
                      />
                    </Link>
                    <Carousel.Caption>
                      <h3>{movie.original_title}</h3>
                      <p>{movie.overview.slice(0, 80)}...</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
          <Row>
            {state.movies.map((movie, index) => {
              if (index < 12) {
                return (
                  <Col lg="1" md="2" sm="3">
                    <Poster {...movie} />
                  </Col>
                );
              } else {
                return null;
              }
            })}
          </Row>
        </Container>
      )}
    </>
  );
}

export default Movie;
