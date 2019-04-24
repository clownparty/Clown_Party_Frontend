export let Api_Url = "";

switch (window.location.hostname) {
  case 'poke-teambuilder-ng.herokuapp.com':
      Api_Url= "https://pokemonteam-builder.herokuapp.com/api/v1"
      break;

  default:

      Api_Url= "http://localhost:5000/api/v1"
}