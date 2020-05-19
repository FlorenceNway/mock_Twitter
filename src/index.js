import './style/style.scss'
import API from './js/API'
import Login from './js/login'
import Render from './js/render'

API.getTweets()
Render.renderLoginPage()

Login.loginBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const users = await API.getUsers()
    Login.userLogin(users)
})