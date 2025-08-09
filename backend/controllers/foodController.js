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

// All food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.status(200).json({ success: true, data: foods });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching food items", error });
    }
}

// Remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) {
                console.error("Error removing image file:", err);
            }
        });
        await foodModel.findByIdAndDelete(req.body.id);
        res.status(200).json({ success: true, message: "Food item removed successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error removing food item", error });
    }
};

export { addFood, listFood, removeFood };