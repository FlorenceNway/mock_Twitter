const userLogin = (users) => {
    const form = document.querySelector('form')
    const errorNode = document.createElement('p')

    const input = document.querySelector('input')
    if(input.value) {
        const user = users.filter(user => user.name === input.value)

        if(user.length) {
            const errNode = form.querySelector('.wrongUsername')
            if(errNode) { errNode.remove() }
            
            return user   
        }else {
            errorNode.innerText = 'Incorrect Username'
            errorNode.className = 'wrongUsername'
            form.appendChild(errorNode)
        } 
        return user

    } else {
        alert('Plese enter Username and Password')
    }
}

export default {
    userLogin
}



