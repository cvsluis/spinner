const array = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let time = 100;
for (const line of array) {
  setTimeout(() => process.stdout.write(`\r${line}  `), time);
  time += 200;
}
setTimeout(() => process.stdout.write('\n'), time);