# Top Of the Flops API™

## Summary

This API will allow you to authenticate and interact with the Top Of the Flops database, obtain all flops, post new flops, upvote and downvote.

All the API responses come as JSON objects.

### Authenticatiion

Some of the API endpoints require authentication:

| Method |             Endpoint            | Requires Auth |
| ------ | ------------------------------- | ------------- |
| GET    | `api/v1/lifestyles`             | NO |
| POST   | `api/v1/lifestyles`             | YES |
| POST   | `api/v1/lifestyles/remove/:id`  | YES |
| GET    | `api/v1/flops`                  | NO |
| POST   | `api/v1/flops`                  | YES |
| POST   | `api/v1/flops/remove/:id`       | YES |
| GET    | `api/v1/users/:id`              | NO |
| POST   | `api/v1/users/login`            | NO |
| POST   | `api/v1/users/signup`           | NO |
| POST   | `api/v1/users/edit/:id`         | YES |
| GET    | `api/v1/users/logout`           | NO |
| POST   | `api/v1/votes`                  | NO |
| GET    | `api/v1/votes/:id`              | NO |

If the authentication fails the API will respond with the following error:

```JSON
{
  "error":
    {
      "type": "auth",
      "code": 401,
      "message": "authentication failed"
    }
}
```

## Endpoints

### GET all lifestyles

- `[GET]` all lifestyles on the page

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET    | `api/v1/lifestyles` | Get all lifestyles | Lifestyles object containing Array |

* On success, the HTTP status code in the response header is 200 ('OK').  
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.  

The get request will return an object with the key "lifestyles", containing an array of individual lifestyle objects.


```Json
{
  "lifestyles":
    [
      {
        "lifestyleId": 54,
        "title": "Most Aesthetically pleasing Lasangna",
        "description": "All lasagnas should be beautiful and don't fall in on themselves",
        "media": "imgur.com/kidsyhfl"
      },
      {
        "lifestyleId": 23,
        "title": "Best beard hairdresser",
        "description": "Beards are very important",
        "media": "imgur.com/kidsyhfl"
      }
    ]
}
```

### POST to create a new Lifestyle (competition category)

- `[POST]` create a new lifestyle

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| POST   | `api/v1/lifestyles` | Create a new category on the competition | Success object |

* On success, the HTTP status code in the response header is 201 ('Created').  
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

In order to add a new category to the competition you will have to send a request which includes the information in the body:

```javascript
{
  title: "Perfect banana peel",
  description: "Aim to peel a banana and have 0 strings left on it",
  media: "imgur.com/dgsjkfg"
}
```

If the operation succeeds you will receive a success message back as follows:

```js
{
  "success":
  {
    "message": "Lifestyle board created succesfully",
    "lifestyleId": 253
  }
}
```

### DELETE to remove a lifestyle by ID

- `[DELETE]` a lifestyle by id

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| POST   | `api/v1/lifestyles/remove/:id` | Remove and individual lifestyle | Success message |

* This action is IRREVERSIBLE

* On success, the HTTP status code in the response header is 200 ('OK').
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

Using this endpoint you can remove an individual lifestyle by the ID.

### GET all flops (posts)

- `[GET]` all flops on the page

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET    | `api/v1/flops` | Get all flops | Flops object containing Array |

* On success, the HTTP status code in the response header is 200 ('OK').  
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.  

The get request will return an object with the key "flops", containing an array of individual flop objects.


```Json
{
  "flops": [
    {
      "flopId": 12,
      "userId": 132,
      "username": "karlll",
      "mediaURL": "http://google.com",
      "description": "This is my best Lasangna currently",
      "lifestyleId":54
    },
    {
      "flopId": 2,
      "userId": 18,
      "username": "micky",
      "mediaURL": "imgur.com/jksdhfl",
      "description": "Behold the most perfect lasagna",
      "lifestyleId":54
    },
    {
      "flopId": 298,
      "userId": 32,
      "username": "banana",
      "mediaURL": "imgur.com/hkdskj",
      "description": "Beards are my passion",
      "lifestyleId":23
    },
    {
      "flopId": 328,
      "userId": 18,
      "username": "micky",
      "mediaURL": "imgur.com/hkdskjjkh",
      "description": "Beards are also my passion",
      "lifestyleId":23
    }
  ]
}
```
### POST to create a new flop

- `[POST]` create a new flop

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| POST   | `api/v1/flops` | Create a new individual post| Success object |

* On success, the HTTP status code in the response header is 201 ('Created').  
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

In order to add a new post (flop) to the competition you will have to send a request which includes the information in the body:

```javascript
{
  userId: 32,
  mediaURL: "imgur.com/hkdskj",
  description: "I can do this with my eyes closed",
  lifestyleId:23
}
```

If the operation succeeds you will receive a success message back as follows:

```JSON
{
  "success":
    {
      "message": "Flop added succesfully",
      "flopId": 232
    }
}
```

### DELETE to remove a flop by ID

- `[DELETE]` a flop by id

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| POST   | `api/v1/flops/remove/:id` | Remove and individual flop | Success message |

* This action is IRREVERSIBLE

* On success, the HTTP status code in the response header is 200 ('OK').
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

Using this endpoint you can remove an individual flop by the ID.

### GET a flopper (user)

- `[GET]` a flopper

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET    | `api/v1/users/:id` | Get one user information | User object |

* On success, the HTTP status code in the response header is 200 ('OK').  
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.  

The get request will return an object with the key "user", containing an object with some specific user information.

```JSON
{
  "user": {
    "userId": 23,
    "username": "micky",
    "name": "Lord Master",
    "location": "Buenos Aires",
    "profilePic": "imgur.com/sdhklfh",
    "bio": "I am good at many things"
  }
}
```

### Authenticate a flopper (user)

- `[POST]` authenticate a flopper

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| POST   | `api/v1/users/login` | Post the username and password | Success object / Error |

* On success, the HTTP status code in the response header is 200 ('OK').
* If the authentication is unssucessful you will receive a 401 error message ('Unauthorized')
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

In order to get a user to login to the website you will have to post a request that includes de following information on the body:

```javascript
{
  username: "micky",
  password: "shklah33##"
}
```

In case of successful login you will receive an object containing the user information:

```JSON
{
  "user": {
    "userId": 23,
    "username": "micky",
    "name": "Lord Master",
    "location": "Wellington",
    "profilePic": "imgur.com/sdhklfh",
    "bio": "I am good at many things"
  }
}
```

If the authentication is unssucessful you will receive the following error:

```JSON
{
  "error": "unssucessful login"
}
```

### Signup a new flopper (user)

- `[POST]` create a new flopper

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| POST   | `api/v1/users/signup` | Creates a brand new user | Success object / Error |

* On success, the HTTP status code in the response header is 201 ('Created').
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

To create a new user, the API is expecting an object on the body of the request that contains the following information:

```js
{
  username: "gabulina",
  password: "bananas"
  name: "Gabita Genia",
  location: "Wellington",
  profilePic: "imgur.com/sdhklfhhjk",
  bio: "I like voting for stuff"
}
```
If the request is successful you will receive a success code 201

### Edit a user profile

- `[POST]` edit a user profile

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| POST   | `api/v1/users/edit/:id` | modifies an existing user profile | Success object / Error |

* On success, the HTTP status code in the response header is 201 ('Created').
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

To modify a user profile, the API is expecting an object on the body of the request that contains the following information:

```js
{
  password: "bananas",
  location: "Wellington",
  profilePic: "imgur.com/sdhklfhhjk",
  bio: "I like voting for stuff"
}
```
If the request is successful you will receive a success code 201


### GET to log out a user

- `[GET]` Log out a user session

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET   | `api/v1/users/logout` | Logout current user | Success message |

* On success, the HTTP status code in the response header is 200 ('OK').
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

If a user is currently logged in this will delete the session details from the browser.

### GET a particular user's votes

- `[GET]` a user's votes by id

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET    | `api/v1/votes/:id` | Get the votes of a particular user | Object containing IDs of flops voted on and whether they were voted up or down |

* On success, the HTTP status code in the response header is 200 ('OK').  
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.  

The get request will return an object with the key "votes", containing an array of objects that have info about the flopId and whether it was voted up or down.

e.g. `api/v1/votes/2` where 2 is the user's id

```JSON
{
  "votes": [
    {"voteId": 1, "flopId": 1, "userId": 1, "upvote": 0, "downvote": 1},
    {"voteId": 2, "flopId": 20, "userId": 1, "upvote": 0, "downvote": 1},
    {"voteId": 3, "flopId": 13, "userId": 1, "upvote": 1, "downvote": 0},
  ]
}
```

### GET all votes

- `[GET]` all votes

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET   | `api/v1/votes` | Get all of the votes | Object containing all of the votes for every flop |

* On success, the HTTP status code in the response header is 200 ('OK').  
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.  

The get request will return an object with the key "votes", containing an array of objects that have info about the flopId and whether it was voted up or down.


```JSON
  [
    {"voteId": 1, "flopId": 1, "userId": 1, "upvote": 0, "downvote": 1},
    {"voteId": 2, "flopId": 20, "userId": 16, "upvote": 0, "downvote": 1},
    {"voteId": 3, "flopId": 13, "userId": 32, "upvote": 1, "downvote": 0},
  ]
```

### POST a  vote to the votes table

- `[POST]` a vote to votes

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| POST   | `api/v1/votes` | Posts a vote to the votes table | Success Message |

* On success, the HTTP status code in the response header is 201 ('Created').  
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

In order to add a new vote to a flop  you will have to send a request which includes the information in the body:

This is what a down vote will look like for flopId: 1 and userId: 1
```javascript
{
  "flopId": 1,
  "userId": 1,
  "upvote": 0,
  "downvote": 1
}
```

This what an up vote will look like for flopId: 3 and userId: 5
```javascript
{
  "flopId": 3,
  "userId": 5,
  "upvote": 1,
  "downvote": 0
}
```

## Error messages and meanings

Possible errors:

Error code | Description
-----------|----------------------------------------------
503        | The server is currently unavailable (because it is overloaded or down for maintenance)
400        | Bad Request. The request was invalid.
404        | Not Found. The URL request is invalid or does not exist.
