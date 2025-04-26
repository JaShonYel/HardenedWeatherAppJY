# HardenedWeatherAppJY
weather app with security in for for front of my though
you put in zip code which must fit the US format of 5 digits 
then it gives you weather data once it fetches the relivent json which must fit format or it wont work
then it logs the json and zip code in a database once the json is parsed into normal text (string) 

#dependencies
cors (^2.8.5): Middleware for enabling Cross-Origin Resource Sharing (CORS) in your Express application. It allows your frontend to make requests to your backend hosted on a different origin.
dotenv (^16.5.0): A module that loads environment variables from a .env file into process.env. This is used to securely manage sensitive configuration data like database credentials.
express (^5.1.0): A web application framework for Node.js, used to build your server and handle HTTP requests.
mysql (^2.18.1): A Node.js driver for MySQL, used to interact with your MySQL database.
mysql2 (^3.14.0): A modern MySQL client for Node.js, offering better performance and additional features compared to the mysql package.
