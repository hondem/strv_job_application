# Documentation
## API endpoints
### `POST:/users/signup`
Creates a new user in database and returns him with new access token.

#### Expected body format
```json
{
  "email": "youremail@here.pls",
  "password": "supersecretpassword"
}
```

#### Example response
```json
{
  "id": 2,
  "email": "youremail@here.pls",
  "accessToken": "your_access_token"
}
```

### `POST:/users/login`
Logs user in.

#### Expected body format
```json
{
  "email": "youremail@here.pls",
  "password": "supersecretpassword"
}
```

#### Example response
```json
{
  "id": 2,
  "email": "youremail@here.pls",
  "accessToken": "your_access_token"
}
```

### `POST:/contacts`
Saves user's contact to Firestore.
> This endpoint requires `Authorization` header with valid access token
#### Expected body format
```json
{
  "name": "Petr Jones",
  "phone": "XXX XXX XXX",
  "address": "Petr Jone's address"
}
```

#### Example response
> If success, the endpoint will return just `204` code