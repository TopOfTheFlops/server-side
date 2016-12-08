# Top Of the Flops API™

## Summary

This API will allow you to authenticate and interact with the Top Of the Flops database, obtain all flops, post new flops, upvote and downvote.

All the API responses come as JSON objects.

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
      },
      {
        "lifestyleId": 23,
        "title": "Best beard hairdresser",
        "description": "Beards are very important",
      }
    ]
}
```

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
      "mediaURL": "http://google.com",
      "description": "This is my best Lasangna currently",
      "upvotes": 34,
      "downvotes": 1,
      "lifestyleId":54
    },
    {
      "flopId": 2,
      "userId": 18,
      "mediaURL": "imgur.com/jksdhfl",
      "description": "Behold the most perfect lasagna",
      "upvotes": 34,
      "downvotes": 1,
      "lifestyleId":54
    },
    {
      "flopId": 298,
      "userId": 32,
      "mediaURL": "imgur.com/hkdskj",
      "description": "Beards are my passion",
      "upvotes": 34,
      "downvotes": 1,
      "lifestyleId":23
    },
    {
      "flopId": 328,
      "userId": 18,
      "mediaURL": "imgur.com/hkdskjjkh",
      "description": "Beards are also my passion",
      "upvotes": 34,
      "downvotes": 1,
      "lifestyleId":23
    }
  ]
}
```

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
  newUser: {
    username: "gabulina",
    name: "Gabita Genia",
    profilePic: "imgur.com/sdhklfhhjk",
    bio: "I like voting for stuff"
  }
}
```
If the request is successful you will receive a success code 201

### POST vote to a particular flop post

- `[POST]` a vote to a flop

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| POST    | `api/v1/flops/vote` | Post the vote count for a particular flop | Success message |

* On success, the HTTP status code in the response header is 201 ('Created').  
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.  

In order to upvote or downvote a post you will have to send a request which includes the action in the body as in the following example:

```javascript
{
  action: "upvote",
  flopId: 367
}
```
or
```javascript
{
  action: "downvote",
  flopId: 23
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
  newLifestyle: {
    title: "Perfect banana peel",
    description: "Aim to peel a banana and have 0 strings left on it"
  }
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
  newFlop: {
    userId: 32,
    mediaURL: "imgur.com/hkdskj",
    description: "I can do this with my eyes closed",
    lifestyleId:23
  }
}
```

If the operation succeeds you will receive a success message back as follows:

```js
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


## Error messages and meanings

Possible errors:

Error code | Description
-----------|----------------------------------------------
503        | The server is currently unavailable (because it is overloaded or down for maintenance)
400        | Bad Request. The request was invalid.
404        | Not Found. The URL request is invalid or does not exist.
