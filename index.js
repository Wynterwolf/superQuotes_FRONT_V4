document.addEventListener("DOMContentLoaded", () => {
    fetchUsers()
    fetchQuotes()

})

const BASE_URL = ("http://127.0.0.1:3000/")

// fetch users index 
    function fetchUsers(){
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        u = new User(user.name, user.username, user.email)
        u.renderUser()

    })
    }
// fetch quotes index
    function fetchQuotes(){
        fetch(`${BASE_URL}/quotes`)
        .then(resp => resp.json())
        .then(quotes => {
      // This for random quote setup
        const quote = quotes[Math.floor(Math.random() * quotes.length)]
        u = new Quote(quote.quote, quote.character, quote.episode)
        u.renderQuote()
    })
    }
// resets otherwise splices quotes etc
document.getElementById("btn1").addEventListener("click", function(){
    document.getElementById("quote").innerHTML = "Quote: ";
    document.getElementById("character").innerHTML = "Character: ";
    document.getElementById("episode").innerHTML = "Episode: ";
    fetchQuotes()
})

// for post

//for delete