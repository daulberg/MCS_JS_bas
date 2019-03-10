let sumOfMoney = prompt(`Сколько у вас денег?`)
parseFloat(sumOfMoney)
sumOfMoney = parseFloat(sumOfMoney)
let sumOfApple = prompt(`Сколько вы купили яблок?`)
parseFloat(sumOfApple)
sumOfApple = parseFloat(sumOfApple)
let sumOfBread = prompt(`Сколько вы купили батонов хлеба?`)
parseFloat(sumOfBread)
sumOfBread = parseFloat(sumOfBread)
let costapple = prompt(`Сколько стоит одно яблоко?`)
parseFloat(costapple)
costapple = parseFloat(costapple)
let productOfApple = costapple * sumOfApple
let costbread = prompt(`Сколько стоит один батон хлеба?`)
parseFloat(costbread)
costbread = parseFloat(costbread)
let productOfBread = costbread * sumOfBread
let sumOfPurchases = productOfApple + productOfBread
let total = sumOfMoney >= sumOfPurchases
document.write(total)