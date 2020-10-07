// const api = fetch('https://zingmp3.vn/api/search/multi?q=phi nhung&ctime=1602063429&sig=a9c222befe61ac152e996a495c6cd60bbb2884b7fc362e8b4b3388b7afb22b44d59a936d23625845e2c2599dbb8a5bb87943a1a3e522fd95e02d670664991c7a&api_key=38e8643fb0dc04e8d65b99994d3dafff');
const fetcAPI = fetch("http://pokeapi.co/api/v2/evolution-chain/?limit=120&offset=200");
fetcAPI
  .then(response => {
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err))