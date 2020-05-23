import API from './API.js'

const like_click = (like_Btn) => {
    like_Btn.addEventListener('click',(e) => {  
        like_Btn.innerText = parseInt(like_Btn.innerText) + 1
        API.patchLikes(e.target.id,like_Btn.innerText)
    })
} 

export default {
    like_click
}