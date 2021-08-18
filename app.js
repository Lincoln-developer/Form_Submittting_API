import express from 'express';

const app = express();

import bodyparser from "body-parser";

app.use(bodyparser.urlencoded({extended:false}))

app.use(bodyparser.json())


import initiatingMongoServer from './config/databse.js';

initiatingMongoServer();

app.use((req,res) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Created-With, Content-Type, Accept, Authorization')

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH.DELETE,GET');
        res.status(200).json({});
    }
})

import signup_route from "./app_routes/user_signup_route.js";

import login_route from "./app_routes/user-login-route.js"

app.use('/signup',signup_route);

app.use('/login',login_route);


app.listen(1333, () => {
    console.log(`Server started on port 1333`)
});
