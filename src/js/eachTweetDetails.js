import API from './API'
import heart from '../images/heart.svg'
import comment from '../images/comment.svg'
import retweet from '../images/retweet.svg'
import backArrow from '../images/backarrow.svg'
import updateReacts from './updateReacts'
import GoBackToTweets from './goBackToTweets'
import MessageBtn from '../images/createNewMessage.png'
import CreateNewMsg from './createNewmsg'

const content = document.querySelector('.content')

const clickTweet = tweet => {
    tweet.addEventListener('click',async () => {
       const oneTweet = await API.getSubTweet(tweet.id)
       renderEachTweet(oneTweet)

       const likes = document.querySelectorAll('.like_Btn');
       [...likes].forEach(updateReacts.react_click)

       const retweets = document.querySelectorAll('.retweet_Btn');
       [...retweets].forEach(updateReacts.react_click)

       const back_arrow = document.querySelector('.backToTweets')
       GoBackToTweets.goToTweets(back_arrow)
    })
}


const renderEachTweet = async tweet => {
    content.innerHTML=''
    const container = document.querySelector('.container')
    container.style.backgroundColor = '#000'
    
    const subtweet = document.createElement('subtweet')
    subtweet.className = 'subTweet'
    const tweetDetail = renderTweet(tweet)
    subtweet.innerHTML = tweetDetail            
    content.appendChild(subtweet)

    const commentHeader = document.createElement('div')
    commentHeader.innerHTML = ` <h4 class="commentTitle">COMMENTS</h4>`
    content.appendChild(commentHeader)

    const comments = await renderComment(tweet.comments)
    content.appendChild(comments)

    renderMessageBtn()
    CreateNewMsg.clickCreateNewmsg(tweet)
}


const renderComment = async (comments) => {
    const users = await API.getUsers()
    const commentDiv = document.createElement('div')
    commentDiv.className = 'comments'    
   
    comments.forEach((comment) => {
        const commentUser = users.filter(user => user.id === comment.userId)
        const comment_div = `<div class='comment'>
                                <div class='profile'>
                                    <div class="avatar">
                                        <img src=${commentUser[0].avatar_url} alt="">
                                    </div>
                                    <div class="userDetail">
                                        <p><b>${commentUser[0].name}</b></p>
                                        <p>@${commentUser[0].name}</p>
                                    </div>
                                </div>
                                <div class="commentText">${comment.content}</div>
                            </div>`
        commentDiv.innerHTML += comment_div                    
    })   
    return commentDiv        
}

const renderTweet = (tweet) => {
    let username = tweet.user.name.split(" ").join("").toLowerCase()
    const tweetDetail = `
                    <div class="backword">
                        <div class='arrowText'>
                            <img src=${backArrow} alt="backArrow" class='backToTweets'>
                            <span>Tweet</span>
                        </div>
                    </div>
                    <div class='bodyText'>
                        <div class='profile'>
                            <div class="avatar">
                                <img src=${tweet.user.avatar_url} alt="">
                            </div>
                            <div class="userDetail">
                                <p><b>${tweet.user.name}</b></p>
                                <p>@${username}</p>
                            </div>
                        </div>
                        
                        <div class='tweetContent' id=${tweet.id}>
                            <p>${tweet.content}</p>
                        </div>
                        <div class='like_share'>
                            <p><img src=${heart} alt='likes' id=${tweet.id}><span class='like_Btn'>${tweet.likes}</span></p>
                            <p><img src=${retweet} alt='retweets' id=${tweet.id}><span class='retweet_Btn'>${tweet.retweets}</span></p>
                            <p id=${tweet.user.id}><img src=${comment} alt='comments'id=${tweet.id}><span class='comment_Btn'>${tweet.comments.length}</span></p>
                        </div>
                    </div>`
    return tweetDetail
}

const renderMessageBtn = () => {
    const messageBtn = document.createElement('img')
    messageBtn.className = 'messageBtn' 
    messageBtn.src = MessageBtn
    content.appendChild(messageBtn)
}


export default {
    clickTweet, renderComment
}