import backArrow from '../images/backarrow.svg'

const comment_click = (comment) => {
    const commentImg = comment.previousSibling
    commentImg.addEventListener('click',(e) => {  
        const p = comment.parentNode
        const siblingnode = p.parentNode
        const newnode = renderQuickComment()
        
        const hasSibiling = siblingnode.nextElementSibling

       if(hasSibiling === null) {
        insertAfter(siblingnode,newnode)
       }
    //comment.textContent = parseInt(comment.textContent) + 1
    // API.patchReact(e.target.id,{"likes":react.textContent})

    })
} 



const insertAfter = (referenceNode, newNode) => {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
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