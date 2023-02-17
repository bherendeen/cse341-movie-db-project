// Core mods
// Addon mods
const mongoose = require('mongoose');
// Custom mods

mongoose.set('strictQuery', false);

// -------------------- //
// S T A R T    C O D E //

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`// >> MongoDB Connected: ${connect.connection.host}`);

    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

// -------------------- //
// E N D   //   C O D E //

// Export
module.exports = connectDB;