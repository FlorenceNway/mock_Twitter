import API from './API'
import heart from '../images/heart.svg'
import comment from '../images/comment.svg'
import retweet from '../images/retweet.svg'
import backArrow from '../images/backarrow.svg'
import updateReacts from './updateReacts'
import GoToTweets from './goBackToTweets'

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
       GoToTweets.goToTweets(back_arrow)
    })
}

const renderEachTweet = async tweet => {
    content.innerHTML=''
    const container = document.querySelector('.container')
    container.style.backgroundColor = '#000'

    const div = document.createElement('div')
    div.className = 'subTweet'
    const subdiv = renderDOM(tweet)
    div.innerHTML += subdiv            
    content.appendChild(div)

    const comments = await renderComment(tweet.comments)
    content.appendChild(comments)
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

const renderDOM = (tweet) => {
    let username = tweet.user.name.split(" ").join("").toLowerCase()
    const subdiv = `
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
                        <h4 class="commentTitle">COMMENTS</h4>
                    </div>`
    return subdiv
}

export default {
    clickTweet
}