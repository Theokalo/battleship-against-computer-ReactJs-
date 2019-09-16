export default (function () {
  function urlHeader() {
    const headers = {
        "x-api-key": "FZx4L2sgc49cSxOuNijDyTqmWtGNS3v5EYr7eVA7", 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    var url = "https://cors-anywhere.herokuapp.com/https://zyqh9s9xt4.execute-api.eu-west-1.amazonaws.com/prod/battle";

    return {
      headers,
      url
    }  
  }
  return {
    urlHeader: urlHeader
  };
})();