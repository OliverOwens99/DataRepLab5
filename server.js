const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying!')
})
//route for whatever
app.get('/whatever', (req, res) => {
    res.send('Goodbye World!')
    
})
//route with parameter
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send("Hello "+req.params.name);
    
})
//route with api
app.get('/api/books', (req, res) => {
    const data=[{"books":[{"title":"Learn Git in a Month of Lunches","isbn":"1617292419","pageCount":0,"thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg","status":"MEAP","authors":["Rick Umali"],"categories":[]},{"title":"MongoDB in Action, Second Edition","isbn":"1617291609","pageCount":0,"thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg","status":"MEAP","authors":["Kyle Banker","Peter Bakkum","Tim Hawkins","Shaun Verch","Douglas Garrett"],"categories":[]},{"title":"Getting MEAN with Mongo, Express, Angular, and Node","isbn":"1617292036","pageCount":0,"thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg","status":"MEAP","authors":["Simon Holmes"],"categories":[]}]}];
    res.json(data);
    
})
app.get ('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})