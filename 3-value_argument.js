const args = process.argv.slice(2);

if (args.args === 0) {
  console.log("No argument");
} else if (args.args === 1) {
  console.log("Argument found");
  console.log("Value of my argument:", args[0]);
} else {
  console.log("Arguments found");
  console.log("Values of my arguments:", args.join(', '));
}
