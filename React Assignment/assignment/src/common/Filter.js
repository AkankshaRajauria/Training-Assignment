import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  getCartoonList,
  getFilteredGenderList,
  getFilteredList,
  getFilteredSpeciesList,
  getSortedList,
} from "../actions";

function Filter({ currentPage, list }) {
  const [speciesVal, setSpeciesVal] = useState("");
  const [genderVal, setGenderVal] = useState("");
  const [pageNumber, setPageNumber] = useState(currentPage);

  const dispatch = useDispatch();

  useEffect(() => {
    setPageNumber(currentPage);
    console.log("curre", currentPage, pageNumber);
  }, [currentPage]);

  const species = [
    { name: "Human" },
    { name: "Alien" },
    { name: "Other Species" },
  ];
  const gender = [{ name: "Male" }, { name: "Female" }, { name: "Unknown" }];

  const onGenderSelect = (data) => {
    if (speciesVal == "") {
      setGenderVal(data[0].name);
      dispatch(getFilteredGenderList(data[0].name, pageNumber));
    } else {
      setGenderVal(data[0].name);
      dispatch(getFilteredList(data[0].name, speciesVal, pageNumber));
    }
  };

  const onGenderRemove = () => {
    if (speciesVal != "") {
      dispatch(getFilteredSpeciesList(speciesVal, pageNumber));
    } else {
      dispatch(getCartoonList(pageNumber));
    }
  };

  const onSpeciesSelect = (data) => {
    if (genderVal == "") {
      setSpeciesVal(data[0].name);
      dispatch(getFilteredSpeciesList(data[0].name, pageNumber));
    } else {
      setSpeciesVal(data[0].name);
      dispatch(getFilteredList(genderVal, data[0].name, pageNumber));
    }
  };

  const onSpeciesRemove = () => {
    if (genderVal != "") {
      dispatch(getFilteredGenderList(genderVal, pageNumber));
    } else {
      dispatch(getCartoonList(pageNumber));
    }
  };

  const handleSorting = (e) => {
    dispatch(getSortedList(list, e.target.value));    
  }

  return (
    <>
      <div className="d-flex mobile-flex-2 mx-xs-3">
        <Multiselect
          options={gender} // Options to display in the dropdown
          onSelect={onGenderSelect} // Function will trigger on select event
          onRemove={onGenderRemove} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
          className="pr-md-3 pr-sm-3 mb-1"
          placeholder="Select Gender"
        />

        <Multiselect
          options={species} // Options to display in the dropdown
          onSelect={onSpeciesSelect} // Function will trigger on select event
          onRemove={onSpeciesRemove} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
          placeholder="Select Species mb-1"
          className="mb-1"
        />
        <div className="mx-sm-3 mb-1">
          <select class="form-select form-control" onChange={handleSorting}>
            <option value="asc">ASC</option>
            <option value="des">DES</option>
          </select>
        </div>
      </div>
    </>
  );
}

const mapStateToProp = (state) => {
  return {
    currentPage: state.cartoon.currentPage,
    list: state.cartoon.list
  };
};

export default connect(mapStateToProp)(Filter);
