import './style/style.scss'
import Render from './js/render'
import API from './js/API'
import Login from './js/login'
import Tweets from './js/tweets'
import UploadFile from './js/uploadProfile_pic'

Render.renderLoginPage()

const loginBtn = document.querySelector('.loginBtn')
loginBtn.addEventListener('click', async (e) => {
    e.preventDefault();
   
    const users = await API.getUsers()
    const user = Login.userLogin(users)
    
    if(user) {
        const allUser_Tweets = await API.getTweets()
        const user_Tweets = Tweets.tweets(allUser_Tweets,user[0].id)

       Render.renderTweetpage(user,user_Tweets)

       const file_input = document.querySelector('.choose_file')
       UploadFile.upload_profile_pic(file_input)
    }
 
})




