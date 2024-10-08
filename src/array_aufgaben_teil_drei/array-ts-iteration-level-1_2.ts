console.log("test");
const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta'];
console.log(drinks);
const upperDrinks: string[] = drinks.map((item) => item.toUpperCase());
console.log(upperDrinks);
drinks.map((getraenk)=> {
    console.log(`I like ${getraenk}`);
})
