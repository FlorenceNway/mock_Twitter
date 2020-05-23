import API from './API.js'

const like_click = (like_Btn) => {
    console.log(like_Btn)
    like_Btn.addEventListener('click',(e) => {
        const tweetid = e.target.parentNode.id
        console.log(tweetid)
        //API.patchLikes("***** Increase Like *****")
    })
} 

export default {
    like_click
}