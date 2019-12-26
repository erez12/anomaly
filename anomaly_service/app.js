const express = require('express')
const bodyParser = require('body-parser');
const values = new (require('../index'))({
	returnType: 1
});

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.end('Hello');
})
app.post('/post-test', (req, res) => {
    if (typeof req.body.value !== "undefined"){
        let anomaly = values.pushMeta(req.body.value);
        console.log(`mean: ${anomaly.mean} stddev: ${anomaly.stddev} trend: ${anomaly.trend} value: ${req.body.value} anomaly: ${anomaly.anomaly}`);
    }

    res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))