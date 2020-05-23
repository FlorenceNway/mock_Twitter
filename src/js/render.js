import polygon1 from '../images/polygon1.png'
import polygon3 from '../images/polygon3.png'
import polygon5 from '../images/polygon5.png'
import polygon6 from '../images/polygon6.png'
import sitting from '../images/sitting4.png'
import heart from '../images/heart.svg'
import comment from '../images/comment.svg'
import retweet from '../images/retweet.svg'

const content = document.querySelector('.content')

const renderLoginPage = () => {
    const loginPage = `<div class='polygon1'><img src="${polygon1}" alt="polygon"></div>
                        <div class='polygon2'></div>
                        <div class='polygon3'><img src="${polygon3}" alt="polygon"></div>
                        <div class='polygon4'></div>
                        <div class='polygon6'><img src="${polygon6}" alt="polygon"></div> 
                        <div class='polygon5'><img src="${polygon5}" alt="polygon"></div>
                        <div class="login_img"><img src="${sitting}" alt="man sitting picture"></div>
                        <form action="#">
                            <label for="user" class="username"></label>
                            <input id='user' type="text" name='user' placeholder="User name" required>
                            <label for="pw" class="password"></label>
                            <input id='pw' name='pw' type="password" placeholder="Password">
                            <button class="loginBtn">Login</button>
                        </form>`

    content.innerHTML += loginPage;                    
}


const renderTweetpage = (user,tweets) => {

        content.innerHTML = ''
        const container = document.querySelector('.container')
        container.style.backgroundColor = '#fff'

        const userInfo = document.createElement('div')
        userInfo.classList.add('userInfo')
        let username = user[0].name.split(" ").join("").toLowerCase()
        userInfo.innerHTML = `<div class="avatar">
                                    <input type='file' class='choose_file'> 
                                </div>
                                <div class="userDetail">
                                    <p><b>${user[0].name}</b></p>
                                    <p>@${username}</p>
                                    <p>London,UK</p>
                                    <p><b>245</b> Followers</p>
                                    <p><b>132</b> Followings</p>
                                </div>`

        const tweetsData = document.createElement('div')
        tweetsData.classList.add('tweets')
        tweets.forEach((tweet) => {
            tweetsData.style.color = 'black'
            tweetsData.innerHTML += `<div class='tweet'>
                                        <div class='user_data'>
                                            <p>${user[0].name}</p>
                                            <p>${tweet.date}</p>
                                        </div>
                                        <div class='tweetContent'>
                                            <p>${tweet.content}</p>
                                        </div>
                                        <div class='like_share'>
                                            <p class='like_Btn' id=${tweet.id}><img src=${heart} alt='likes'>${tweet.likes}</p>
                                            <p class='retweet_Btn'><img src=${retweet} alt='retweets'></i>${tweet.retweets}</p>
                                            <p class='comment_Btn'><img src=${comment} alt='comments'></i>${tweet.comments.length}</p>
                                        </div></div>` 
        })
        content.appendChild(userInfo)
        content.appendChild(tweetsData);
}


export default {
    renderLoginPage, renderTweetpage
}