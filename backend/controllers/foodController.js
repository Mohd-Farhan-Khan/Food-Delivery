import foodModel from "../models/foodModel.js";
import fs from "fs";

// Create a new food item
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save();
        res.status(201).json({ success: true, message: "Food item added successfully", food });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error adding food item", error });
    }
}

export { addFood };