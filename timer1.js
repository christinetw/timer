
const args = process.argv;
const newArgs = args.slice(2);

let data = [10, 3, 5, 15, 9];

for (let i = 0; i < data.length; i++)
  setTimeout(() => {
    process.stdout.write('\x07');
  }, data[i] * 1000);
