//server app
const express = require('express');
const app = express();
const httpLogger = require('morgan');
const cors = require('cors');
const port = 3000;
const logSlowRequests= require('./middleware/logSlowRequests');
const userRouter = require('./userManagement/userRouter');

app.use(httpLogger('dev'));
app.use(cors()) //see more at https://www.npmjs.com/package/cors
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) //we expect JSON data to be sent as payloads
app.use(logSlowRequests(100));
app.use(userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/data', (req, res) => {
  let { user } = req.body
  console.log('trying to post the following data: ', user)
  res.send('Succes')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});