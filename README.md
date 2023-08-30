# 📙 Simplify-DB
<p>A Very Simple DB Module for Node.js</p><br>

<h2>⭐ Download</h2>

```npm
npm i simplify-db
```

<h2>❓ How to Use</h2>

```javascript
// Call Module
const myModule = require('simplify-db');

// Load data
const data = database.loadData();
console.log('Loaded Data:', data);

// Add Data
const newData = { id: 1, name: 'John Doe', age: 25 };
data.push(newData);

// Save Edited Data
database.saveData(data);
console.log('Data Saved:', data);
```
<br>
<h4>Made by Dev-Tuber with ❤️</h4>
