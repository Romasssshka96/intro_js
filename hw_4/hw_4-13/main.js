function exchange (sumUAH,currencyValues,exchangeCurrency){
    let miCurrency
    for (item of currencyValues){
        if (item.currency === exchangeCurrency){
            miCurrency = item;
        }
    }
    let result = sumUAH / miCurrency.value;

    return result;
}

document.write(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));