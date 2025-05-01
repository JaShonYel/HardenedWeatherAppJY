# HardenedWeatherAppJY
weather app with security in for for front of my though

you put in zip code which must fit the US format of 5 digits 

then it gives you weather data once it fetches the relivent json which must fit format or it wont work

then it logs the json and zip code in a database once the json is parsed into normal text (string) 

#dependencies
cors: Middleware for enabling Cross-Origin Resource Sharing (CORS) in your Express application. It allows your frontend to make requests to your backend hosted on a different origin.

dotenv: A module that loads environment variables from a .env file into process.env. This is used to securely manage sensitive configuration data like database credentials.

express: A web application framework for Node.js, used to build your server and handle HTTP requests.

mysql: A Node.js driver for MySQL, used to interact with your MySQL database.

#API
Im using open weather map https://api.openweathermap.org/data/2.5/forecast

Open weather map provides a 3 day weather forecast with data available in.

it sends the data in a JSON format with the data having a specific format and naming convention. my app reads that json and processes it into nice readable cards with weather data. 

if the data is improperly formatted it wont work because i am fetching the data expecting the promised output style. 

#threats
Injection into the site input- I handled this by limiting it to 5 digits 

json from api injecting into the MYSQL DB- first as i said earlier it needs to fit the format that i was promised or it wont be processed anyway, also if the zip code isnt a zip code it wont be logged
and therefore not sent to the database. Also i am turning the json into just a plain old string of text before saving it to the Database so it wont function as code in the Database if it did have something.

security over the channel- I didnt get a certificate because it is a personal project for school and it costs money. 
There also isnt any Personal info to be leaked it is just the input by the user and the json being sent to the database. 
