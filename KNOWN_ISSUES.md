Known Bugs, Shortcuts, and Unfinished Work

Project: Blue Alliance Robotics History.

Current Data: Some of the robotics team information in the project is sample information. The team names, team numbers, rookie years, descriptions, and history need to be researched and checked against reliable sources. The historical timeline also needs more verified events, dates, and descriptions. Real team photographs and working image links should be added as more research is completed.

Backend Storage: The Express backend currently stores team information in an in-memory array. This works while the server is running, but it does not permanently save changes. If the server restarts, new teams, updates, and deleted records are lost, and the original sample data returns. A database or permanent storage system should be added in a future milestone.

Original and React Applications: The repository contains two versions of the website. The original version uses HTML, CSS, and JavaScript and is available through GitHub Pages. The newer version uses React, Vite, and Express. The original website and the full-stack application are separate, so changes to one version do not automatically update the other.

Current Technical Shortcuts: The project does not currently have user accounts, login features, or authentication. The backend does not use a permanent database. The application uses sample team records until more research is completed. The current automated tests focus on backend API behavior and do not test every part of the React interface.

Areas for Improvement: The next developer should add verified robotics team information, more historical events, and real photographs. The team directory could be improved with better search and filtering. The application could also include more competition results, team achievements, and information about important moments in FIRST Robotics history. The layout and number of visible timeline cards could also be improved.

Handoff Recommendations: Before making changes, the next developer should run the original website and the React application to understand how they work. They should also read README.md, HANDOFF_SUMMARY.md, and API_CONTRACT.md before changing the code. The existing features should be tested after updates. Historical information should always be checked against reliable sources instead of using made-up dates, team details, or achievements. The next developer should also update the project documentation whenever new features or changes are made.
