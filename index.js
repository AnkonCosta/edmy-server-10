const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

const topics = require('./data/topics.json');
const courses = require('./data/courses.json');



app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/topics', (req, res) => {
    res.send(topics)
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(c => c._id == id)
    res.send(selectedCourse)
});

app.get('/topics/:id', (req, res) => {
    const id = req.params.id;
    const courseTopics = courses.filter(c => c.topics_id == id);
    res.send(courseTopics)
})









app.get('/', (req, res) => {
    res.send('Assignment Ten Server in running online.')
})








app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
})