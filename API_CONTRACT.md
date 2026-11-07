Blue Alliance Robotics History – API Contract

Project: Blue Alliance Robotics History. Resource: Robotics Teams. Base URL: http://localhost:3000/api.

Purpose: This document explains how the React front end communicates with the Express back end. The API allows the application to retrieve, create, update, and delete FIRST Robotics Competition team information. All requests and responses use JSON unless the request does not need a body or the response has no content.

Team Data: Each team contains an ID, name, team number, rookie year, description, history, and images. The ID is a string created by the backend. The name is a string. The team number and rookie year are numbers. The description and history are strings, and images is an array of image paths or URLs. For example, a team record can look like {"id":"1","name":"Sample Robotics Team One","number":1,"rookieYear":1992,"description":"Sample team information.","history":"Team history information.","images":[]}.

GET /api/teams: This route returns all robotics teams. It does not need a request body. A successful request returns status 200 OK and a JSON response containing a data array with the team records. If an unexpected server problem occurs, the API returns status 500 with an error code and message.

GET /api/teams/:id: This route returns one team using its ID. For example, GET /api/teams/1 returns the team with ID 1. A successful request returns status 200 OK and a JSON response containing the team inside the data property. If the team does not exist, the API returns status 404 Not Found with the error code TEAM_NOT_FOUND.

POST /api/teams: This route creates a new team. The request must use application/json and include a name, number, and rookieYear. The description, history, and images fields can also be included. The client does not create the ID because the backend generates it. A successful request returns status 201 Created and the new team inside the data property. If required information is missing or invalid, the API returns status 400 Bad Request with the error code VALIDATION_ERROR. If another team already uses the same team number, the API returns status 409 Conflict with the error code DUPLICATE_TEAM_NUMBER.

PUT /api/teams/:id: This route updates an existing team using its ID. The request uses JSON and includes the team's name, number, rookieYear, description, history, and images. The backend keeps the original ID. A successful update returns status 200 OK and the updated team inside the data property. If the information is invalid, the API returns status 400 Bad Request. If the team does not exist, it returns status 404 Not Found. If another team already uses the same team number, it returns status 409 Conflict.

DELETE /api/teams/:id: This route deletes a team using its ID. It does not need a request body. A successful deletion returns status 204 No Content with no response body. If the team does not exist, the API returns status 404 Not Found with the error code TEAM_NOT_FOUND.

Error Responses: API errors use a JSON object with an error property containing a code and a message. For example, {"error":{"code":"TEAM_NOT_FOUND","message":"No team exists with that ID."}}. Validation errors may also include a details array that explains what information is missing or incorrect. Invalid JSON returns status 400 with the code INVALID_JSON. An unknown API route returns status 404 with the code ROUTE_NOT_FOUND. Unexpected server errors return status 500 with the code INTERNAL_SERVER_ERROR.

HTTP Status Codes: Status 200 means the request was successful. Status 201 means a new team was created. Status 204 means a team was deleted successfully and there is no response body. Status 400 means the request contains invalid information. Status 404 means the requested team or route does not exist. Status 409 means a team number is already being used. Status 500 means the server had an unexpected problem.

Data Storage: The current backend stores team records in an in-memory JavaScript array. It can add, read, update, and delete records while the server is running, but the changes are not saved permanently. When the server restarts, the original sample data is loaded again. A database and user authentication are not included in this milestone.

Front-End Connection: The React application uses asynchronous fetch requests to communicate with the API. Vite is configured to send requests beginning with /api to the Express server at http://localhost:3000. The front end handles loading and error states so users can understand what is happening when information is requested or changed.

Testing: The backend uses Vitest and Supertest to test the API routes. The tests check that teams can be read, created, updated, and deleted and that invalid requests return the correct error responses.
