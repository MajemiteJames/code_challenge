# Code Challenge


# Goal:
# Building REST API using Node Js.
# Context:
The goal of this project is to create a REST API responsible for exposing “the air
quality information” of a nearest city to GPS coordinates using iqair :

https://www.iqair.com/fr/commercial/air-quality-monitors/airvisual-platform/api

# Tasks:
● Configuration:
- register on “iqair” and create your API KEY (
https://www.iqair.com/fr/dashboard/api )
- NOTE: the activation of the key can take a few minutes (about 5
minutes).
- Fetch “air quality “ with this URL ( https://api-docs.iqair.com/ par
longitude/latitude ) using postman or another platform to test the API.
- Test the endpoint “ v2/nearest_city” of iqair API.


# Installtions
1 Clone this repository to your local machine 
 https://github.com/MajemiteJames/code_challenge
  
 # Install dependencies
 
  npm install

  Run npm run server to start the application.
  
  # API ENDPOINTS
  HTTP VERB	ENDPOINT	FUNCTIONALITY
  
  POST api/air_quality?lat=48.856613&lon=2.352222  Get Air Pollution by latitude and longitude
  
  POST /api/air_quality/paris  Get Air Pollution of Paris
  

  
  # Testing
  Install Postman to test the endpoints manually.
  
  Run npm test to test all the endpoints.
  