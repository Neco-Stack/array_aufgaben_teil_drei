let fruits: string[] = ['🍇', '🍌', '🍒', '🍎']
console.log(fruits);
const fruitsJuiceAdded = fruits.map((fruit: string): string=>{
    return fruit + '🥤';    
})
console.log(fruitsJuiceAdded);



