import API from './API'
import heart from '../images/heart.svg'
import comment from '../images/comment.svg'
import retweet from '../images/retweet.svg'
import backArrow from '../images/backarrow.svg'
import updateReacts from './updateReacts'
import Render from './render'

const content = document.querySelector('.content')

const clickTweet = tweet => {

    tweet.addEventListener('click',async () => {
       const oneTweet = await API.getSubTweet(tweet.id)
       renderEachTweet(oneTweet)
//****** Repeatttttttt *****/
       const likes = document.querySelectorAll('.like_Btn');
       [...likes].forEach(updateReacts.react_click)

       const retweets = document.querySelectorAll('.retweet_Btn');
       [...retweets].forEach(updateReacts.react_click)

       clickBackArrow()
    })
}

const renderEachTweet = tweet => {
    content.innerHTML=''
    const container = document.querySelector('.container')
    container.style.backgroundColor = '#000'
    const div = document.createElement('div')
    div.className = 'subTweet'
    const subdiv = renderDOM(tweet)
    div.innerHTML += subdiv            
    content.appendChild(div)
}


const clickBackArrow = () => {
    const backArrow = document.querySelector('.backToTweets')

    backArrow.addEventListener('click', async () =>{
        const users = await API.getUsers()
        const user = JSON.parse(localStorage.getItem('user'))
        const allTweets = await API.getTweets()
    
        Render.renderTweetpage(user,users,allTweets)
    //****** Repeatttttttt *****/    
       const likes = document.querySelectorAll('.like_Btn');
       [...likes].forEach(updateReacts.react_click)

       const retweets = document.querySelectorAll('.retweet_Btn');
       [...retweets].forEach(updateReacts.react_click)

    })
}

const renderComment = () => {

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
                    </div>`
    return subdiv
}

export default {
    clickTweet
}