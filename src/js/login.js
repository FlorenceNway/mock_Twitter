const userLogin = (users) => {
    const form = document.querySelector('form')
    const errorNode = document.createElement('p')
    errorNode.className = 'errorUsername'
    form.appendChild(errorNode)

    const hasError = form.querySelector('.errorUsername')
    const input = document.querySelector('#user')
    const password = document.querySelector('#pw')

    if(input.value) {
        const user = users.filter(user => user.name === input.value)

        if(user.length) {
            password.value ='password'
            if(hasError) errorNode.remove();
            return user  

        }else {
            hasError.innerText = ""
            hasError.innerText = 'Incorrect Username'
        } 

    } else {
            hasError.innerText = ""
            hasError.innerText = 'Plese enter Username'
    }
}

export default {
    userLogin
}



