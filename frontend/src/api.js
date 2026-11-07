
const API_URL = "/api/teams";

async function handleResponse(response) {
  if (response.status === 204) {
    return null;
  }

  const result = await response.json();

  if (!response.ok) {
    const message =
      result?.error?.message || "The request could not be completed.";

    throw new Error(message);
  }

  return result.data;
}

export async function getTeams() {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });

  return handleResponse(response);
}

export async function getTeam(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });

  return handleResponse(response);
}

export async function createTeam(team) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(team)
  });

  return handleResponse(response);
}

export async function updateTeam(id, team) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(team)
  });

  return handleResponse(response);
}

export async function deleteTeam(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json"
    }
  });

  return handleResponse(response);
}
