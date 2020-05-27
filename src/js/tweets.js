//..........NOT USING IT ANYMORE............
//..........NOT USING IT ANYMORE............

const get_userTweets = (alltweets,userId) => {
    
    const userTweets = alltweets.filter(tweet => tweet.userId === userId)
    return userTweets
}

export default {
    get_userTweets
}