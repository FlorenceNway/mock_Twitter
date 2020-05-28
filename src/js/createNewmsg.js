import UpdateComment from './updateComment'

const clickCreateNewmsg = (tweet) => {
    const newMsgBtn = document.querySelector('.messageBtn')
    console.log(tweet)
    newMsgBtn.addEventListener('click', () => {
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
    })
    
}

const createNewMsg = (commentBox,TweetId,UserId,numOfcomments,Btn) => {
    UpdateComment.submitComment(commentBox,TweetId,UserId,numOfcomments,Btn)
    UpdateComment.backward()
}

export default {
    clickCreateNewmsg
}