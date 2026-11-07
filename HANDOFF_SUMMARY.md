Project Handoff Summary

Project: Blue Alliance Robotics History
Repository: https://github.com/risecelestial/blue-alliance-robotics-history
Original Developers: Rohanji Novas and Eric Edwards

1. What the Application Does

Blue Alliance Robotics History is a website about the history of FIRST Robotics Competition (FRC) teams and their involvement in robotics competitions.
The goal is to organize information about robotics teams, historical events, competition participation, and achievements.
The original website has a historical timeline and an Original and Sustaining Teams section. Visitors can browse team information using navigation buttons and an image carousel.
The project was originally built with HTML, CSS, and JavaScript. It was later expanded into a full-stack application using React and Express.

2. What Is Already Built

The original website includes a header with the FIRST Robotics logo and navigation, a historical timeline, timeline events generated with JavaScript, an Original and Sustaining Teams section, previous and next team buttons, an image carousel, automatic carousel advancement, team information displayed dynamically, responsive styling for different screen sizes, and a footer with project information and links.
The React application adds a team management system.
It allows users to view all robotics teams, view information about one team, add a new team, edit an existing team, delete a team, navigate between different pages, and retrieve information from the Express backend.
The React application also uses asynchronous requests to communicate with the backend. It displays loading and error messages when needed.

3. Technologies Used

Original Website:

HTML, CSS, and JavaScript.

Full-Stack Application:

React, Vite, React Router, Node.js, Express, Fetch API, Vitest, and Supertest.
Git and GitHub are used to manage the project, and GitHub Actions is used for automated checks.

4. How the Application Is Organized

The repository contains the original website and the newer full-stack application.
The main original website files are index.html, style.css, script.js, and first_logo.png.
The frontend folder contains the React application, including its pages, components, and Vite configuration.
The backend folder contains the Express application.

Important backend files include server.js, which starts the server; app.js, which sets up Express; routes/teams.js, which contains the team API routes; controllers/teamController.js, which handles the team operations; data/teams.js, which contains the initial team data; and the tests folder, which contains the automated tests.
The main documentation files are README.md, API_CONTRACT.md, HANDOFF_SUMMARY.md, KNOWN_ISSUES.md, and DEBUGGING_ANALYSIS.md.

5. Current Backend Functionality

The backend supports all four CRUD operations.
Create allows users to add a new team. Read allows users to retrieve all teams or one team. Update allows users to edit an existing team. Delete allows users to remove a team.

The API has five routes:

GET /api/teams
GET /api/teams/:id
POST /api/teams
PUT /api/teams/:id
DELETE /api/teams/:id

The backend returns appropriate HTTP status codes and JSON error messages.
The team data is currently stored in an in-memory JavaScript array. It is not connected to a permanent database.

6. How to Run the Application

Node.js and npm are needed to run the full-stack application.
The backend is located in the backend folder. Check its package.json file for the commands to install dependencies and start the server. The backend runs at http://localhost:3000.
The frontend is located in the frontend folder. Check its package.json file for the commands to install dependencies and start the development server. The frontend usually runs at http://localhost:5173.
Both servers must stay running while using the React application.
To run the backend tests, go to the backend folder and check its package.json file for the test command.
More information is available in README.md.

7. Current Project Status

The original website has been developed and tested. The React frontend and Express backend have also been implemented.
The main features of the full-stack application are working, including the team pages, API communication, CRUD operations, and automated backend tests.
The repository also includes documentation explaining how the application works and how another developer can run it.
However, there are still some things that can be improved. The team records are currently sample information, and the historical timeline needs more research. The backend also uses temporary in-memory storage instead of a permanent database.

8. Known Issues and Future Improvements

Some areas that still need work include adding more verified historical events, researching and adding accurate robotics team information, adding more team photographs, improving the search and filtering features, adding permanent database storage, adding user login and authentication, and connecting the original website and React application more closely.
These limitations are explained in more detail in KNOWN_ISSUES.md.

9. What the Next Developer Should Do

The next developer should first look through the project and understand how the original website and full-stack application are organized.
The next developer should read the README and API contract, clone the repository and get both servers running, run the existing backend tests, and check that the original website still works.
After that, they can research real FIRST Robotics Competition teams and historical events, replace sample information with verified information, add real team pictures, consider adding a permanent database, improve the search and filtering features, and add more tests when new features are created.


10. Final Handoff Notes

The next developer should be able to use the existing code and documentation to continue working on the project.
The biggest areas for future development are adding accurate historical information, improving the team directory, and eventually adding permanent data storage.
