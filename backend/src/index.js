const express = require('express');
const helmet = require('helmet');
const app = express();
const PORT = 3000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req,res) => {
    res.status(200).send("It works");
});

app.post('/', (req,res) => {
    res.status(201).send('POST WORKS!!!')
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}...`));