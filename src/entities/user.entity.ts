export interface User {
    _id: string;
    email: string;
    password: string;
}

export type PartialUser = Pick<User, 'email' | 'password'>;
