import { NextFunction, Request, Response } from "express";
import usersRepository from '../repositories/users';

class UsersController {
    async signup(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            const id = await usersRepository.signup({ email, password });
            return res.json({ id });
        } catch (error) {
            next(error);
        }
    }

    async signin(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            const result = await usersRepository.signin({ email, password });
            if (!result) {
                throw new Error('Failed to authenticate.');
            }
            return res.json({ message: 'Ok!' });
        } catch (error) {
            next(error);
        }
    }
}

export default UsersController;
