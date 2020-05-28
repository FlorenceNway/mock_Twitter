//..........NOT USING IT ANYMORE............
//..........NOT USING IT ANYMORE............

//filtering only tweets from login User
const get_userTweets = (alltweets,userId) => {
    const userTweets = alltweets.filter(tweet => tweet.userId === userId)
    return userTweets
}

export default {
    get_userTweets
}

//..........NOT USING IT ANYMORE............
//..........NOT USING IT ANYMORE............
