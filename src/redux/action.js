import { apiUrl } from "../api/api";
export const fetchBooks = () => async dispatch => {
  try {
    dispatch({type: 'FETCH_BOOKS'});
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': '#b0@6hX8YasCq6^unOaPw1tqR',
    };
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(`Request Failed With Status ${response.status}`);
    }
    const data = await response.json();
    dispatch({type: 'FETCH_BOOKS', payload: data.data});
  } catch (error) {
    console.log(`Error while getting Data ${error.messege}`);
  }
};

export const addToFav = data => {
  return {
    type: 'ADD_TO_FAV',
    payload: data,
  };
};
export const removeFromFav = (itemId)=>{
  return{
    type:'REMOVE_FROM_FAV',
    payload:itemId
  }
}