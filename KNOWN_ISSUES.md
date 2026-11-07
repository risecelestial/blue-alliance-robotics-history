Known Issues, Bugs, and Future Improvements

This document explains some things that are still unfinished or could be improved in the Blue Alliance Robotics History project. The project has both the original HTML, CSS, and JavaScript website and the newer React and Express application. Some of the issues below apply to the original website, while others apply to the newer application.

1. Historical Information

The historical timeline still needs more research. Some timeline entries are examples or placeholders and have not been fully checked. More accurate dates, event names, descriptions, and historical information should be added. The robotics team information also needs more research. The goal is to have accurate information about real FIRST Robotics Competition teams. Some information that still needs to be added or checked includes team names, team numbers, rookie years, team descriptions, competition history, important achievements, and team photographs. The next developer should check reliable sources before adding historical information.

2. Backend Storage

The Express backend currently stores team information in an in-memory JavaScript array. The data is located in backend/data/teams.js. This works for testing the API and using the CRUD features, but it does not permanently save changes. For example, if someone creates a new team and then restarts the backend, that new team will disappear. The original sample records will be loaded again. A permanent database has not been added yet. This would be a good improvement for future development.

3. Sample Team Information

The backend currently uses sample team records to test the application. These records help show how the team directory and API work, but they should not all be treated as verified historical information. The next developer should replace the sample information with researched and accurate FIRST Robotics Competition team information.

4. Original Website and React Application

The repository contains two versions of the application. The original website uses HTML, CSS, and JavaScript. The newer application uses React and Express. They currently work separately and do not share the same data. For example, creating a team through the React application does not automatically add that team to the original website. Connecting the two applications more closely could be considered in the future.

5. Images

The original website has an image carousel, and the backend supports an array of image paths for each team. However, more real team photographs still need to be added. The current backend does not have an image upload system. Images must be added and their paths maintained by the developer. The next developer should make sure that image paths are correct so that pictures display properly.

6. User Accounts

The application does not currently have a login or registration system. There is also no user authentication or authorization. Anyone who can access the API can make requests to its available routes. Adding user accounts and permissions could be considered in a future version.

7. Search and Filtering

The team directory could be improved with more search and filtering options. For example, users could search by team number, team name, or location. This would make it easier to find specific robotics teams as more information is added.

8. Testing

The backend has automated tests using Vitest and Supertest. The tests cover the main CRUD operations and different situations, including missing teams, invalid information, and duplicate team numbers. The tests can be run from the backend directory using:

npm test

More tests can be added as the application gets new features. The original website should also be checked in the browser whenever major changes are made.

9. Future Improvements

Some ideas for future development include adding more verified historical events, adding accurate team information, adding more real team photographs, improving the timeline, adding search and filtering, adding permanent database storage, adding user accounts and authentication, connecting the original website and React application, improving the team directory, and adding more automated tests.

10. Notes for the Next Developer

The application already has a working starting point, so there is no need to rebuild everything from the beginning. The original website should be kept working while new features are added. Before making changes, the next developer should read the README, handoff summary, and API contract. They should also run the application and its tests to understand how everything currently works. One important thing to remember is that the backend uses temporary in-memory storage. Changes to team information are not saved permanently. The biggest areas to focus on are improving the historical information, adding real team records and pictures, and eventually using a permanent database.
