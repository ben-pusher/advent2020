const fs = require('fs')
var expenses = []

expenses = fs.readFileSync('expenses.txt').toString().split("\n");
for(var i=0; i<expenses.length;i++) expenses[i] = +expenses[i];
expenses.sort((a,b) => (a - b));

for (var i = 0; i<expenses.length; i++) {
    for(var j = expenses.length; j>0; j--) {
        if (expenses[i]+expenses[i+1]+expenses[j]==2020) {
            var result = expenses[i] * expenses[i+1] * expenses[j];
            console.log(`the numbers are ${expenses[i]}, ${expenses[i+1]} and ${expenses[j]}`)
            console.log(`${expenses[i]} * ${expenses[i+1]} * ${expenses[j]} = ${result}`)
            return
        } else if (expenses[i]+expenses[i+1]+expenses[j]<2020){
            break
        }
    }
    
}
