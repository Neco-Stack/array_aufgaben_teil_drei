let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];
console.log(fahrenheit);
const fahrenHeitCelcius: number[] = fahrenheit.map((temp:number): number =>{
    return Number(((temp - 32) / 1.8).toFixed(1))
})
console.log("Fahenheit:", fahrenheit);
console.log(fahrenHeitCelcius);

