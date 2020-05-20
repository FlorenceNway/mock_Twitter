import './style/style.scss'
import Render from './js/render'
import API from './js/API'
import Login from './js/login'
import Tweets from './js/tweets'


Render.renderLoginPage()


const loginBtn = document.querySelector('.loginBtn')
loginBtn.addEventListener('click', async (e) => {
    e.preventDefault();
   
    const users = await API.getUsers()
    const user = Login.userLogin(users)
    
    const allUser_Tweets = await API.getTweets()
    const user_Tweets = Tweets.tweets(allUser_Tweets,user[0].id)
    //console.log(user_Tweets)

    //Render.renderHomepage(user, tweets)
})