# 📙 Simplify-DB
<p>A Very Simple DB Module for Node.js</p><br>

저장되는 모든 데이터는 Crypto 모듈을 통해 암호화되어 저장 됩니다.
실서비스에 사용하시려면 코드 수정이 조금 필요할 수도 있습니다.

<h2>⭐ Download</h2>

<h2>❓ How to Use</h2>
<h3>main.js</h3>

```javascript
const crypto = require('crypto');
const fs = require('fs');

// 비밀키와 초기 벡터 생성
const secretKey = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// 데이터 준비
let dataArr = [
    {"name": "John", "age": 30, "city": "New York"},
    {"name": "Jane", "age": 25, "city": "Los Angeles"},
    {"name": "John", "age": 30, "city": "New York"},
    {"name": "Jane", "age": 25, "city": "Los Angeles"},
    // 추가적인 데이터...
];

// 각각의 데이터를 암호화하고 배열에 추가
let encryptedDataArr = dataArr.map(data => {
    let cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
    let encryptedData = cipher.update(JSON.stringify(data), 'utf8', 'hex');
    encryptedData += cipher.final('hex');
    
    return encryptedData;
});

// 암호화된 데이터 목록을 JSON 형식으로 변환하여 파일에 저장
fs.writeFileSync('db.json', JSON.stringify(encryptedDataArr));

console.log('Loaded Data:', dataArr);
```
<h3>cmd</h3>

```cmd
node main.js
```
<br>
<h4>Made by Dev-Tuber with ❤️</h4>
