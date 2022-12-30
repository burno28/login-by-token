const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();
const port = 3000;

app.use(cookieParser())
app.use(express.json())

const users = [
    {id: "qwerty"},
    {id: "asdfgh"},
    {id: "zxcvbn"}
]

app.get('/users', (req, res) => {
    const userId = req.cookies.userid
    const user = users.find(user => user.id === userId)
    // console.log(userId)
    res.send(user)
})

app.post('/login', (req, res) => {
    res.send('login 페이지 입니다')
})

app.post('/logout', (req, res) => {
    res.send('logout 페이지 입니다')
})

app.post('/register', (req, res) => {
    res.send('register 페이지 입니다')
})

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});