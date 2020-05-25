import './style/style.scss'
import Render from './js/render'
import API from './js/API'
import Login from './js/login'
import Tweets from './js/tweets'
import UploadFile from './js/uploadProfile_pic'
import updateReacts from './js/updateReacts.js'

Render.renderLoginPage()

const loginBtn = document.querySelector('.loginBtn')

loginBtn.addEventListener('click', async (e) => {
    e.preventDefault();
   
    const users = await API.getUsers()
    const user = Login.userLogin(users)
    
    if(user) {
        const allUser_Tweets = await API.getTweets()
        const user_Tweets = Tweets.get_userTweets(allUser_Tweets,user[0].id)

       Render.renderTweetpage(user,user_Tweets);

       const file_input = document.querySelector('.choose_file');
       UploadFile.upload_profile_pic(file_input);

       const likes = document.querySelectorAll('.like_Btn');
       [...likes].forEach(updateReacts.react_click)

       const retweets = document.querySelectorAll('.retweet_Btn');
       [...retweets].forEach(updateReacts.react_click)
    }
})




