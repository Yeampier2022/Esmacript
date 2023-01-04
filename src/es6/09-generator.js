function* iterate(array)  {
    for (let value of array) {
        yield value; 
    }
}

const it = iterate (['Yeampier', 'Jesus', 'Huerta', 'Fernandez']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

