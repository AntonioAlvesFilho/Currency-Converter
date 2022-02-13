const button = document.getElementsByTagName("button")[0]
const selectBotName = document.getElementById('bot-currency-select')


const dolar = 5.3
const real = 1
const euro = 6
const bitcoin = 230000


const convert = () => {

    const inputAmount = document.getElementById('valor').value
    const realValue = document.getElementById('real-value')

    realValue.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputAmount)

    const dolarValue = document.getElementById('dolar-value')


    if (selectBotName.value === 'Euro - €') {

        dolarValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputAmount / euro)
    } else if (selectBotName.value === 'Real Brasileiro - R$') {
        dolarValue.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputAmount / real)
    } else if (selectBotName.value === 'BitCoin - ₿') {
        dolarValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputAmount / bitcoin)
    } else if (selectBotName.value === 'Dólar Americano - $') {
        dolarValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputAmount / dolar)
    }
    resetinput()
    
}

const resetinput = () => {
    document.getElementById('valor').value = ''
}

const resetvalues = () => {
    const  resettop = document.getElementById('dolar-value')
    const resetbot = document.getElementById('real-value')

    resettop.innerHTML = '0'
    resetbot.innerHTML = '0'

    
}

const currencyChange = () => {
    const botCurrencyName = document.getElementById('bot-currency-name')
    const botCurrencyFlag = document.getElementById('bot-currency-flag')
    if (selectBotName.value === 'Euro - €') {
        botCurrencyName.innerHTML = 'Euro'
        botCurrencyFlag.src = "./assets/eur.png"

    } else if (selectBotName.value === 'Real Brasileiro - R$') {
        botCurrencyName.innerHTML = 'Real Brasileiro'
        botCurrencyFlag.src = "./assets/bra.png"

    } else if (selectBotName.value === 'Dólar Americano - $') {
        botCurrencyName.innerHTML = 'Dólar Americano'
        botCurrencyFlag.src = "./assets/eua.png"

    } else if (selectBotName.value === 'BitCoin - ₿') {
        botCurrencyName.innerHTML = 'BitCoin'
        botCurrencyFlag.src = "./assets/bit.png"

    }
    resetvalues()
    resetinput()
  
}

const input = document.getElementById('valor').value

const inputchange =  () => {
        input.value = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(input)
    }


button.addEventListener('click', convert)

selectBotName.addEventListener('change', currencyChange)

input.addEventListener('change', inputchange)

