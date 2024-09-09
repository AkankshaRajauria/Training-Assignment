import axios from "axios";

export const cartoonList = () => axios.get("https://rickandmortyapi.com/api/character/");

export const baseURL = "https://rickandmortyapi.com/api/character/";