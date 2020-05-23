import API from './API.js'

const like_click = (like_Btn) => {
    like_Btn.addEventListener('click',() => {
        API.patchLikes("***** Increase Like *****")
    })
} 

export default {
    like_click
}