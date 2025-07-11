
import connectDB from "./db/index.js";
import { configDotenv } from "dotenv";
configDotenv();


connectDB()
.then(() => {
    const port = process.env.PORT || 8000;
    
    app.listen(port, () => 
        {console.log(`Server running on port ${port} 🔥`);
    })
})
.catch((err) => {
    console.log("MongoDB connection FAILED" , err);   
})