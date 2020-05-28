import backArrow from '../images/backarrow.svg'
import API from './API'

//When hit the comment button
const comment_click = (comment) => {
    const commentImg = comment.previousSibling
    const p = comment.parentNode
    const siblingnode = p.parentNode
        commentImg.addEventListener('click',(e) => {     
            const newnodes = renderQuickComment()
            const hasSibiling = siblingnode.nextElementSibling

        if(hasSibiling === null) {
            insertAfter(siblingnode,newnodes) //insert new node after like_share div (condition control for keep adding reply box)
        }
        
        const replyBtn = newnodes.querySelector('.replyBtn')
        submitComment(newnodes,commentImg.id,p.id,comment,replyBtn) //submit comment when user hit the reply button
        backward() // remove comment reply box when user hit the back arrow
    })
} 


//When hit the reply button
const submitComment = (commentBox,TweetId,UserId,numOfcomments,Btn) => {
    const inputComment = commentBox.querySelector('textarea')
    
    Btn.addEventListener('click',() => {
        if(inputComment.value) {
            API.postComment(parseInt(UserId),parseInt(TweetId),inputComment.value)
            commentBox.remove()
            numOfcomments.innerHTML = parseInt(numOfcomments.innerHTML) + 1
            
        }
    })  
}


//When hit the backward button
const backward = () => {
    const backArrow = document.querySelector('.bakArow')
    const commentBox = document.querySelector('.commentBox')

    backArrow.addEventListener('click', () => {
        commentBox.remove()
    })
}

const renderQuickComment = () => {
    const div = document.createElement('div')
    div.className = 'commentBox'
    div.innerHTML = ` <textarea class='commentTextarea' placeholder='Your Comment'></textarea>
                      <div class='tweetBtnArea'>
                            <img class='bakArow' src=${backArrow} alt="backArrow">
                            <button class='replyBtn'>Reply</button>
                    </div>`
    return div
}

const insertAfter = (referenceNode, newNodes) => {
    referenceNode.parentNode.insertBefore(newNodes, referenceNode.nextSibling);
}


export default {
    comment_click, renderQuickComment, submitComment, insertAfter, backward
}