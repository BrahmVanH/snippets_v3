import { Schema, Document, Model, model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface ISliceHistory extends Document {
	quantity: number;
	date: Date;
}
export interface IUser extends Document {
	username: string;
	firstName: string;
	password: string;
	slices: ISliceHistory;
	isCorrectPassword: Function;
}

const pizzaHistorySchema = new Schema<ISliceHistory>(
	{
		quantity: {
			type: Number,
		},
		date: {
			type: Date
		}
	}
)

const userSchema = new Schema<IUser>(
	{
		username: {
			type: String,
			required: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		slices: [pizzaHistorySchema],

	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

userSchema.pre('save', async function(next: Function) {
	if (this.isNew || this.isModified('password')) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}
	next();
});

userSchema.methods.isCorrectPassword = async function(password: string) {
	if (this !== undefined) {
		return bcrypt.compare(password, this.password);
	}
};



export const User: Model<IUser> = model('User', userSchema);
