import API from './API.js';
import filledHeart from '../images/filledHeart.svg'

const like_click = (like_Btn) => {
    const heartBtn = like_Btn.previousSibling
    heartBtn.addEventListener('click',(e) => {  
        like_Btn.textContent = parseInt(like_Btn.textContent) + 1
        //heartBtn.src = filledHeart
        changeColorAfterClick(like_Btn,filledHeart)

        API.patchLikes(e.target.id,like_Btn.textContent)
    })
} 

const changeColorAfterClick = (react,svg) => {
    react.previousSibling.src = svg
}

export default {
    like_click
}