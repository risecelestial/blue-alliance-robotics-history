Blue Alliance Robotics History — REST API Contract

1. Purpose

This contract defines the REST API used by the Blue Alliance Robotics History application.
The React front end communicates with the Express backend using asynchronous HTTP requests.
The API manages FIRST Robotics Competition team information.

2. Team Data Structure

Each team uses the following JSON structure:

{
  "id": "1",
  "name": "Example Robotics Team",
  "number": "1234",
  "rookieYear": "2005",
  "description": "Information about the robotics team.",
  "history": "Historical competition information and achievements.",
  "images": []
}

3. Endpoints

3.1 Retrieve All Teams

Method: GET
Route: /api/teams
Request body: None.
Success: 200 OK


Error: 500 Internal Server Error

{
  "error": {
    "code": "INTERNAL_SERVER_ERROR",
    "message": "An unexpected server error occurred."
  }
}

3.2 Retrieve One Team

Method: GET
Route: /api/teams/:id
Example: /api/teams/1
Request body: None.
Success: 200 OK

{
  "data": {
    "id": "1",
    "name": "Example Robotics Team",
    "number": "1234",
    "rookieYear": "2005",
    "description": "Information about the robotics team.",
    "history": "Historical competition information.",
    "images": []
  }
}

Error: 404 Not Found

{
  "error": {
    "code": "TEAM_NOT_FOUND",
    "message": "The requested robotics team was not found."
  }
}

3.3 Create a Team

Method: POST
Route: /api/teams
Request Content Type: application/json
Request body:

{
  "name": "New Robotics Team",
  "number": "5678",
  "rookieYear": "2010",
  "description": "A new FIRST Robotics team.",
  "history": "The team's competition history.",
  "images": []
}

The client must not provide an ID.
Success: 201 Created

{
  "data": {
    "id": "4",
    "name": "New Robotics Team",
    "number": "5678",
    "rookieYear": "2010",
    "description": "A new FIRST Robotics team.",
    "history": "The team's competition history.",
    "images": []
  }
}

Error: 400 Bad Request

{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid team information.",
    "details": ["Team name is required."]
  }
}

Error: 409 Conflict

{
  "error": {
    "code": "DUPLICATE_TEAM_NUMBER",
    "message": "A team with this FIRST team number already exists."
  }
}

3.4 Update a Team

Method: PUT
Route: /api/teams/:id
Example: /api/teams/1
All editable fields must be supplied.
Request body:

{
  "name": "Updated Robotics Team",
  "number": "1234",
  "rookieYear": "2005",
  "description": "Updated team information.",
  "history": "Updated historical information.",
  "images": []
}

The backend preserves the existing ID.
Success: 200 OK

{
  "data": {
    "id": "1",
    "name": "Updated Robotics Team",
    "number": "1234",
    "rookieYear": "2005",
    "description": "Updated team information.",
    "history": "Updated historical information.",
    "images": []
  }
}

Possible errors:

400 Bad Request: Invalid or missing fields.
404 Not Found: Team does not exist.
409 Conflict: Duplicate FIRST team number.

3.5 Delete a Team

Method: DELETE
Route: /api/teams/:id
Example: /api/teams/1
Request body: None.
Success: 204 No Content
No response body is returned.
Error: 404 Not Found

{
  "error": {
    "code": "TEAM_NOT_FOUND",
    "message": "The requested robotics team was not found."
  }
}

4. HTTP Status Codes

The API uses the following HTTP status codes:
200 – OK: Successful read or update.
201 – Created: Resource successfully created.
204 – No Content: Resource successfully deleted.
400 – Bad Request: Invalid request or malformed JSON.
404 – Not Found: Resource not found.
409 – Conflict: Duplicate team number.
500 – Internal Server Error: Unexpected server error.

5. Standard Error Format

All API errors use the following JSON structure:

{
  "error": {
    "code": "ERROR_CODE",
    "message": "A description of what went wrong."
  }
}



6. Data Storage

The milestone uses a JSON file for team storage.
The backend is responsible for:
Reading team data.
Creating new teams.
Updating existing teams.
Deleting teams.
Generating unique IDs.
Validating incoming information.
Preventing duplicate FIRST team numbers.
Database integration and authentication are outside the scope of this milestone.

7. Front-End Integration

The React application communicates with the backend using asynchronous fetch() requests.
Vite proxies /api requests to the Express server during development.
The interface must display loading indicators during requests and understandable error messages when requests fail.

8. Testing

Vitest and Supertest are used to test backend route behavior.
At least one automated test must verify a successful API request and its response.
