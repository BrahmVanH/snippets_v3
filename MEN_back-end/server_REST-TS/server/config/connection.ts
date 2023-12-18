import mongoose, { Connection } from 'mongoose';

// TODO: Add db endpoint
const connectionString: string = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/';

mongoose.connect(connectionString);

const db: Connection = mongoose.connection;

// Error handling for the database connection
db.on('error', (error) => {
	console.error('MongoDB connection error:', error);
});

db.once('open', () => {
	console.log('Connected to MongoDB database');
});

export { db };
