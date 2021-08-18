import Mongoose from 'mongoose';

const mongoServer = () => {
    try{
        //connecting to the database
        Mongoose.connect(process.env.databse_url,
            {
                useNewUrlParser:true
            }
            )
            console.log("Database connected successfully")
    }
    catch(err){
        if(err){
            console.log("Error connecting to database")
        }
    }
}

export default mongoServer;