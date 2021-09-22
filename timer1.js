
const args = process.argv;
const newArgs = args.slice(2);

let data = [];
for (let i = 0; i < newArgs.length; i++) {
  let num = Number(newArgs[i]);
  if (num < 0 || isNaN(num)) {
    continue;
  }
  data.push(num);
}

//let data = [10, 3, 5, 15, 9];

for (let i = 0; i < data.length; i++)
  setTimeout(() => {
    process.stdout.write('\x07');
  }, data[i] * 1000);
