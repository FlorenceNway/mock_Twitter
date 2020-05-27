import API from './API'
import heart from '../images/heart.svg'
import comment from '../images/comment.svg'
import retweet from '../images/retweet.svg'
import backArrow from '../images/backarrow.svg'
import updateReacts from './updateReacts'

const content = document.querySelector('.content')

const clickOtherUserTweet = (tweet) => {
    tweet.addEventListener('click',async () => {
       const oneTweet = await API.getSubTweet(tweet.id)
       renderEachTweet(oneTweet)

       const likes = document.querySelectorAll('.like_Btn');
       [...likes].forEach(updateReacts.react_click)

       const retweets = document.querySelectorAll('.retweet_Btn');
       [...retweets].forEach(updateReacts.react_click)
    })
}

const renderEachTweet = (tweet) => {
    content.innerHTML=''
    const container = document.querySelector('.container')
    container.style.backgroundColor = '#000'
    const div = document.createElement('div')
    div.className = 'subTweet'
    let username = tweet.user.name.split(" ").join("").toLowerCase()
    const subdiv = `
                    <div class="backToTweets">
                        <div class='arrowText'>
                            <img src=${backArrow} alt="backArrow">
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
                    </div>
                `
    div.innerHTML += subdiv            
    content.appendChild(div)
}

export default {
    clickOtherUserTweet
}