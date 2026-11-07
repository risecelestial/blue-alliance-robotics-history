Blue Alliance Robotics History

Project Description
This project explores the history of robotics teams associated with The Blue Alliance and FIRST Robotics Competition.
The website will organize information about teams, locations, important historical events, and robotics competitions.

Technologies Used:
HTML: Website structure
CSS: Styling and responsive layout
JavaScript: Team data and interactive features

Current Progress:
The first version establishes the website's basic structure and styling.

Future Plans:
Add real robotics team information.
Create a searchable team directory.
Display team locations.
Build a robotics history timeline.
Add more interactive features.

Reflection:
We built the Blue Alliance Robotics History website using HTML, CSS, and JavaScript. We separated the page into a header, navigation, main sections, and footer to keep the code organized and make it easier to update. We also considered accessibility by using meaningful HTML elements, descriptive links, and alternative text for images.

We used Flexbox to line up items like the FIRST logo, website title, and navigation links. We used Grid to organize the timeline cards into rows and columns. These layouts help keep the website organized on different screen sizes. We also used CSS media queries to adjust the layout for phones and smaller screens.

One of our biggest challenges was getting the website on GitHub Pages to look like our original design. At first, the page showed basic text instead of the blue header, timeline cards, and footer we wanted. We had to look through our HTML and CSS to figure out what was wrong. Then we had another issue with Github Pages not loading our content correctly, which we solved by properly nesting html items under proper parent items, and inactive styles being overlayed as the active which just required a more thorough status check. We also had trouble matching the CSS filename in the HTML and finding the right place to change spacing. By checking our code and testing changes in the browser, we learned how small mistakes can affect the whole page.

The JavaScript has overall been difficult, with the responsiveness we're going for, there has been a lot more JS development than either of us had planned for, but through a lot of trial and error, we now have a template we can use to add as many items as we want, making theh content pass just about complete. All that's missing is the actual researched content which will be added as we progress through the milestones more.

For using this, look over the JS file heavily, the Events and Teams consts are for creating your content, with further sections creating the fading timeline effect, autoplay on the image carousal, and button navigating. Everything has been done in one web page so all it should take is 1 load and you can then enjoy the entire website, and it also means that there is not much need for HTML edits, only CSS edits and JS edits.

In case we don't get around to it in a later milestone, the spacing of content while is fine as is, could be improved, same with the amount of timeline cards viewable, maybe consider some edits of both if, again, we don't get to it.

This project helped us better understand how HTML, CSS, and JavaScript work together. We also learned that testing the website and fixing problems are important parts of web development.

Repository:
The source code for this project is available on GitHub:
https://github.com/risecelestial/blue-alliance-robotics-history
The repository contains the original website files, project documentation, and the directories used for further application development.

Main Website Features:
The original website includes the following features:
Historical robotics timeline.
Original and Sustaining Teams section.
Team navigation controls.
Team image carousel.
Automatic image carousel advancement.
JavaScript-generated timeline and team content.
Responsive page layout.
FIRST Robotics branding and project information.

Getting Started:
The original website is built with HTML, CSS, and JavaScript. It does not require a database, backend server, or additional JavaScript frameworks to run.
To access the website from a fresh clone:
Open the GitHub repository.
Select the green Code button.
Select Download ZIP or clone the repository.
Extract the downloaded ZIP file if necessary.
Open the project folder.
Locate the root-level index.html file.
Open index.html in a web browser.


Project Structure

The repository contains the original website files in its root directory. The index.html file provides the website structure, style.css contains the styling and responsive layout, and script.js manages the timeline, team information, image carousel, and interactive navigation.

The first_logo.png file contains the FIRST Robotics logo used by the website.

The repository also includes documentation files such as README.md, API_CONTRACT.md, HANDOFF_SUMMARY.md, KNOWN_ISSUES.md, DEBUGGING_ANALYSIS.md, and Teamlog.md.

The docs directory is used for project documentation and screenshots.
The frontend directory contains the React application, including its Vite configuration and source files. The backend directory contains the Express application, including the server, application configuration, routes, controllers, data, and tests.
The root-level website files represent the original HTML, CSS, and JavaScript application. The frontend and backend directories are used for the full-stack development milestone.

Working With the Website:
When adding or updating website content, the main file to review is script.js.
The Events and Teams constants contain the information used to generate timeline events and robotics team content.
The remaining JavaScript functions handle features such as:
Timeline fading effects.
Automatic image carousel advancement.
Team navigation buttons.
Dynamic content generation.
The style.css file controls the visual appearance of the website, including spacing, colors, layout, and responsive behavior.
The index.html file provides the main page structure and connects the CSS and JavaScript files.
Developers should review these files before making changes to avoid breaking existing functionality.

Full-Stack Development:
The project is being expanded to support a full-stack application using React, Vite, Node.js, Express, and a REST API.
The planned application will support the following operations:
Retrieving all robotics teams.
Retrieving an individual robotics team.
Creating new robotics team records.
Updating existing team information.
Deleting robotics team records.
The backend uses JSON-based data storage for the current milestone.
The API documentation, including endpoint descriptions, request formats, response formats, and expected status codes, is maintained separately in API_CONTRACT.md.

Running the Full-Stack Application:
The original website can run independently. The React frontend and Express backend require their own dependencies and development servers.
To run the React frontend after its implementation:
Install Node.js.
Open a terminal in the frontend directory.
Run npm install.
Run npm run dev.
Open the local address displayed by Vite.

To run the Express backend after its implementation:
Open a separate terminal in the backend directory.
Run npm install.
Run npm start.
The API is expected to be available at http://localhost:3000/api.
Refer to the respective package.json files for the available scripts and dependencies.
Testing
The backend testing setup uses Vitest and Supertest.

After the test suite has been implemented, run the following command from the backend directory:
npm test
Testing should verify that the API endpoints return the expected information, handle invalid requests appropriately, and perform the required team operations.
The original website should also be tested in a browser after changes to its HTML, CSS, or JavaScript.

Data Storage and Limitations
Additional historical research, verified team information, and photographs are planned improvements.
For additional information, refer to KNOWN_ISSUES.md.

Additional Project Documentation:
The repository contains additional documentation to help developers understand and continue the project.

HANDOFF_SUMMARY.md – Provides an overview of the application, its current status, and recommended future development.

API_CONTRACT.md – Documents the REST API endpoints, request formats, response formats, and expected status codes.

KNOWN_ISSUES.md – Identifies known bugs, limitations, shortcuts, and unfinished features.

DEBUGGING_ANALYSIS.md – Contains debugging information and analysis.

Teamlog.md – Contains project development notes and progress information.

A new developer should review these documents before making significant changes.

Project Credits
Original Project Creators: Rohanji Novas and Eric Edwards.
FIRST Robotics: https://www.firstinspires.org/
The Blue Alliance: https://www.thebluealliance.com/
