const database = require('./database');

// 데이터 불러오기
const data = database.loadData();
console.log('Loaded Data:', data);

// 새 데이터 추가
const newData = { id: 1, name: 'My Name', age: 1000 };
data.push(newData);

// 변경된 데이터 저장
database.saveData(data);
console.log('Data Saved:', data);
