import React from "react";
import Header from "../common/Header";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import Card from "../common/Card";
import Filter from "../common/Filter";
import Search from "../common/Search";
// import '../App.css';

function Main() {
  return (
    <>
      <Header />
      <Container className="mt-5 px-0">
        <Col className="d-flex justify-content-between px-0 mobile-flex">
          <Filter />
          <Search />
        </Col>
        <Row className="justify-content-center">
          <Card />
        </Row>
      </Container>
    </>
  );
}

export default Main;
