import axios from "axios";
import { baseURL, cartoonList } from "../services/cartoon.service"
import { type } from "@testing-library/user-event/dist/type";

export const getCartoonList = (page) => async dispatch => {
   const res = await axios.get(`${baseURL}?page=${page}`).then(res => {
      return dispatch({
         type : "GET_LIST",
         payload : res.data.results,
         pageCount: res.data.info.pages
      })
   })
   .catch(err => {
      return dispatch({
         type: "GET_LIST",
         payload: [],
      })
   })
   
   
}

export const getFilteredGenderList = (gender, page) => async dispatch => {

   const res = await axios.get(`${baseURL}?gender=${gender}&page=${page}`).then(res => {
      return dispatch({
         type : "FILTER_BY_GENDER",
         payload : res.data.results,
         // data : allData.data.results
      })
   })
   .catch(err => {
      return dispatch({
         type: "FILTER_BY_GENDER",
         payload: [],
      })
   })
   
}

export const getFilteredSpeciesList = (species, page) => async dispatch => {
   
      const res = await axios.get(`${baseURL}?species=${species}&page=${page}`).then(res => {
         return dispatch({
            type : "FILTER_BY_SPECIES",
            payload : res.data.results,
            // data : allData.data.results
         })
      })
      .catch(err => {
         return dispatch({
            type: "FILTER_BY_SPECIES",
            payload: [],
         })
      })
      
}

export const getFilteredList = (gender, species, page) => async dispatch => {
   const res = await axios.get(`${baseURL}?species=${species}&gender=${gender}&page=${page}`).then(res => {
      return dispatch({
         type : "FILTER_BY_CAT",
         payload : res.data.results,
         // data : allData.data.results
      })
   })
   .catch(err => {
      return dispatch({
         type: "FILTER_BY_CAT",
         payload: [],
      })
   })
   
}

export const paginateList = (pageNo) => async dispatch => {
   
   const res = await axios.get(`${baseURL}?page=${pageNo}`).then(res => {
      return dispatch({
         type : "PAGINATE_LIST",
         payload : res.data.results,
         currentPage : pageNo
      })
   })
   .catch(err => {
      return dispatch({
         type: "PAGINATE_LIST",
         payload: [],
      })
   })
   
}

export const searchCharacter = (val) => async dispatch => {
   const res = await axios.get(`${baseURL}?name=${val}`).then(res => {
      return dispatch({
         type : "SEARCH",
         payload : res.data.results,
      })
    })

   .catch(err => {
      return dispatch({
         type: "SEARCH",
         payload: [],
      })
   })
}

export const getSortedList = (val, order) => {
   if(order === "asc")
   {
      var sortedList = [...val].sort((a,b) => {
         return a.name.localeCompare(b.name);
      })
   }
   else {
      var sortedList = [...val].sort((a,b) => {
         return b.name.localeCompare(a.name);
      })
   }
   
   return {
      type: "SORTED_LIST",
      payload: sortedList
   }
}
