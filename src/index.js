
import { app } from "./app.js";
import connectDB from "./db/index.js";
import { configDotenv } from "dotenv";
configDotenv();


connectDB()
.then(() => {
    const port = process.env.PORT || 3000;
    
    app.listen(port, "0.0.0.0", () => 
        {console.log(`Server running on port ${port}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection FAILED" , err);   
})