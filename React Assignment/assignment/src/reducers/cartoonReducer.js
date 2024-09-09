const INITIAL_STATE = {
  list: [],
  filteredgender: [],
  filteredSpecies: [],
  filteredArr:[],
  totalPage: [],
  currentPage:[]
};

const cartoonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_LIST":
      const data = action.payload;            

      return {
        ...state,
        list: data,
        totalPage: action.pageCount
      };

    case "FILTER_BY_GENDER":
      console.log("action payload", action.payload);

      return {
        ...state,
        filteredgender: action.payload,
      };

    case "FILTER_BY_SPECIES":
      console.log("action payload", action.payload);

      return {
        ...state,
        filteredSpecies: action.payload,
      };

    case "FILTER_BY_CAT":
      
    return {
      ...state, 
      filteredArr: action.payload
    }

    case "PAGINATE_LIST":

    return {
      ...state,
      list: action.payload,
      currentPage: action.currentPage
    }

    case "SEARCH":
      return {
         ...state,
         list: action.payload
      }
    
      
    case "SORTED_LIST":
      return {
         ...state,
         list: action.payload
      }

    default:
      return state;
  }
};

export default cartoonReducer;
