
const USD = 6.05
const EUR = 6.28
const GBP = 7.43

const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");

const form = document.querySelector("form");

const footer = document.querySelector("main footer")
const description = document.querySelector("#description")

const result = document.querySelector("#result")


//manipulando o input
amount.addEventListener('input', ()=> {
    
    const hasCharacterRegex = /\D+/g;
    //remove as letras do campo input e recebe somente numeros
    amount.value = amount.value.replace(hasCharacterRegex, "");
});

form.onsubmit = (event)=>{
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break;
    
        default:
            break;
    }
}

// Function to convert currency
function convertCurrency(amount, price, symbol){
    try {
        // Update the description text with the conversion rate
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = amount*price
        total = formatCurrencyBRL(total).replace("R$","")

        result.textContent = `${total} Reais`

        // Show the result in the footer
        footer.classList.add("show-result")
    } catch (error) {
        // Log any errors to the console
        console.log(error)
        // Hide the result in the footer if there's an error
        footer.classList.remove("show-result")
    }
}

function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    })
}