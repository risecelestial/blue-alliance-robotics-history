Blue Alliance Robotics History

Project: FIRST Robotics Competition Exploration

Project Description

Blue Alliance Robotics History is a website about the history of FIRST Robotics Competition (FRC) teams, competitions, and important events in robotics.
The goal of this project is to give people a way to learn about robotics teams and their history. The website includes a timeline, team information, navigation, and other interactive features.
We originally built the website using HTML, CSS, and JavaScript. As the project continued, we also created a React frontend and an Express backend. This allowed us to add more features and learn how the frontend and backend work together.

Technologies Used

HTML is used to build the structure of the website.
CSS is used for the design, colors, layout, and responsive styling.
JavaScript is used for the interactive features and website content.
React is used to build the frontend with components.
Vite is used to run the React application.
React Router is used to move between pages in the React application.
Node.js is used to run the backend.
Express is used to create the REST API.
Vitest and Supertest are used to test the backend.
Git and GitHub are used to save our work and manage changes.
GitHub Actions is used to run automated checks.
GitHub Pages is used to publish the original website.

Website Features

The original website includes a historical robotics timeline, an Original and Sustaining Teams section, previous and next navigation buttons, a team image carousel, and automatic image carousel advancement. Team information is displayed with JavaScript. The website also includes responsive styling for different screen sizes, FIRST Robotics branding, and project information.
The newer React application adds a page showing all robotics teams and a page showing information about one team. Users can create, edit, and delete teams. The application also includes navigation between pages, communication with the Express backend, and loading and error messages when something goes wrong.

Project Structure

The repository contains the original website and the newer full-stack application.
The original website files include index.html, which contains the main website structure; style.css, which contains the website styling; script.js, which handles the timeline, team information, and interactive features; and first_logo.png, which contains the FIRST Robotics logo.
The frontend folder contains the React application, its components, pages, Vite configuration, and other frontend files.
The backend folder contains the Express application and its API files. The server.js file starts the backend server. The app.js file sets up Express and middleware. The routes folder contains the API routes. The controllers folder contains the code that handles API operations. The data folder contains the initial team information. The tests folder contains the automated tests.
The repository also includes documentation files such as README.md, API_CONTRACT.md, HANDOFF_SUMMARY.md, KNOWN_ISSUES.md, DEBUGGING_ANALYSIS.md, and Teamlog.md.

How to Run the Original Website

The original website does not need a backend to run. Open the repository's main folder and open index.html in a browser.
How to Run the React and Express Application
You need Node.js and npm installed on your computer.
The frontend and backend run separately. To start the backend, go to the backend folder and check its package.json file for the available commands. The backend runs at http://localhost:3000.
To start the frontend, go to the frontend folder and check its package.json file for the available commands. The Vite development address is usually http://localhost:5173.
Both the frontend and backend need to be running to use the full-stack application.
The API address is http://localhost:3000/api/teams.

How to Run the Tests

The backend uses Vitest and Supertest. To find the test command, go to the backend folder and check its package.json file.
The tests check whether the API can get all teams, get one team, create a team, update a team, and delete a team. They also check how the API handles a team that does not exist, missing or invalid information, and duplicate team numbers.

API Information

The backend has five main routes.
GET /api/teams gets all teams.
GET /api/teams/:id gets one team.
POST /api/teams creates a team.
PUT /api/teams/:id updates a team.
DELETE /api/teams/:id deletes a team.

More information about the requests and responses can be found in API_CONTRACT.md.

Current Limitations

The backend currently saves team information in an in-memory JavaScript array. This means that changes are temporary. If the backend is restarted, the original sample information comes back.
We have not added a permanent database or user login system yet.
Some of the historical information and team records are also examples and still need to be researched and verified. More real team pictures and historical information can be added in the future.

Project Reflection

We built the Blue Alliance Robotics History website using HTML, CSS, and JavaScript. We separated the page into a header, navigation, main sections, and footer to keep the code organized and make it easier to update. We also considered accessibility by using meaningful HTML elements, descriptive links, and alternative text for images.

We used Flexbox to line up items like the FIRST logo, website title, and navigation links. We used Grid to organize the timeline cards into rows and columns. These layouts help keep the website organized on different screen sizes. We also used CSS media queries to adjust the layout for phones and smaller screens.

One of our biggest challenges was getting the website on GitHub Pages to look like our original design. At first, the page showed basic text instead of the blue header, timeline cards, and footer we wanted. We had to look through our HTML and CSS to figure out what was wrong.

Then we had another issue with GitHub Pages not loading our content correctly, which we solved by properly nesting HTML items under their parent elements and checking the active and inactive styles. We also had trouble matching the CSS filename in the HTML and finding the right place to change spacing. By checking our code and testing changes in the browser, we learned how small mistakes can affect the whole page.

JavaScript development was more challenging than we originally expected. Through trial and error, we developed a template that allows us to add timeline events and team information without constantly changing the HTML. The original application uses JavaScript arrays to generate content and manage the interactive features.

As the project developed, we also started learning more about full-stack development. We added React for the frontend and Express for the backend. This helped us understand how a website can request information from a server instead of keeping everything in the frontend. We also learned how to use API routes, fetch requests, and automated tests.

This project helped us understand how different parts of web development work together. We also learned that testing, debugging, and documenting a project are important because someone else might need to work on the same application later.

Additional Documentation

HANDOFF_SUMMARY.md explains what the application does and its current status.
API_CONTRACT.md explains the backend routes and how the API works.
KNOWN_ISSUES.md lists problems, limitations, and future improvements.
DEBUGGING_ANALYSIS.md explains how React communicates with Express.
Teamlog.md contains project development notes.

Project Credits

Original Project Creators: Rohanji Novas and Eric Edwards.
FIRST Robotics: https://www.firstinspires.org/
The Blue Alliance: https://www.thebluealliance.com/
GitHub Repository: https://github.com/risecelestial/blue-alliance-robotics-history
