import dotenv from 'dotenv';

dotenv.config();

/**
 * Author: John Doe
 * Description: This file handles the configuration values for the application.
 * The values are retrieved from the environment variables using the dotenv package.
 */

// Retrieve the MongoDB username from the environment variable, defaulting to an empty string
const MONGO_USERNAME = process.env.MONGO_USERNAME || '';

// Retrieve the MongoDB password from the environment variable, defaulting to an empty string
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';

// Construct the MongoDB URL with the username and password
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@clusterite-5435.3vnjmxg.mongodb.net/Book_Management`;

// Retrieve the server port from the environment variable, defaulting to 1337
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

// Retrieve the JWT secret from the environment variable, defaulting to a hardcoded value
const JWT_SECRET = process.env.JWT_SECRET || 'Jd12lOjqJVZx5TxOclxHFxKmQMbefndprzpUx5Ht9u8=';

// Configuration object
export const config = {
    mongo: {
        username: MONGO_USERNAME,
        password: MONGO_PASSWORD,
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    },
    jwt: {
        secret: JWT_SECRET
    }
};
