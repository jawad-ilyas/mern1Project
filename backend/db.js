const mongoose = require('mongoose')
const mongoDBURI = "mongodb+srv://mughaljawad12:mt7VgRHjQm0LIeUJ@cluster0.v0vnbsm.mongodb.net/mernproject1?retryWrites=true&w=majority"
// const mongoDBURI = "mongodb://mughaljawad12:mt7VgRHjQm0LIeUJ@ac-jkyuh7s-shard-00-00.v0vnbsm.mongodb.net:27017,ac-jkyuh7s-shard-00-01.v0vnbsm.mongodb.net:27017,ac-jkyuh7s-shard-00-02.v0vnbsm.mongodb.net:27017/?ssl=true&replicaSet=atlas-duoctk-shard-0&authSource=admin&retryWrites=true&w=majority"
const mongoDb = async () => {
    try {
        await mongoose.connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true });
        const food_items = mongoose.connection.db.collection("food_items")
        const foodCategory = mongoose.connection.db.collection("foodCategory")
        // Use Promises to wait for the data retrieval
        const food_itemsData = await food_items.find({}).toArray();
        const foodCategoryData = await foodCategory.find({}).toArray();

        // console.log(food_itemsData);
        // console.log(foodCategoryData);

        // Assign the data to a global variable if needed
        global.foodCategoryData = foodCategoryData
        global.food_itemsData = food_itemsData
        console.log("db is connected");
    } catch (error) {
        console.log(error)
    }
}

module.exports = mongoDb