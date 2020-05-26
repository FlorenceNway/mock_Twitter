import backArrow from '../images/backarrow.svg'
import API from './API'

const comment_click = (comment) => {
    const commentImg = comment.previousSibling
    commentImg.addEventListener('click',(e) => {  
        const p = comment.parentNode
        const siblingnode = p.parentNode
        const newnodes = renderQuickComment()
        const hasSibiling = siblingnode.nextElementSibling

       if(hasSibiling === null) {
        insertAfter(siblingnode,newnodes)
       }

    submitComment(newnodes,commentImg.id,p.id,comment)
    

    })
} 

const submitComment = (commentBox,TweetId,UserId,numOfcomments) => {
    const inputComment = commentBox.querySelector('textarea')
    const reply = commentBox.querySelector('.replyBtn')
    reply.addEventListener('click',() => {
        if(inputComment.value) {
            API.postComment(parseInt(UserId),parseInt(TweetId),inputComment.value)
            commentBox.remove()
            numOfcomments.textContent = parseInt(numOfcomments.textContent) + 1
        }
    })  
}


const renderQuickComment = () => {
    const div = document.createElement('div')
    div.className = 'commentBox'
    div.innerHTML = ` <textarea class='commentTextarea' placeholder='Your Comment'></textarea>
                      <div class='tweetBtnArea'>
                            <img src=${backArrow} alt="backArrow">
                            <button class='replyBtn'>Reply</button>
                    </div>`
    return div
}

const insertAfter = (referenceNode, newNodes) => {
    referenceNode.parentNode.insertBefore(newNodes, referenceNode.nextSibling);
}


export default {
    comment_click
}