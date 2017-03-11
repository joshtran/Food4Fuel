### Description

Food4Fuel is a surplus food re-distribution app: It's a platform that connects users (volunteer drivers) to grocery chains (providers of surplus inventory) and shelters (receipents of surplus inventory). A fuel point system serves as an added incentive and method to offset costs for users.


### Getting Started

  1. Install dependencies: `npm install`
  2. Create the `.env` by using `.env.example` as a reference
  3. Create local database, then update the .env file with your local information
  4. Run migrations: `knex migrate:latest`
  5. Run the seed: `knex seed:run`
  6. Run the server: `npm start`
  7. Visit http://localhost:3000
