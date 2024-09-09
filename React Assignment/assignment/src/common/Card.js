import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { getCartoonList, paginateList } from "../actions";
import ReactPaginate from "react-paginate";
import NoData from "../assets/images/no-data.png";

function CardItem({
  list,
  filteredByGender,
  filteredBySpecies,
  filteredArr,
  totalPage,
}) {
  const [listData, setListData] = useState(list);
  const [pageData, setpageData] = useState([]);
  const dispatch = useDispatch();

  const handlePageClick = ({ selected }) => {
    console.log("selected", selected);
    setpageData(selected + 1);
    const number = selected + 1;
    dispatch(paginateList(number));
  };

  useEffect(() => {
    dispatch(getCartoonList());
  }, []);

  useEffect(() => {
    setListData(list);
  }, [list]);

  useEffect(() => {
    setListData(filteredByGender);
  }, [filteredByGender]);

  useEffect(() => {
    setListData(filteredBySpecies);
  }, [filteredBySpecies]);

  useEffect(() => {
    setListData(filteredArr);
  }, [filteredArr]);

  return (
    <>
      <Row className="mt-4 w-100">
        {listData.length > 0 ? (
          listData.map((data) => (
            <Col md={3} sm={6} className="mx-xs-3">
              <Card className="card-container mb-4">
                <Card.Img
                  variant="top"
                  src={data.image}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title className="elipsis-title">{data.name}</Card.Title>
                  <Card.Text>
                    <div className="d-flex justify-content-between">
                      <div>Species</div>
                      <div className="elipsis-text">{data.species}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>Gender</div>
                      <div>{data.gender}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>Origin</div>
                      <div className="elipsis-text">{data.origin.name}</div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col md={12} className="d-flex justify-content-center mb-4">
            <img src={NoData} />
          </Col>
        )}
      </Row>
      <Row className="w-100 mb-5 mt-3">
        <div className="d-flex justify-content-center pagination-container w-100">
          <ReactPaginate
            previousLabel={"PREV"}
            nextLabel={"NEXT"}
            pageCount={totalPage}
            onPageChange={handlePageClick}
            containerClassName={"paginationBtn"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            //   onClick={handlePageClick}
          />
        </div>
      </Row>
    </>
  );
}

const mapStateToProp = (state) => {
  return {
    list: state.cartoon.list,
    filteredByGender: state.cartoon.filteredgender,
    filteredBySpecies: state.cartoon.filteredSpecies,
    filteredArr: state.cartoon.filteredArr,
    totalPage: state.cartoon.totalPage,
  };
};

export default connect(mapStateToProp)(CardItem);
