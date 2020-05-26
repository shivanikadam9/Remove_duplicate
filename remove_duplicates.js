

const fs = require('fs');
var dedupe = require('dedupe');
var uniqs = require('uniqs');
var infusion = require('dedupe-infusion');

 let rawdata = fs.readFileSync('mock_data(10).json');
 let data = JSON.parse(rawdata);

 var d1 = new Date();
 var n1 = d1.getTime();


 let rdata = dedupe(data);
 console.log(rdata);

 // let rdata = uniqs(data);
 // console.log(rdata);



 var d2 = new Date();
 var n2 = d2.getTime();


 var t = n2-n1;
 console.log("Time difference " + t);

 let data_new = JSON.stringify(rdata, null, 10);

fs.writeFile('final_data.json', data_new, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});
