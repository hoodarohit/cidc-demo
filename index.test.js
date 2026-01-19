const request = require("supertest");
const app = require("./index");

test("GET / should return Hello CI/CD", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Hello CI/CD");
});

test("GET /health should return OK", async () => {
  const res = await request(app).get("/health");
  expect(res.text).toBe("OK");
});
