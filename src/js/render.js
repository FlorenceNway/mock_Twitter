import polygon1 from '../images/polygon1.png'
import polygon3 from '../images/polygon3.png'
import polygon5 from '../images/polygon5.png'
import polygon6 from '../images/polygon6.png'
import sitting from '../images/sitting4.png'

const renderLoginPage = () => {
    const content = document.querySelector('.content')
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

export default {
    renderLoginPage
}