# Welcome to Leave Me Alone's Remote-Server

This is the **server** that provides a **REST API** for **mobile app** for records and authentication

## Before starting

Create a file called `.env` and write inside them the environment variables that are needed.

Example :

`
SERVER_PORT=3000 // The port you want this app to run on (default 80)
MONGODB_URL="mongodb://localhost:27017/leavemealone" // The URL of your mongoDB database
ACCESS_TOKEN_SECRET=GD8Z7A9GD8326D307 // A random complex string to provide a key for JWT tokens creation
AWS_ACCESS_KEY=foezygfnezhyfhe,zkul // AWS access key
AWS_SECRET_ACCESS_KEY=femzalkfknzejflzfe // AWS secret key
AWS_BUCKET_NAME=aws-lma-video-records // AWS bucket name
`

## Start

**Very easy :**

Run `npm i` to install all packages.

Run `npm start` to run the application.

## Rest API Contract (docs)

Once you started the application you can find the contract at this url : http://{IP}:{port}/leavemealone/docs

example : meerkath.com/leavemealone/docs
