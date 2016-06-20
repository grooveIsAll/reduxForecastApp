# reduxForecastApp

#####Checkout Install dependencies, start build process with the following terminal commands:#####

    > git clone git@github.com:grooveIsAll/reduxForecastApp.git
    > cd reduxForecastApp
    > npm install
    > npm start

#####You will need an API Key from http://openweathermap.org/appid#get#####

    > create a .env file inside of the root directory
    > place your API Key inside of a variable (var or const) and export it
      ex. const API_KEY = 'yourAPIKey23oiu4oi323234909348';
          export default API_KEY;
    > if you plan on pushing your code to github, make sure to update .gitignore w/ .env
    
or

    > directly use your API Key inside of src/actions/index
      ex. replace: import API_KEY from './../../.env';
          with:    API_KEY = 'yourAPIKey23oiu4oi323234909348';
