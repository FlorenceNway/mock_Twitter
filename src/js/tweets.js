const tweets = (alltweets,userId) => {
    
    const userTweets = alltweets.filter(tweet => tweet.userId === userId)
    return userTweets
}

export default {
    tweets
}