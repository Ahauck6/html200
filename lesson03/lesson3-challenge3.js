let arr = ['rabbits', 'cats', 'dogs', 'hamsters', 'parrots'];

//In assignment description the first element in the array was indexed at 1 so we will assume desired output is i+1

for (let i = 0; i < arr.length; i++) {
    console.log((i + 1).toString().concat(",", arr[i]));
}