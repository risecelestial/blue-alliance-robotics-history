
import { describe, it, expect, beforeEach } from "vitest";
import request from "supertest";

import app from "../app.js";
import { resetTeams } from "../data/teams.js";

describe("Teams REST API", () => {
  beforeEach(() => {
    resetTeams();
  });

  it("GET /api/teams returns all teams", async () => {
    const response = await request(app)
      .get("/api/teams")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body.data).toBeInstanceOf(Array);
    expect(response.body.data.length).toBe(3);
    expect(response.body.data[0]).toHaveProperty("name");
    expect(response.body.data[0]).toHaveProperty("number");
  });

  it("GET /api/teams/:id returns one team", async () => {
    const response = await request(app)
      .get("/api/teams/1")
      .expect(200);

    expect(response.body.data.id).toBe("1");
  });

  it("returns 404 when a team does not exist", async () => {
    const response = await request(app)
      .get("/api/teams/999")
      .expect(404);

    expect(response.body.error.code).toBe("TEAM_NOT_FOUND");
  });

  it("POST /api/teams creates a team", async () => {
    const newTeam = {
      name: "Test Robotics Team",
      number: 9999,
      rookieYear: 2020,
      description: "A team created during an automated test.",
      history: "Test history.",
      images: []
    };

    const response = await request(app)
      .post("/api/teams")
      .send(newTeam)
      .expect(201);

    expect(response.body.data.name).toBe(newTeam.name);
    expect(response.body.data.number).toBe(9999);
    expect(response.body.data.id).toBeDefined();
  });

  it("PUT /api/teams/:id updates a team", async () => {
    const updatedTeam = {
      name: "Updated Robotics Team",
      number: 1,
      rookieYear: 1992,
      description: "Updated description.",
      history: "Updated history.",
      images: []
    };

    const response = await request(app)
      .put("/api/teams/1")
      .send(updatedTeam)
      .expect(200);

    expect(response.body.data.name).toBe("Updated Robotics Team");
    expect(response.body.data.id).toBe("1");
  });

  it("DELETE /api/teams/:id deletes a team", async () => {
    await request(app)
      .delete("/api/teams/1")
      .expect(204);

    await request(app)
      .get("/api/teams/1")
      .expect(404);
  });

  it("rejects a team with missing required information", async () => {
    const response = await request(app)
      .post("/api/teams")
      .send({ name: "Incomplete Team" })
      .expect(400);

    expect(response.body.error.code).toBe("VALIDATION_ERROR");
  });

  it("rejects a duplicate team number", async () => {
    const response = await request(app)
      .post("/api/teams")
      .send({
        name: "Duplicate Team",
        number: 1,
        rookieYear: 2020
      })
      .expect(409);

    expect(response.body.error.code).toBe("DUPLICATE_TEAM_NUMBER");
  });
});
