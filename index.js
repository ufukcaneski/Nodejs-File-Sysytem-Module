const fs = require('fs');

fs.writeFile('password.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('dosya yazildi');
});

fs.readFile('password.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    console.log('dosya okundu');
});

fs.writeFile('password.json', '{"name": "Employee 2 Name", "salary": 5000}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('dosya güncellendi');
});

fs.unlink('password.json', (err) => {
    if (err) console.log(err);
    console.log('dosya silindi');
});