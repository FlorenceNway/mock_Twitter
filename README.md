# Twitter 

This is a mock Twitter!

## Install and Run

```
npm install
```

```
npm start
```

This will start `json-server` at `localhost:3000` and a Webpack server at `localhost:8080`.



## Features

* Login
  * Ignore the password, but "login" as a user if the username matches any in from the API
  * Eror messages will show for wrong username and empty username
* Create a new tweet
  * Where the `userId` is the ID of the logged in user
* Update avatar on avatar click
  * On your profile page, click the avatar to open a file dialog, the user can select an image file, which is displayed as the new avatar
* Leave a comment
  * Where the `tweetId` is the tweet which the comment belongs to and the `userId` is the ID of the logged in user
* Like
  * Increase number
* Retweet
  * Increase number
* Comment
  * Increase number  


