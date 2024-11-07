let clock = +prompt('Введіть час')
if (clock >= 0 && clock <=15){
    console.log('перша чверть')
}
else if (clock >= 16 && clock <=30){
    console.log('Друга Третя Четверта чверть')
}
else if (clock >= 31 && clock <=45){
    console.log('Третя чверть')
}
else if (clock >= 46 && clock <=59){
    console.log('Четверта чверть')
}
