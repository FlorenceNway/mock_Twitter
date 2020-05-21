import polygon1 from '../images/polygon1.png'
import polygon3 from '../images/polygon3.png'
import polygon5 from '../images/polygon5.png'
import polygon6 from '../images/polygon6.png'
import sitting from '../images/sitting4.png'
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
    console.log(user, tweets)

    content.innerHTML = ''
    const container = document.querySelector('.container')
    container.style.backgroundColor = '#fff'

    const userInfo = document.createElement('div')
    userInfo.classList.add('userInfo')
    
    let username = user[0].name.split(" ").join("").toLowerCase()
    
    userInfo.innerHTML = `<div class="avatar">
                                <input type=file>
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
    tweets.forEach(tweet => {
        tweetsData.style.color = 'black'
        tweetsData.innerHTML += `<div class='tweet'>${tweet.content}</div>`
    })
   
    content.appendChild(userInfo)
    content.appendChild(tweetsData)

}

export default {
    renderLoginPage, renderTweetpage
}