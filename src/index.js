import './style/style.scss'
import './images/polygon1.png'
import './images/polygon3.png'
import './images/polygon5.png'
import './images/polygon6.png'
import './images/sitting4.png'
import API from './API'
import {loginBtn} from './login'
import Login from './login'

API.getTweets()


loginBtn.addEventListener('click', () => {
    Login.userLogin()
})