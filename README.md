# Reminder API

Backend REST API on Node.js  + Express.js + Sequelize.

## Quick Start to run locally

Clone Repo
Run npm install
Setup Mysql Connection. Get connection credentials

## Create .env file

    Create .env file in project folder
    Enter these lines:

     DB_CONNECTION=mysql
     DB_HOST=
     DB_DATABASE=
     DB_USERNAME=
     DB_PASSWORD=

## Start App
    npm start

## Project Structure

```
src\
 |--config\         # Environment variables and database configurations
 |--controllers\    # Route controllers (controller layer)
 |--models\         # Sequelize models (data layer)
 |--routes\         # Routes
 |--app.js          # Express app