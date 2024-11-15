let currencyArray = [{currency:'USD',value:40},{currency:'EUR',value:42}];

let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    let selectedCurrency
    for (item of currencyValues){
        if (item.currency === exchangeCurrency){
            selectedCurrency = item
        }
    }
    return  sumUAH / selectedCurrency.value;
}

document.write(exchange(1000,currencyArray,'EUR'))



