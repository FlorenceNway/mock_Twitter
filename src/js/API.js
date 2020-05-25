const API_ENDPOINT = "http://localhost:3000"
const USERS_URL = `${API_ENDPOINT}/users?_embed=tweets`
const TWEETS_URL = `${API_ENDPOINT}/tweets/?_embed=comments`
//const TWEETS_URL = `${API_ENDPOINT}/tweets?_expand=user&_embed=comments`

const getTweets = async () => await fetch(TWEETS_URL).then(res => res.json())
const getUsers = async () => await fetch(USERS_URL).then(res => res.json())

const patchLikes = async (id,{newReacts}) => {
    const configObject = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReacts)
      };
      
    return await fetch(`${API_ENDPOINT}/tweets/${id}?_embed=comments`, configObject)
    .then((response) => {
        if(response.ok) {
            return response.json()
        }else {
            throw "Oops we couldn't update that!"
        }
    })
    .catch(error =>  error )
}



export default {
    getTweets,getUsers,patchLikes
}