document.addEventListener("DOMContentLoaded", () => {
    fetchUsers()
    fetchQuotes()
})

const BASE_URL = ("http://127.0.0.1:3000/")

// fetch users index (read)
    function fetchUsers(){
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {

        u = new User(user.username)
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
        u = new Quote(quote.quote)
        u.renderQuote()
    })
    }