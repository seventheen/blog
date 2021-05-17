const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb+srv://zhaomin:zhaomin@cluster0.dsq0w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
client.connect(err => {
    const collection = client.db('test').collection('devices')
    client.close()
})

module.exports = {
    port: 80
}
