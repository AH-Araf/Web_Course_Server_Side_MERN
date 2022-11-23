const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const courseAPI = require('./data/courseapi.json');
app.get('/', (req, res)=>{
    res.send('Course API Running');
});

app.get('/course-api', (req, res) => {
    res.send(courseAPI)
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseAPI.find(n => n.id === id);
    res.send(selectedCourse)
});

app.listen(port, () => {
    console.log('Course Server Running on port', port)
});