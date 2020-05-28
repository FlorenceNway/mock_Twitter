import TweetBtn from '../images/newtweet.png'
import backArrow from '../images/tweetBackArrow.svg'

const content = document.querySelector('.content')
 
//When hit the leaf/quill icon 
const clickNavigate_tweetBtn = () => {
    const navigate_tweetBtn = document.createElement('img')
    navigate_tweetBtn.src = TweetBtn
    navigate_tweetBtn.className = 'navigateTweetBtn'
    content.appendChild(navigate_tweetBtn)

    navigate_tweetBtn.addEventListener('click',() => {
        content.innerHTML = ''
        const div = renderCreateNewTweet()
        content.innerHTML += div
    })
}

const renderCreateNewTweet = () => {
    const container = document.querySelector('.container')
    const div = `<div class="tweetAsUwish">
                    <div class='navigateArea'>
                        <img src=${backArrow} alt="backArrow">
                        <button class='createNewTweetBtn'>Tweet</button>
                    </div>
                    <div class='tweetText'>
                        <textarea name="tweet" cols="30" rows="9" placeholder="What's on your mind"></textarea>
                    </div>
                </div>`
     return div           
}

export default {
    clickNavigate_tweetBtn, renderCreateNewTweet
}