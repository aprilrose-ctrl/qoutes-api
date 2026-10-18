# Quotes REST API

A simple REST API built with Node.js and Express to manage quotes using in-memory storage.

## Requirements

- Node.js
- npm

## Installation and Running

1. Clone the repository:

```bash
git clone https://github.com/aprilrose-ctrl/quotes-api.git
```

2. Open the project folder:

```bash
cd quotes-api
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

The server runs at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/quotes` | Get all quotes |
| GET | `/quotes/:id` | Get a quote by ID |
| POST | `/quotes` | Add a new quote |
| DELETE | `/quotes/:id` | Delete a quote by ID |

## Example POST Request

URL: `http://localhost:3000/quotes`

Method: `POST`

Request body:

```json
{
  "text": "Premature optimization is the root of all evil.",
  "author": "Donald Knuth"
}
```

Expected status: `201 Created`

## Status Codes

- `200 OK` — Request successful.
- `201 Created` — Quote successfully added.
- `204 No Content` — Quote successfully deleted.
- `404 Not Found` — Quote or route not found.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- JSON

## Note

Quotes are stored in memory, so changes are lost when the server restarts.
