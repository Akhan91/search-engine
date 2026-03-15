# Search Engine Service

TypeScript/Express service that searches a local dataset of services by name and geolocation. Returns scored matches ranked by text similarity with distance from the provided coordinates.

**Stack:** Node.js · Express 5 · TypeScript (ESM, strict)

## Setup

```bash
npm install
```

## Running

```bash
# Development (with nodemon for auto-reload)
npm run dev

# Production
npm start
```

Server starts on `http://localhost:3000`.

## API

```
GET /search?name=<query>&lat=<latitude>&lng=<longitude>
```

| Parameter | Type   | Description                |
| --------- | ------ | -------------------------- |
| `name`    | string | Service name to search     |
| `lat`     | number | Latitude of your location  |
| `lng`     | number | Longitude of your location |

**Example:**

```
GET /search?name=Massage&lat=59.334&lng=18.063
```

```json
{
  "totalHits": 2,
  "totalDocuments": 10,
  "results": [
    {
      "id": 1,
      "name": "Massage",
      "position": { "lat": 59.3166, "lng": 18.0561 },
      "distance": "2.34km",
      "score": 0
    }
  ]
}
```

- `score` — text match quality (lower is better)
- `distance` — formatted distance from the provided coordinates (`"100m"` or `"8.95km"`)

## Note

This is a very straightforward and easy application just for the sake of the assignment.
I believe that part of being a good developer is to be able to take good decisions knowing when to use what and avoiding over engineering.
Would this be a real application there could be improvements like a real database, test cases, a whole client for the users to interact with etc.
