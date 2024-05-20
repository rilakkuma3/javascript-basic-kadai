const today = new Date();
const [month,day,year] = [
  today.getMonth(),
  today.getUTCDate(),
  today.getUTCFullYear(),

];


console.log(today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate() + '日');
