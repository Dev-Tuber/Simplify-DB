const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.json');

function loadData() {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function saveData(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

module.exports = {
  loadData,
  saveData
};
