import API from './API.js';
import filledHeart from '../images/filledHeart.svg'
import colorRetweet from '../images/colorRetweet.svg'

const react_click = (react) => {
    const reactImg = react.previousSibling
    reactImg.addEventListener('click',(e) => {  
    react.textContent = parseInt(react.textContent) + 1

        const action = reactImg.alt
        if(action ==='likes') {
            changeColorAfterClick(react,filledHeart)
            API.patchReact(e.target.id,{"likes":react.textContent})
            
        }else if(action === 'retweets') {
            changeColorAfterClick(react,colorRetweet)
            API.patchReact(e.target.id,{"retweets":react.textContent})
        }
    })
} 

const changeColorAfterClick = (react,svg) => {
    react.previousSibling.src = svg
}

export default {
    react_click
}