# Plaidypus-Code-Challenge
This project is a two page web application using the Yelp Fusion API.

This project contains two main portions.

    1. React Front-End
        This uses React to render the projects. Bootstrap was to make styling easier, however I tried to keep the UI as simple as I could.

    2. Express Back-End
        I used Express to create a pair of API routes that were used to pass information into a Yelp Fusion API call.

Quick Start

    1. Clone this repository and you should see tow main folders, front-end (React) and back-end (Express).

    2. Start the Express Server.

        cd /back-end/plaidypus-code-challenge-back-end
        npm install
        Add your Yelp Fusion API Key into the variable API_KEY in index.js.
        node index.js

    3. Start the React Server.
    
        cd /front-end/plaidypus-code-challenge-front-end
        npm install (This will take some time.)
        npm start

    4. Go to http://localhost:3000/ to use the application.
