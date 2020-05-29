import UpdateComment from './updateComment'
import EachTweetDetails from './eachTweetDetails'
import API from './API'

const content = document.querySelector('.content')

const clickCreateNewmsg = (tweet) => {
    const newMsgBtn = document.querySelector('.messageBtn')
   
    newMsgBtn.addEventListener('click', async () => {
        const commentBox = UpdateComment.renderQuickComment()
        const siblingnode = document.querySelector('.bodyText')
        const hasSibiling = siblingnode.nextElementSibling

        if(hasSibiling === null) {
            UpdateComment.insertAfter(siblingnode,commentBox) //insert new commentBox after bodyText div (condition control for keep adding reply box)
        }

        const TweetCommentBtn = document.querySelector('.replyBtn')
        TweetCommentBtn.innerText = 'Tweet'

        const numOfcomments = document.querySelector('.comment_Btn')

        createNewMsg(commentBox, tweet.id, tweet.userId, numOfcomments, TweetCommentBtn)

        TweetCommentBtn.addEventListener('click', () => {
           renderUpdatedComment(tweet)
        })
        
        
        const pop = []
        pop[0] = tweet.comments.pop()
        //console.log(pop)
        //const comments = await EachTweetDetails.renderComment(pop)
       // content.appendChild(comments)
    })
}

const renderUpdatedComment = (tweet) => {
    setTimeout(async()=> {
        const tweetsC = await API.getSubTweet(tweet.id)
        console.log('getSubTweet',tweetsC)

    },2000)
}   

const createNewMsg = (commentBox,TweetId,UserId,numOfcomments,Btn) => {
    UpdateComment.submitComment(commentBox,TweetId,UserId,numOfcomments,Btn)
    UpdateComment.backward()
}

export default {
    clickCreateNewmsg
}