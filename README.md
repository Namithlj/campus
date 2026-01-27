# Campus Placement Monitoring System

Lightweight web application for recording and managing campus recruitment and placement records. The project contains:

- Backend: Spring Boot (Java 17) with PostgreSQL
- Frontend: React (Create React App)
- Docker + docker-compose for local development

---

**Tech stack**

- Java 17, Spring Boot 3.x
- PostgreSQL (Postgres 16 image in docker-compose)
- React (Create React App)
- Docker / Docker Compose

---

**Quick start (recommended — Docker Compose)**

1. From the repository root run:

```bash
docker-compose up --build
```

This starts Postgres (5432) and the backend (8080). The frontend runs separately with `npm start`.

---

**Run backend locally without Docker**

1. Configure environment variables used by `application.properties`:

- `DB_URL` (e.g. `jdbc:postgresql://localhost:5432/campus`)
- `DB_USER` (e.g. `campus`)
- `DB_PASS` (e.g. `campus0987`)
- `PORT` (optional, defaults to `8080`)
- `APP_JWT_SECRET` or `app.jwt.secret` (token signing key)

2. Build and run (Unix / macOS):

```bash
mvnw clean package -DskipTests
java -jar backend/target/backend-0.0.1-SNAPSHOT.jar
```

On Windows use `mvnw.cmd` in the same way.

---

**Run frontend locally**

1. Change to the frontend folder and install dependencies:

```bash
cd campus-frontend
npm install
npm start
```

2. Note: the frontend currently contains hard-coded production backend URLs (for example in `src/auth/Login.jsx`, `src/auth/Signup.jsx`, and `src/pages/AdminDashboard.jsx`). To test locally, update those URLs to `http://localhost:8080` or implement a `REACT_APP_API_URL` environment variable and use it in the code.

---

**Database defaults (docker-compose)**

- Image: `postgres:16`
- DB name: `campus`
- User: `campus`
- Password: `campus0987`

These are set in `backend/docker-compose.yaml`.

---

**Important backend configuration files**

- `backend/src/main/resources/application.properties` — reads `DB_URL`, `DB_USER`, `DB_PASS`, `PORT`, and JWT properties.
- `backend/Dockerfile` — multi-stage build that packages the Spring Boot JAR.
- `backend/docker-compose.yaml` — starts Postgres and the backend together for local testing.

---

**API (key endpoints)**

- POST /api/auth/users/login — Login (returns JWT token)
- POST /api/auth/users/register — Register new user
- PUT /api/admin — Update admin email/password (requires admin principal)
- POST /api/company — Add company (admin)
- POST /api/placement — Add placement record (admin)
- GET /api/placements — List placements
- GET /api/recruitment — List companies

All server endpoints are served on port `8080` by default.

---

**Notes & deployment**

- The frontend in this repo points to a deployed backend URL (`https://campus-backend-qvke.onrender.com`). Update the frontend to point to your backend when running locally.
- For production builds of the frontend: `cd campus-frontend && npm run build` and serve the `build/` output using your preferred static hosting.
- You can build container images with `docker build` (backend Dockerfile included) and orchestrate with `docker-compose`.

---

**License**

This repository references an MIT license badge in the original README. Add a `LICENSE` file if you intend to release under MIT.

---

If you'd like, I can:

- update the frontend to use a `REACT_APP_API_URL` env var (safer than hard-coded URLs),
- or change the frontend files to point to `http://localhost:8080` for local development.

—

Updated README to reflect actual repo structure, run steps, and endpoints.

---

## Project details

### Data model (core entities)

- `User` — stores `id`, `name`, `email`, `password` (BCrypt), `identityNumber` (college ID), and `role` (`USER` | `ADMIN`).
- `Company` — stores `id`, `company` (name), `process`, `eligibility`, `companyLink`, `registerLink`.
- `Placement` — stores `id`, `studentName`, `department`, `company`, `packageAmount` (LPA).

These entities are implemented under `backend/src/main/java/com/nagesh/model` and persisted using Spring Data JPA repositories in `backend/src/main/java/com/nagesh/repository`.

### Authentication & Security

- Authentication uses JWT tokens. Login is handled by `POST /api/auth/users/login` which returns a token. The backend reads `app.jwt.secret` from `application.properties` for signing/verification.
- Admin-only endpoints (company/placement creation and admin update) expect an authenticated principal with role `ADMIN`.

### Environment variables (summary)

- `DB_URL` — JDBC URL for Postgres (e.g. `jdbc:postgresql://postgres:5432/campus`)
- `DB_USER` — Database user (e.g. `campus`)
- `DB_PASS` — Database password (e.g. `campus0987`)
- `PORT` — Backend port (optional, default `8080`)
- `app.jwt.secret` — JWT signing secret (or set as `APP_JWT_SECRET` in your env)

These are referenced by `backend/src/main/resources/application.properties`.

### Frontend: recommended local change

The frontend currently calls a deployed backend URL. For local development change requests to use an environment variable. Example pattern:

1. In `campus-frontend`, add `.env` with:

```
REACT_APP_API_URL=http://localhost:8080
```

2. Replace hard-coded URLs in the frontend (examples in `src/auth/Login.jsx`, `src/auth/Signup.jsx`, and `src/pages/AdminDashboard.jsx`) with `process.env.REACT_APP_API_URL` + endpoint path.

Example fetch call after change:

```js
fetch(`${process.env.REACT_APP_API_URL}/api/auth/users/login`, { ... })
```

### Quick API test examples

- Login (replace with correct URL):

```bash
curl -X POST http://localhost:8080/api/auth/users/login \
	-H "Content-Type: application/json" \
	-d '{"email":"admin@example.com","password":"password"}'
```

- Add company (requires admin JWT):

```bash
curl -X POST http://localhost:8080/api/company \
	-H "Content-Type: application/json" \
	-H "Authorization: Bearer <TOKEN>" \
	-d '{"company":"ACME","process":"Apt→Tech→HR","eligibility":"All","companyLink":"https://acme.example","registerLink":"https://forms.example"}'
```

### Troubleshooting

- If the backend cannot connect to Postgres when using Docker, ensure the `postgres` service is healthy and ports are available.
- If JWT auth fails, verify `app.jwt.secret` matches between environments and tokens.
- For CORS and frontend local dev, the backend controllers include `@CrossOrigin(origins = "http://localhost:3000")`—adjust if your frontend runs on a different origin.

### Contributing & License

- Add a `LICENSE` file if you want to publish under MIT.
- Open issues and PRs for bug fixes and improvements. Keep changes small and include a brief description of behavior and how to test.

---

If you want, I can update the frontend to read `REACT_APP_API_URL` and replace the three hard-coded URLs now.
