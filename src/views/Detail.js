import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { moviesApi } from "api/api";
import {
  Alert,
  Card,
  CardDeck,
  Col,
  Container,
  Row,
  Spinner,
} from "react-bootstrap";

function Detail(props) {
  const { id } = useParams();

  const [info, setInfo] = useState({
    data: null,
    isLoading: true,
  });

  useEffect(() => {
    async function getDetail() {
      try {
        const { data } = await moviesApi.movieDetail(Number(id));
        setInfo({
          data,
          isLoading: false,
        });
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
    getDetail();
  }, [id]);

  return (
    <>
      {info.isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <Container fluid>
          <Row>
            <Col lg={4}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${info.data.poster_path}`}
                alt={info.data.original_title}
                className="w-100 h-100"
              />
            </Col>
            <Col lg={8}>
              <Card className="h-100">
                <Card.Header>
                  <Card.Title as="h3">{info.data.original_title}</Card.Title>
                  <p className="card-category">
                    {info.data.runtime} min / {info.data.release_date} 개봉 /{" "}
                    {info.data.vote_average}
                  </p>
                </Card.Header>
                <Card.Body>
                  <hr />
                  <Row>
                    <Col xs="10">
                      <p className="text-muted">{info.data.overview}</p>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <hr />
                  <Row>
                    <Col>
                      {info.data.genres.map((genre, idx) => (
                        <Alert key={idx} variant="secondary" className="mr-2">
                          {genre.name}
                        </Alert>
                      ))}
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          {info.data.videos.results !== null && (
            <Row className="mt-5">
              <Col>
                <CardDeck>
                  {info.data.videos.results.map((video, index) => (
                    <Card>
                      <Card.Header>
                        <iframe
                          title={video.name}
                          src={`https://www.youtube.com/embed/${video.key}`}
                          className="w-100"
                        ></iframe>
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>{video.name}</Card.Title>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={`https://www.youtube.com/embed/${video.key}`}
                        >
                          <small className="text-muted">{`https://www.youtube.com/embed/${video.key}`}</small>
                        </a>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </Card.Footer>
                    </Card>
                  ))}
                </CardDeck>
              </Col>
            </Row>
          )}
        </Container>
      )}
    </>
  );
}

export default Detail;
