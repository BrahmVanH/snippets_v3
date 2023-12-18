import { User, IUser } from '../models';
import { Request, Response, response } from 'express';
import { signToken } from '../utils/auth';
import { ParameterDeclaration, isTypeParameterDeclaration } from 'typescript';
import { extend } from 'joi';

export interface UserRequest extends Request {
	body: {
		username?: string;
	};
}

export interface ICreateBody {
	username: string;
	firstName: string;
	password: string;
}

export interface IUserCreate {
	body?: ICreateBody;
}

export interface ILoginBody {
	username: string;
	password: string;
}

export interface IUserLogin {
	body?: ILoginBody;
}

export interface IAddSliceBody {
	username: string;
	quantity: number;
}

export interface IAddSlicePar {
	body?: IAddSliceBody;
}

export const getAllUsers = async (req: Request, res: Response) => {
	try {
		const user = await User.find({});
		if (user === null) {
			return res.status(400).json({ message: 'Cannot find user with that username' });
		}
		return res.json(user);
	} catch (err) {
		return res.status(500).json(err);
	}
};

export const getSingleUser = async (req: UserRequest, res: Response) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		if (!user) {
			return res.status(400).json({ message: 'Cannot find user with that username' });
		}

		return res.json(user);
	} catch (err) {
		return res.status(500).json(err);
	}
};

export const createUser = async ({ body }: IUserCreate, res: Response) => {
	try {
		const newUser = {
			username: body?.username,
			firstName: body?.firstName,
			password: body?.password,
			numberOfSlices: 0,
		};
		const existingUser = await User.findOne({ username: body?.username });

		if (!existingUser) {
			const user = await User.create(newUser);
			if (user === null) {
				return res.status(400).json({ message: 'Something went wrong in creating a user' });
			}

			// const token = signToken(user);
			res.json({
				//  token,
				user,
			});
		} else {
			return res.status(403).json({ message: 'Another user already has that username' });
		}
	} catch (err) {
		return res.status(500).json(err);
	}
};

export const loginUser = async ({ body }: IUserLogin, res: Response) => {
	try {
		const user = await User.findOne({ username: body?.username });
		if (user === null) {
			return res.status(400).json({ message: 'Incorrect username' });
		}

		const isCorrectPassword: boolean = await user.isCorrectPassword(body?.password);
		if (!isCorrectPassword) {
			return res.status(400).json({ message: 'Incorrect Password' });
		}

		// const token = signToken(user);
		res.json({
			// token,
			user,
		});
	} catch (err) {
		return res.status(500).json(err);
	}
};

export const deleteUser = async ({ body }: IUserLogin, res: Response) => {
	try {
		const user = await User.findOne({ username: body?.username });
		if (user === null) {
			return res.status(400).json({ message: 'Incorrect username' });
		}

		const isCorrectPassword: boolean = await user.isCorrectPassword(body?.password);
		if (!isCorrectPassword) {
			return res.status(400).json({ message: 'Incorrect Password' });
		}
		const deletedUser = await User.findOneAndDelete({ username: body?.username });

		res.json({
			deletedUser,
		});
	} catch (err) {
		return res.status(500).json(err);
	}
};

export const addSlices = async ({ body }: IAddSlicePar, res: Response) => {
	try {
		const user = await User.findOne({ username: body?.username });
		let updatedSlicesAmount: number;
		if (user && body) {
			const updatedUser = await User.findOneAndUpdate({ username: body?.username }, { slices: { quantity: body?.quantity, data: new Date() } });
			if (updatedUser) {
			}
			if (!updatedUser) {
				return res.status(400).json({ message: 'Something went really wrong in updating user slice amount' });
			}
			res.json(updatedUser);
		} else {
			return res.status(400).json({ message: 'Incorrect username.. which is weird because the user needs to be already logged in to use this feature. Super weird.' });
		}
	} catch (err) {
		return res.status(400).json(err);
	}
};
