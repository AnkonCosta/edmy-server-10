const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

const topics = require('./data/topics.json');
const courses = require('./data/courses.json');



app.get('/courses', (req, res) => {
    res.send(courses);
})









app.get('/', (req, res) => {
    res.send('Assignment Ten Server in running online.')
})








app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
})