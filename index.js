const express = require("express");
const app = express();

app.get('/add', (req, res) => {
    const numbers = req.query.numbers;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    res.send({sum: sum});
});


app.get("/product", (req, res) => {
    const numbers = req.query.numbers;
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
    }
    res.send({product: product});
});

app.get("/evens", (req, res) => {
    const numbers = req.query.numbers;
    const evens = numbers.filter(n => n % 2 === 0);
    res.send({evens: evens});
});

app.get("/min", (req, res) => {
    const numbers = req.query.numbers;
    const min = Math.min(...numbers);
    res.send({min: min});
});

app.get("/max", (req, res) => {
    const numbers = req.query.numbers;
    const max = Math.max(...numbers);
    res.send({max: max});
});

app.get("/sort", (req, res) => {
    const numbers = req.query.numbers;
    const ascending = req.query.ascending;
    let sorted;
    if (ascending) {
    sorted = numbers.sort((a, b) => a - b);
    } else {
    sorted = numbers.sort((a, b) => b - a);
    }
    res.send({sorted: sorted});
});

app.get("/target", (req, res) => {
    const numbers = req.query.numbers;
    const target = req.query.target;
    let hasTwoSum = false;
    for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
        hasTwoSum = true;
        break;
        }
    }
    }
    res.send({hasTwoSum: hasTwoSum});
});

app.listen(3000, () => {
    console.log("Hey its working");
});
