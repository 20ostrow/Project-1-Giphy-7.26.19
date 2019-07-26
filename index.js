var giphyApiKey = "njwVXtRQrZqeqMapbFDShdZ5UBV5YcR0";

function sendAPIRequest(){
  var input = document.getElementById("input").value;

  if (input === ""){ return; }//makes sure empty string is not sent as a request

  var giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${giphyApiKey}`;

  fetch(giphyApiUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      var img = document.createElement("img");
      img.src = json["data"][0]["images"]["fixed_height"]["url"];
      document.body.appendChild(img);
    })
}
