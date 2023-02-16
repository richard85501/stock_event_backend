// 引入 library
const express = require('express');
// express 引入的是一個 function
const app = express();
// 建立一個不易產生衝突的 port 用來測試
const port = 5001;

const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());



// 如何處理不同的 request，參數分別為 url 和要執行的 function
app.get('/', (req, res) => {
  res.send('hello world!')
})

app.get('/bye', (req, res) => {
  res.send('bye!')
})

// 運行這個 port，參數分別為 port 和要執行的 function
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})