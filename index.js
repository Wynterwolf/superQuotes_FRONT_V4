document.addEventListener("DOMContentLoaded", () => {
    fetchUsers()
})

const BASE_URL = ("http://127.0.0.1:3000/")


    function fetchUsers(){
    fetch(`${BASE_URL}/quotes`)
    .then(resp => resp.json())
    .then(users => {
        console.log(users)

    })
    }

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