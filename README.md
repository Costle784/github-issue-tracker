# Github Issue Tracker

### An interface to view/prioritize github issues

## Technologies used

-   React - bootstrapped with create-react-app
-   React Hooks
-   React Router
-   Redux
-   Redux Thunk
-   Jest

## Installation and Usage

-   Create an API Key in Github - Repos is a required scope.
-   For testing (if necessary) - uncomment public repositores path in api.js (`/repositories`) to fetch repos that have many issues spanning multiple years.
-   clone repo
-   npm install
-   npm start (should automatically open browser pointing to `localhost:3000`)
-   Input your API key and press 'submit'
-   Sortable fields are 'Created' and 'Last Updated'. Sort selection will persist as long as your browser tab remains open.
