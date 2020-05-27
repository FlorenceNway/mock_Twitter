import API from './API'
import Render from './render'
import updateReacts from './updateReacts'
import updateComment from './updateComment'


const clickBackArrow = () => {
    const backArrow = document.querySelector('.backToTweets')
    const user = JSON.parse(localStorage.getItem('user'))

    backArrow.addEventListener('click', async () =>{
        const users = await API.getUsers()
        const allTweets = await API.getTweets()
    
        Render.renderTweetpage(user,users,allTweets)
        
       const likes = document.querySelectorAll('.like_Btn');
       [...likes].forEach(updateReacts.react_click)

       const retweets = document.querySelectorAll('.retweet_Btn');
       [...retweets].forEach(updateReacts.react_click)

       const comments = document.querySelectorAll('.comment_Btn');
       [...comments].forEach(updateComment.comment_click)

    })
}

export default {
    clickBackArrow
}