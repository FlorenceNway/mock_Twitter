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
        const user = JSON.parse(localStorage.getItem('user')) //login User

        createNewMsg(commentBox, tweet.id, user[0].id, numOfcomments, TweetCommentBtn)
        renderUpdatedComment(tweet,TweetCommentBtn) 
    })
}

//Render the updated comment right after the user commented by hitting tweet button
const renderUpdatedComment = (tweet,TweetCommentBtn) => {
    TweetCommentBtn.addEventListener('click', async() => {
        const updatedTweet = await API.getSubTweet(tweet.id)
        const lastComment = []
        lastComment[0] = updatedTweet.comments.pop()
        
        const comments = await EachTweetDetails.renderComment(lastComment)
        content.appendChild(comments)
    })
}   

//Submit the new message to the API and update the number of comments
const createNewMsg = (commentBox,TweetId,UserId,numOfcomments,Btn) => {
    UpdateComment.submitComment(commentBox,TweetId,UserId,numOfcomments,Btn)
    UpdateComment.backward() //Back Arrow to remove the comment box
}

export default {
    clickCreateNewmsg
}