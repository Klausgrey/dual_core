# CRUD System

Backend API where users can create an account, view opportunities, apply, and track their application status.

## Tech Stack

- Node.js + Express
- PostgreSQL (via Docker)
- Prisma ORM
- JWT authentication
- bcrypt for password hashing

## Setup

### 1. Clone and install

```
git clone <repo-url>
cd dual_core
npm install
```

### 2. Start the database

```
docker run --name dual_core_db -e POSTGRES_PASSWORD=yourpassword -p 5432:5432 -d postgres:16
docker exec -it dual_core_db psql -U postgres -c "CREATE DATABASE dual_core_db;"
```

### 3. Environment variables

Create a `.env` file in the project root:

```
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/dual_core_db"
JWT_SECRET="your-secret-key"
JWT_EXPIRATION_TIME="1d"
```

### 4. Run migrations and generate the Prisma client

```
npx prisma migrate dev
npx prisma generate
```

### 5. Seed the opportunities table

```
npx prisma db seed
```

### 6. Start the server

```
npm run dev
```

## API Endpoints

### Auth

**POST /api/register**
Create a new account.
```json
{
  "name": "Nicholas Upaka",
  "email": "nick@example.com",
  "password": "password123"
}
```

**POST /api/login**
Log in and receive a JWT.
```json
{
  "email": "nick@example.com",
  "password": "password123"
}
```
Response includes a `token`. Pass it as `Authorization: Bearer <token>` on protected routes below.

### Opportunities

**GET /api/opportunities**
List all opportunities. No auth required.

**GET /api/opportunities/:id**
Get a single opportunity by id.

### Applications

**POST /api/applications** *(requires auth)*
Apply to an opportunity.
```json
{
  "opportunityId": "opp-1"
}
```
A user cannot apply to the same opportunity twice.

**GET /api/applications** *(requires auth)*
View the logged in user's own applications and their status (`PENDING`, `ACCEPTED`, `REJECTED`).

## Notes

- Opportunities are pre-seeded, not created through the API. There is no admin role or opportunity-management endpoint, this is intentional and matches the task scope.