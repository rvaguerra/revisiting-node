import { User } from "../entities/user.entity";
import { validPassword, hash } from "../utils/encryption";

class UserRepository {
    async signup({ email, password }: { email: string, password: string }): Promise<string> {
        const user = await User.findOne({ email });
        if (user) {
            throw new Error('User exists.');
        }
        const hashed = hash(password);
        const newUser = new User({
            email,
            password: hashed,
        });
        await newUser.save();
        return newUser.id;
    }

    async signin({ email, password }: { email: string, password: string }): Promise<boolean> {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User does not exist.');
        }
        return validPassword(password, user.password);
    }
}

export default new UserRepository();
