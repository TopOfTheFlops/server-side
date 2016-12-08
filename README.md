# Top Of the Flops API™

## Summary

This API will allow you to authenticate and interact with the Top Of the Flops database, obtain all flops, post new flops, upvote and downvote.  

## Endpoints
- `[GET]` all lifestyles on the page

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


### Get a cat by ID

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET    | `/v1/lifestyles` | Get all lifestyles | Lifestyles object containing Array |


- `[GET]` a flopper
- `[GET]` authenticate a flopper
- `[POST]` a vote to a flop
- `[POST]` create a new lifestyle
- `[POST]` create a new flop
<!-- - `[DELETE]` a flop by id -->
