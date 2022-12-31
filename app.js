const express = require('express');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MemoryStore = require('memorystore')(session)

const app = express();
const port = 3000;

app.use(cookieParser())
app.use(express.json())

// const users = [
//     {id: "qwerty"},
//     {id: "asdfgh"},
//     {id: "zxcvbn"}
// ]

//저장소
// const sessions = []

const sessionObj = {
    secret: 'node',
    resave: false,
    saveUninitialized: true,
    store: new MemoryStore(),
};
app.use(session(sessionObj))

const users = [
    { id: "bongjin" },
    { id: "jinbong" },
    { id: "chobong" }
]

app.get('/users', (req, res) => {
    const userId = req.session.userid
    //     const userId = req.cookies.userid
    const user = users.find(user => user.id === userId)
    //     const ssid = "asdfasdfasdfadf"
    //     sessions.push({
    //         ...user,
    //         ssid
    //     })
    //     res.cookie("ssid", ssid)
    //     console.log(session)
    //     // console.log(userId)
    res.send(user)
    // 
})

app.post('/login', (req, res) => {
    const userId = req.body.userid
    const user = users.find(user => user.id === userId)

    req.session.userid = user.id
    res.send(user.id)
    // res.send('login 페이지 입니다')
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