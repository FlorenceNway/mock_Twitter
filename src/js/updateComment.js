import backArrow from '../images/backarrow.svg'

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

    submitComment(newnodes,commentImg.id)
    //comment.textContent = parseInt(comment.textContent) + 1
    // API.patchReact(e.target.id,{"likes":react.textContent})

    })
} 

const submitComment = (commentBox,id) => {
    const reply = commentBox.querySelector('.replyBtn')
    reply.addEventListener('click',() => {
        console.log('reply click',id)
    })  
}

const insertAfter = (referenceNode, newNodes) => {
    referenceNode.parentNode.insertBefore(newNodes, referenceNode.nextSibling);
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


export default {
    comment_click
}