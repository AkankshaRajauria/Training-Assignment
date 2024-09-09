import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import SearchIcon from '../assets/images/search.png'
import { connect, useDispatch } from "react-redux";
import { searchCharacter } from "../actions";

function Search({currentPage}) {

  const[input, setInput] = useState("");
  const dispatch = useDispatch();

  const onSearch = (e) => {
    e.preventDefault();
    dispatch(searchCharacter(input))
  }

  return (
    <Form className="d-flex searchspace pb-3 mx-xs-3" onSubmit={onSearch}>
      <FormControl
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <Button variant="outline-secondary" className="bg-purple">
        <img src={SearchIcon} className="search-icon"/>
      </Button>
    </Form>
  );
}

const mapStateToProp = (state) => {
    return {
        currentPage: state.cartoon.currentPage
    }
}

export default connect(mapStateToProp)(Search);
