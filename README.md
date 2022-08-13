# Friendface ✨ 🎈

## Requirements 
- Docker installed locally
- `.env` file should be filled with `ENV` variables

## Launching the application
<!-- -->

Just run the Makefile `make` command. The server will exposed in the `.env` file defined `APP_PORT` variable port.
```bash
  make
```

### Run unit tests
To run locally unit tests you will need to install npm packages.
```bash
  npm i & npm test
```

## API Endpoints
<!-- -->

### **Get weekdays with the most likes**
`GET /api/likes/most/weekdays`

An endpoint to get the day(s) of the week when you got the most "likes" (Monday, Tuesday, etc.)
```bash
curl -X GET http://localhost:3000/api/v1/likes/most/weekdays 
```

#### Response
```json
{
  "count": 6,
  "weekdays": [
    "Tuesday"
  ]
}
```

### **Get like streaks**
`GET /api/likes/streaks`

An endpoint to get all streaks of days when more likes were received than the day before
```bash
curl -X GET http://localhost:3000/api/v1/likes/streaks
```

#### Response
```json
{
  "streaks": [
    "2015-1-3/2015-1-6",
    "2015-2-1/2015-3-1",
    "2015-4-1/2015-6-3"
  ]
}
```

### **Add likes to a post**
`POST /api/likes/posts/like`

An endpoint to like one or more posts

**Request Attributes**
| Header      | Type        | Description          |
| ----------- | ----------- | -------------------- |
| X-User      | Required    | User name identifier |

| Body Variable | Type        | Description |
| ------------- | ----------- | ------------|
| postIds       | Required    | post IDs which we want to like |

```bash
curl -v -X POST http://localhost:3000/api/v1/posts/like \
  -d '{ "postIds": [1, 3] }' \
  -H "Content-Type: application/json" \
  -H "X-User: XXX"
```

#### Response
```
...
< HTTP/1.1 201 Created
...
Content-Length: 0
```

