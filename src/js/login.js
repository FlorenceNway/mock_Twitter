const userLogin = (users) => {
    const input = document.querySelector('input')
    console.log(users)
    const user = users.filter(user => user.name === input.value)
    return user
}

export default {
    userLogin
}



