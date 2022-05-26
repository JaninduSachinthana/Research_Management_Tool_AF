const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended : true  
}));
app.use(cors());

Port = process.env.PORT;
Url = process.env.URL;

mongoose.connect(Url, () => {
    useNewUrlParser = true,
    useUnifiedTopology = true
});

const connected = mongoose.connection;
connected.once("open", () => {
    console.log("Mongo DB Connected..");
});

app.listen(Port, () => {
    console.log("Port No : " + Port);
});

const GroupRoute = require('./routes/group_route');
app.use('/group',GroupRoute);

const StudentRoute = require('./routes/student_route');
app.use('/student',StudentRoute);

const Research = require('./routes/Research');
app.use('/research',Research);

const TopicReg = require('./routes/topicreg');
app.use('/topicreg',TopicReg);

const TopicAccept = require('./routes/topic');
app.use('/topicacc',TopicAccept);

const Assignment = require('./routes/assignment');
app.use('/assignment',Assignment);

const Register = require('./routes/User_management');
app.use('/register',Register);

const  login = require('./routes/login_management');
app.use('/login', login);