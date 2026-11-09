Blue Alliance Robotics History

Project Description: This project explores the history of robotics teams connected to The Blue Alliance and FIRST Robotics Competition (FRC). The website organizes information about robotics teams, important events, competitions, and team history. The original website is called Community Archives and was built using HTML, CSS, and JavaScript. The project has now been expanded into a full-stack application using React, Vite, Node.js, and Express.

Technologies Used: HTML, CSS, and JavaScript are used for the original website. React is used to build the new front end. Vite runs the React development server. Node.js and Express power the back end and REST API. Vitest and Supertest are used to test the API. GitHub is used to store the project and manage changes.

Reflection: We built the Blue Alliance Robotics History website using HTML, CSS, and JavaScript. We separated the page into a header, navigation, main sections, and footer to keep the code organized and make it easier to update. We also considered accessibility by using meaningful HTML elements, descriptive links, and alternative text for images. We used Flexbox to line up items like the FIRST logo, website title, and navigation links. We used Grid to organize the timeline cards into rows and columns. These layouts help keep the website organized on different screen sizes. We also used CSS media queries to adjust the layout for phones and smaller screens. One of our biggest challenges was getting the website on GitHub Pages to look like our original design. At first, the page showed basic text instead of the blue header, timeline cards, and footer we wanted. We had to look through our HTML and CSS to figure out what was wrong. Then we had another issue with Github Pages not loading our content correctly, which we solved by properly nesting html items under proper parent items, and inactive styles being overlayed as the active which just required a more thorough status check. We also had trouble matching the CSS filename in the HTML and finding the right place to change spacing. By checking our code and testing changes in the browser, we learned how small mistakes can affect the whole page. The JavaScript has overall been difficult, with the responsiveness we're going for, there has been a lot more JS development than either of us had planned for, but through a lot of trial and error, we now have a template we can use to add as many items as we want, making theh content pass just about complete. All that's missing is the actual researched content which will be added as we progress through the milestones more. For using this, look over the JS file heavily, the Events and Teams consts are for creating your content, with further sections creating the fading timeline effect, autoplay on the image carousal, and button navigating. Everything has been done in one web page so all it should take is 1 load and you can then enjoy the entire website, and it also means that there is not much need for HTML edits, only CSS edits and JS edits. In case we don't get around to it in a later milestone, the spacing of content while is fine as is, could be improved, same with the amount of timeline cards viewable, maybe consider some edits of both if, again, we don't get to it. This project helped us better understand how HTML, CSS, and JavaScript work together. We also learned that testing the website and fixing problems are important parts of web development.

Current Project Status: The original website is still available through GitHub Pages. The repository also contains a React front end and an Express back end. The React application communicates with the Express API to display and manage robotics team information. The API supports creating, reading, updating, and deleting team records. The project also includes automated backend tests.

Repository: https://github.com/risecelestial/blue-alliance-robotics-history

Project Structure: The root folder contains the original website files, including index.html, style.css, script.js, and first_logo.png. The frontend folder contains the React application and Vite configuration. The backend folder contains the Express server, API routes, controllers, team data, and tests. The repository also contains documentation files that explain the API, project status, known issues, and debugging process.

Running the Original Website: To view the original website, open the repository, download or clone the project, and open the root-level index.html file in a browser.

Running the React Application: Make sure Node.js is installed. Open a terminal in the frontend folder and run npm install. After installation, run npm run dev. Open the local address shown by Vite in your browser.

Running the Express Backend: Open a second terminal in the backend folder and run npm install. After installation, run npm start. The backend runs at http://localhost:3000 and the API is available at http://localhost:3000/api/teams. Keep the backend running while using the React application. Vite is set up to send requests beginning with /api to the Express server.

Testing: To run the backend tests, open a terminal in the backend folder and run npm test. The tests use Vitest and Supertest to check the API, including reading, creating, updating, and deleting teams, as well as handling invalid information.

Data Storage and Limitations: The current backend stores team information in an in-memory array. This means new, updated, or deleted information will not stay saved after the server restarts. The project does not currently use a database, user accounts, or authentication. Some robotics team information and historical events are still sample content and need to be researched and checked before being treated as accurate.

Project Documentation: HANDOFF_SUMMARY.md explains the project and its current status. API_CONTRACT.md explains how the front end communicates with the back end. KNOWN_ISSUES.md explains current problems and unfinished work. DEBUGGING_ANALYSIS.md explains how a request travels from React to Express and back. Teamlog.md contains project development notes. A new developer should read these files before making major changes.

Getting Started from a Fresh Clone: Install Git and Node.js with npm, then clone the repository and enter its folder:

```sh
git clone https://github.com/risecelestial/blue-alliance-robotics-history.git
cd blue-alliance-robotics-history
```

The original static website can be opened by opening index.html in a browser. To run the React application with its API, open two terminals in the cloned repository. In the first terminal, start the back end:

```sh
cd backend
npm install
npm start
```

In the second terminal, start the front end:

```sh
cd frontend
npm install
npm run dev
```

Keep both terminals running. Open the local URL printed by Vite, normally http://localhost:5173. The API should be available at http://localhost:3000/api/teams; if team data does not load, confirm the back-end server is still running. To verify the setup, run `npm test` from the backend folder and `npm run build` from the frontend folder.

Project Credits: Original Project Creators: Rohanji Novas and Eric Edwards. FIRST Robotics: https://www.firstinspires.org/. The Blue Alliance: https://www.thebluealliance.com/.
