import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import foodRouter from './routes/foodRoute.js';

// app config
const app = express();
const port = 4000;

// middleware
app.use(cors());    // backend can be accessed from frontend
app.use(express.json());    // whenever we receive a request, it will parse the JSON

// DB connection
connectDB();

// API Endpoints
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads')); // Serve static files from the uploads directory

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// mongodb+srv://mohdfarhankhan:765498@cluster0.wns01ns.mongodb.net/?