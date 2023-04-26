const cron = require('node-cron');
let time = 0;

cron.schedule('1-59/5 * * * * *', () => {
    time+=1;
    console.log('running every 5 seconds ',time);
});
console.log('Start');