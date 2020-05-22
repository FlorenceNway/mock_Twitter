const upload_profile_pic = (file_input) => {
    if(file_input) {
        file_input.addEventListener('change', (e) => {
                const avatar_div = document.querySelector('.avatar')
                const file = file_input.files[0]
                const reader  = new FileReader();

                reader.onload = (e) => {
                    avatar_div.style.backgroundImage = `url('${e.target.result}')`
                    avatar_div.style.backgroundSize = 'cover'   
                }
                
                reader.readAsDataURL(file);
        })
    }
}

export default {
    upload_profile_pic
}