function exchange (sumUAH,currencyValues,exchangeCurrency){
    let miCurrency
    for (item of currencyValues){
        if (item.currency === exchangeCurrency){
            miCurrency = item;
        }
    }
    return result = sumUAH / miCurrency.value;


}

document.write(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));