import axios from "axios";

export const fetchQuote = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url:
        "https://cors-anywhere.herokuapp.com/https://mashape-community-foaas.p.rapidapi.com/donut/Cors/Gabe",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "mashape-community-foaas.p.rapidapi.com",
        "x-rapidapi-key": "059fad596amshc02f429e5e0ddcfp1217e8jsndef8c50e19f0",
        useQueryString: true,
      },
    })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "FETCH_QUOTE_SUCCESS",
          payload: response.data.message,
        });
        dispatch({
          type: "FETCH_NAME_SUCCESS",
          payload: response.data.subtitle,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
