//api.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/gallery', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/uploads', express.static('uploads'));

// Define Image Schema
const imageSchema = new mongoose.Schema({
    title: String,
    imagePath: String,
});

const Image = mongoose.model('Image', imageSchema);

// Set up multer for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });

// Routes
app.post('/upload', upload.single('image'), async (req, res) => {
    const newImage = new Image({
        title: req.body.title,
        imagePath: req.file.path.replace(/\\/g, '/'),  
    });    
    await newImage.save();
    res.status(201).send(newImage);
});

app.get('/images', async (req, res) => {
    const images = await Image.find();
    res.send(images);
});

app.delete('/images/:id', async (req, res) => {
    await Image.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
