const express = require('express');
const app = express();
const port = 5000;









app.get('/', (req, res) => {
    res.send('Assignment Ten Server in running online.')
})








app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
})