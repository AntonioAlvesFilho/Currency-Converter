const button = document.getElementsByTagName("button")[0]
const selectBotName = document.getElementById('bot-currency-select')



const convert =async  () => {

    const inputAmount = document.getElementById('valor').value
    const realValue = document.getElementById('real-value')

    const newCurrency = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then (response => response.json())

    const dolar = newCurrency.USD.high
    const euro = newCurrency.EUR.high
    const bitcoin = newCurrency.BTC.high

    realValue.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputAmount)

    const botValue = document.getElementById('dolar-value')


    if (selectBotName.value === 'Euro - €') {

        botValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputAmount / euro)
    } else if (selectBotName.value === 'Real Brasileiro - R$') {
        botValue.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputAmount)
    } else if (selectBotName.value === 'BitCoin - ₿') {
        botValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format((inputAmount / bitcoin) / 1000)
    } else if (selectBotName.value === 'Dólar Americano - $') {
        botValue.innerHTML = new Intl.NumberFormat('en-US', {
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
    const resettop = document.getElementById('dolar-value')
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


button.addEventListener('click', convert)

selectBotName.addEventListener('change', currencyChange)
