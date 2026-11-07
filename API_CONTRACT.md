Blue Alliance Robotics History – API Contract

Project: Blue Alliance Robotics History
Resource: Robotics Teams


1. Purpose

This document explains the API used by the Blue Alliance Robotics History application. The API allows the React frontend to communicate with the Express backend and manage robotics team information. The backend supports creating, reading, updating, and deleting teams. These are the four main CRUD operations. The API uses Express routes and controller functions to handle requests. The current team information is stored in an in-memory JavaScript array.

2. Team Information

Each team has the following information:

{
  "id": "1",
  "name": "Example Robotics Team",
  "number": 1234,
  "rookieYear": 2005,
  "description": "Information about the team.",
  "history": "Historical information about the team.",
  "images": []
}

The id is a unique ID created by the backend. The name is the name of the robotics team. The number is the FIRST Robotics Competition team number. The rookieYear is the year the team first competed. The description is a short description of the team. The history contains information about the team's history. The images field is an array containing image paths for the team. The name, team number, and rookie year are required. The description, history, and images are optional. The team number and rookie year are stored as numbers. The ID is stored as a string.

3. API Routes

GET /api/teams

Purpose: Gets all robotics teams. No request body is needed. Success Status: 200 OK


The response contains a data array with the available team records. If something unexpected goes wrong on the server, the API returns 500 Internal Server Error.

{
  "error": {
    "code": "INTERNAL_SERVER_ERROR",
    "message": "An unexpected server error occurred."
  }
}

GET /api/teams/

Purpose: Gets one team using its ID. For example: GET /api/teams/1. No request body is needed. Success Status: 200 OK

Example response:

{
  "data": {
    "id": "1",
    "name": "Example Robotics Team",
    "number": 1234,
    "rookieYear": 2005,
    "description": "Information about the team.",
    "history": "Historical information about the team.",
    "images": []
  }
}

If the team does not exist, the API returns 404 Not Found.

{
  "error": {
    "code": "TEAM_NOT_FOUND",
    "message": "No team exists with that ID."
  }
}

POST /api/teams

Purpose: Creates a new team. The request content type is application/json.

Example request:

{
  "name": "New Robotics Team",
  "number": 5678,
  "rookieYear": 2010,
  "description": "A new robotics team.",
  "history": "Information about the team's history.",
  "images": []
}

The backend creates the ID automatically. The client does not need to send an ID. Success Status: 201 Created

Example response:

{
  "data": {
    "id": "4",
    "name": "New Robotics Team",
    "number": 5678,
    "rookieYear": 2010,
    "description": "A new robotics team.",
    "history": "Information about the team's history.",
    "images": []
  }
}

The generated ID depends on the existing records. If required information is missing or invalid, the API returns 400 Bad Request.


If another team already uses the same team number, the API returns 409 Conflict.

{
  "error": {
    "code": "DUPLICATE_TEAM_NUMBER",
    "message": "A team with this number already exists."
  }
}

If the JSON request is malformed, the API returns 400 Bad Request.

{
  "error": {
    "code": "INVALID_JSON",
    "message": "The request body contains invalid JSON."
  }
}

PUT /api/teams/

Purpose: Updates an existing team. For example: PUT /api/teams/1. The request must include the team's required information.

Example request:

{
  "name": "Updated Robotics Team",
  "number": 1234,
  "rookieYear": 2005,
  "description": "Updated team description.",
  "history": "Updated team history.",
  "images": []
}

The existing ID stays the same. The client should not include an ID in the request body. Success Status: 200 OK

Example response:

{
  "data": {
    "id": "1",
    "name": "Updated Robotics Team",
    "number": 1234,
    "rookieYear": 2005,
    "description": "Updated team description.",
    "history": "Updated team history.",
    "images": []
  }
}

If the team does not exist, the API returns 404 Not Found.

{
  "error": {
    "code": "TEAM_NOT_FOUND",
    "message": "No team exists with that ID."
  }
}

If the information is missing or invalid, the API returns 400 Bad Request.

{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The team information is invalid."
  }
}

If another team already uses the requested team number, the API returns 409 Conflict.

{
  "error": {
    "code": "DUPLICATE_TEAM_NUMBER",
    "message": "Another team already uses this team number."
  }
}

DELETE /api/teams/

Purpose: Deletes a team using its ID. For example: DELETE /api/teams/1. No request body is needed. Success Status: 204 No Content

A successful delete does not return a response body. If the team does not exist, the API returns 404 Not Found.

{
  "error": {
    "code": "TEAM_NOT_FOUND",
    "message": "No team exists with that ID."
  }
}

4. HTTP Status Codes

The API uses different status codes depending on what happens with the request. 200 OK means the request worked. It is used when getting or updating a team. 201 Created means a new team was created successfully. 204 No Content means a team was deleted successfully. 400 Bad Request means the request has missing or invalid information. 404 Not Found means the requested team or route could not be found. 409 Conflict means a team with the same team number already exists. 500 Internal Server Error means something unexpected went wrong on the server.

5. Error Responses

When a request fails, the API returns an error message in JSON format. The general format is:

{
  "error": {
    "code": "ERROR_CODE",
    "message": "A description of the error."
  }
}

Some validation errors also include a details array to explain what information needs to be fixed. The frontend can use these messages to tell users when something goes wrong.

6. Where the Data Is Stored

The current backend stores the team information in backend/data/teams.js. The information is stored in a JavaScript array while the server is running. This means that users can create, update, and delete teams, but the changes are not permanent. If the backend is stopped and started again, the original sample team records are loaded again. A permanent database has not been added yet.

7. How React Uses the API

The React frontend uses the Fetch API to communicate with Express. The frontend sends requests to the /api routes. Vite is configured to forward those requests to the Express backend running at port 3000. The frontend uses these requests to display all teams, display one team's information, create new teams, update existing teams, and delete teams. The application also handles loading and error states so that users receive feedback while requests are being processed.

8. Backend Organization and Testing

The backend files are separated to make the code easier to understand and update. The backend/server.js file starts the server. The backend/app.js file sets up the Express application. The backend/routes/teams.js file defines the team routes. The backend/controllers/teamController.js file handles the team operations. The backend/data/teams.js file stores the initial team records and manages the in-memory data. The backend uses express.json() to read JSON request bodies. Vitest and Supertest are used to test the API. To find the test command, go to the backend folder and check its package.json file.
