

### POST: Liking a Post

```bash
curl -X POST http://localhost:3000/api/posts/like -d '{ "postIds": ["1", "2"] }' -H "Content-Type: application/json" -H "X-User: tomase"
```
