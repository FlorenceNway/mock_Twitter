import API from './API'

const clickOtherUserTweet = (tweet) => {
    tweet.addEventListener('click',async () => {
       const getTweets = await API.getSubTweet(tweet.id)
       console.log(getTweets)
    })
}

export default {
    clickOtherUserTweet
}