import express from 'express';
import { db } from './config/connection';
import routes from './routes';
import { configDotenv } from 'dotenv';
import { authMiddleware } from './utils/auth';

const PORT = process.env.PORT || 3001;
const app = express();
configDotenv();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(authMiddleware);

db.once('open', () => {
	app.listen(PORT, () => {
		console.log(`API server running on port ${PORT}`);
	});
});
