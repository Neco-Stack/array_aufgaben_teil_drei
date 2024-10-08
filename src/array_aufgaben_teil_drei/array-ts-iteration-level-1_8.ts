const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(zahlen);
const printEvenNumber: number[] = zahlen.filter((num: number):boolean =>{
    return num % 2 === 0;
})
console.log(printEvenNumber);
const printOddNumbers: number[] = zahlen.filter((num: number):boolean => {
    return num % 2!== 0;
})
console.log(printOddNumbers);


