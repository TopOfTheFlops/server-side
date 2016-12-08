# Top Of the Flops API™

## Summary

This API will allow you to authenticate and interact with the Top Of the Flops database, obtain all flops, post new flops, upvote and downvote.

All the API responses come as JSON objects.

## Endpoints

### GET all lifestyles

- `[GET]` all lifestyles on the page

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET    | `/v1/lifestyles` | Get all lifestyles | Lifestyles object containing Array |

* On success, the HTTP status code in the response header is 200 ('OK').  
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.  

The get request will return an object with the key "lifestyles", containing an array of individual lifestyle objects.


```Json
    {
      "lifestyles":
        [
          {
            "lifestyleID": 54,
            "title": "Most Aesthetically pleasing Lasangna",
            "description": "All lasagnas should be beautiful and don't fall in on themselves",
            "flops": [
              {
                "flopID": 12,
                "userID": 132,
                "mediaURL": "http://google.com",
                "description": "This is my best Lasangna currently"
              },
              {
                "flopID": 2,
                "userID": 18,
                "mediaURL": "imgur.com/jksdhfl",
                "description": "Behold the most perfect lasagna"
              },
            ]
          },
          {
            "lifestyleID": 23,
            "title": "Best beard hairdresser",
            "description": "Beards are very important",
            "flops": [
              {
                "flopID": 298,
                "userID": 32,
                "mediaURL": "imgur.com/hkdskj",
                "description": "Beards are my passion"
              },
              {
                "flopID": 328,
                "userID": 18,
                "mediaURL": "imgur.com/hkdskjjkh",
                "description": "Beards are also my passion"
              },
            ]
          }
        ]
    }
```

### GET all flopper (user)

- `[GET]` a flopper

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET    | `/v1/floppers/:id` | Get one user information | User object |

* On success, the HTTP status code in the response header is 200 ('OK').  
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.  

The get request will return an object with the key "user", containing an object with some specific user information.

```JSON
{
  "userID": 23,
  "name": "Lord Master",
  "profilePic": "imgur.com/sdhklfh",
  "bio": "I am good at many things"
}
```

### Authenticate a flopper

- `[GET]` authenticate a flopper

### POST vote to a particular flop post

- `[POST]` a vote to a flop

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| POST    | `/v1/flops/:id` | Post the vote count for a particular flop | Success object |

* On success, the HTTP status code in the response header is 201 ('Created').  
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.  

In order to upvote or downvote a post you will have to send a request which includes the action in the body as in the following example:

```javascript
{
  action: "upvote"
}
```
or
```javascript
{
  action: "downvote"
}
```

If the operation succeeds you will receive a success message back as follows:

```js
{
  "success":
    [
      {
        "message": "Voted casted succesfully",
      },
      {
        "code": 201
      }
    ]
}
```


### POST to create a new Lifestyle

- `[POST]` create a new lifestyle

### POST to create a new flop

- `[POST]` create a new flop


<!-- - `[DELETE]` a flop by id -->


## Error messages and meanings

When the API returns error messages, it does so in JSON format. For example it might look like this:

```js
{
  "error":
    [
      {
        "message": "The format for entering a new entry to the database is not correct, please find the correct format on out documentation and try again",
      },
      {
        "code": 400
      }
    ]
}
```

Possible errors:

Error code | Description
-----------|----------------------------------------------
503        | The server is currently unavailable (because it is overloaded or down for maintenance)
400        | Bad Request. The request was invalid.
404        | Not Found. The URL request is invalid or does not exist.
