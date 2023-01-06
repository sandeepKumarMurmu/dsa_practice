const invoice_data = {};
const date = new Date();
const day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1).toString();
const year = date.getFullYear();

console.log(day)
console.log("0" + (date.getMonth() + 1))
console.log(0 + 1);

