const API_ENDPOINT = "http://localhost:3000"
const USERS_URL = `${API_ENDPOINT}/users?_embed=tweets`
const TWEETS_URL = `${API_ENDPOINT}/tweets/?_embed=comments`
const SUBTWEETS_URL = `${API_ENDPOINT}/tweets`
const COMMENTS_URL = `${API_ENDPOINT}/comments`

//const TWEETS_URL = `${API_ENDPOINT}/tweets?_expand=user&_embed=comments`

const d = new Date()
const yy = d.getFullYear()
const mm = d.getMonth() + 1
const dd = d.getDate()

const getTweets = async () => await fetch(TWEETS_URL).then(res => res.json())
const getUsers = async () => await fetch(USERS_URL).then(res => res.json())
const getSubTweet = async(tweetId) => await fetch(`${SUBTWEETS_URL}/${tweetId}?_expand=user&_embed=comments`).then(res => res.json())

const patchReact = async (id,newReacts) => {
    const configObject = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReacts)
      };
      
    return await fetch(`${SUBTWEETS_URL}/${id}?_embed=comments`, configObject)
    .then((response) => {
        if(response.ok) {
            return response.json()
        }else {
            throw "Oops we couldn't update that!"
        }
    })
    .catch(error =>  error )
}

const postComment = async(userId,tweetId,newComment) => {
    const configObject = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId: userId,
            tweetId: tweetId,
            content: newComment,
            date:`${dd}/${mm}/${yy}`
        })
    }

    return await fetch(COMMENTS_URL, configObject)
    .then(response => {
        if(response.ok) {
            return response.json()
        }else {
            throw "Couldn't post the comment!"
        }
    })
    .catch(error => error)
}

const postTweet = async(userId,newTweet) => {
    const configObject = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId: userId,
            content: newTweet,
            likes: 0,
            retweets: 0,
            date:`${dd}/${mm}/${yy}`
        })
    }

    return await fetch(`${SUBTWEETS_URL}`, configObject)
    .then(response => {
        if(response.ok) {
            return response.json()
        }else {
            throw "Couldn't post the tweet!"
        }
    })
    .catch(error => error)
}


export default {
    getTweets, getUsers, patchReact, postComment, getSubTweet, postTweet
}