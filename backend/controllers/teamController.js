import { teams } from "../data/teams.js";

function sendError(res, status, code, message, details) {
  const error = {
    code,
    message
  };

  if (details) {
    error.details = details;
  }

  return res.status(status).json({ error });
}

function validateTeam(body) {
  const errors = [];

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return ["Request body must be a JSON object."];
  }

  if (typeof body.name !== "string" || body.name.trim() === "") {
    errors.push("name is required and must be a non-empty string.");
  }

  if (
    body.number === undefined ||
    !Number.isInteger(Number(body.number)) ||
    Number(body.number) < 1
  ) {
    errors.push("number is required and must be a positive integer.");
  }

  if (
    body.rookieYear === undefined ||
    !Number.isInteger(Number(body.rookieYear)) ||
    Number(body.rookieYear) < 1900
  ) {
    errors.push("rookieYear is required and must be a valid year.");
  }

  if (
    body.description !== undefined &&
    typeof body.description !== "string"
  ) {
    errors.push("description must be a string.");
  }

  if (
    body.history !== undefined &&
    typeof body.history !== "string"
  ) {
    errors.push("history must be a string.");
  }

  if (
    body.images !== undefined &&
    (!Array.isArray(body.images) ||
      !body.images.every((image) => typeof image === "string"))
  ) {
    errors.push("images must be an array of strings.");
  }

  return errors;
}

function findTeamIndex(id) {
  return teams.findIndex((team) => team.id === id);
}

function nextTeamId() {
  const largestId = teams.reduce((largest, team) => {
    const numericId = Number(team.id);
    return Number.isFinite(numericId)
      ? Math.max(largest, numericId)
      : largest;
  }, 0);

  return String(largestId + 1);
}

function buildTeam(body, id) {
  return {
    id,
    name: body.name.trim(),
    number: Number(body.number),
    rookieYear: Number(body.rookieYear),
    description: body.description?.trim() ?? "",
    history: body.history?.trim() ?? "",
    images: body.images ?? []
  };
}

// GET /api/teams
export function getAllTeams(req, res) {
  return res.status(200).json({
    data: teams
  });
}

// GET /api/teams/:id
export function getTeamById(req, res) {
  const team = teams.find((item) => item.id === req.params.id);

  if (!team) {
    return sendError(
      res,
      404,
      "TEAM_NOT_FOUND",
      "No team exists with that ID."
    );
  }

  return res.status(200).json({
    data: team
  });
}

// POST /api/teams
export function createTeam(req, res) {
  const errors = validateTeam(req.body);

  if (errors.length > 0) {
    return sendError(
      res,
      400,
      "VALIDATION_ERROR",
      "The team information is invalid.",
      errors
    );
  }

  const teamNumber = Number(req.body.number);

  const duplicate = teams.some(
    (team) => team.number === teamNumber
  );

  if (duplicate) {
    return sendError(
      res,
      409,
      "DUPLICATE_TEAM_NUMBER",
      "A team with this number already exists."
    );
  }

  const newTeam = buildTeam(req.body, nextTeamId());

  teams.push(newTeam);

  return res.status(201).json({
    data: newTeam
  });
}

// PUT /api/teams/:id
export function updateTeam(req, res) {
  const index = findTeamIndex(req.params.id);

  if (index === -1) {
    return sendError(
      res,
      404,
      "TEAM_NOT_FOUND",
      "No team exists with that ID."
    );
  }

  const errors = validateTeam(req.body);

  if (errors.length > 0) {
    return sendError(
      res,
      400,
      "VALIDATION_ERROR",
      "The team information is invalid.",
      errors
    );
  }

  const teamNumber = Number(req.body.number);

  const duplicate = teams.some(
    (team) =>
      team.number === teamNumber &&
      team.id !== req.params.id
  );

  if (duplicate) {
    return sendError(
      res,
      409,
      "DUPLICATE_TEAM_NUMBER",
      "Another team already uses this team number."
    );
  }

  const updatedTeam = buildTeam(req.body, req.params.id);

  teams[index] = updatedTeam;

  return res.status(200).json({
    data: updatedTeam
  });
}

// DELETE /api/teams/:id
export function deleteTeam(req, res) {
  const index = findTeamIndex(req.params.id);

  if (index === -1) {
    return sendError(
      res,
      404,
      "TEAM_NOT_FOUND",
      "No team exists with that ID."
    );
  }

  teams.splice(index, 1);

  return res.status(204).send();
}
