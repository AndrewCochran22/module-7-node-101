let total = 0;

for (let i = 2; i < process.argv.length; i++) {
    const number = Number(process.argv[i]);
    total += number;
}

console.log(total);

// Number(process.argv[2])
//+process.argv[2]