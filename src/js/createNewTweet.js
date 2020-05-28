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
        const div = renderCreateNewTweetBox()
        content.innerHTML += div

        const createNewTweetBtn = document.querySelector('.createNewTweetBtn')
        const backtotweets = document.querySelector('.backtotweets')
        clickCreatNewTweetBtn(createNewTweetBtn)  
        clickBackToTweetsArrow(backtotweets)
    })
     
}

const renderCreateNewTweetBox = () => {
    const div = `<div class="tweetAsUwish">
                    <div class='navigateArea'>
                        <img src=${backArrow} alt="backArrow" class='backtotweets'>
                        <button class='createNewTweetBtn'>Tweet</button>
                    </div>
                    <div class='tweetText'>
                        <textarea name="tweet" cols="30" rows="9" placeholder="What's on your mind"></textarea>
                    </div>
                </div>`
                 
     return div           
}

const clickCreatNewTweetBtn = (createNewTweetBtn) => {
    createNewTweetBtn.addEventListener('click',()=> {
        console.log('click tweet')
    })

}

const clickBackToTweetsArrow = (backtoTweetsArrow) => {
    backtoTweetsArrow.addEventListener('click',()=> {
        console.log('click backarrow')
    })
}

export default {
    clickNavigate_tweetBtn, renderCreateNewTweetBox
}