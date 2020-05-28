import TweetBtn from '../images/newtweet.png'

const content = document.querySelector('.content')
 
const clickCreateTweet = () => {
    const tweetBtn = document.createElement('img')
    tweetBtn.src = TweetBtn
    tweetBtn.className = 'tweetBtn'
    content.appendChild(tweetBtn)

    tweetBtn.addEventListener('click',() => {
        console.log('click')
    })
}

const renderCreateNewTweet = () => {
    const div = `<div class="tweetAsUwish">
                    <div>
                        <img src='' alt="backArrow">
                        <button>Tweet</button>
                    </div>
                    <div>
                        <textarea name="tweet" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>`
}

export default {
    clickCreateTweet, renderCreateNewTweet
}