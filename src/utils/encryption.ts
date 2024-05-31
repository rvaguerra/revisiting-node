import { pbkdf2Sync, randomBytes } from 'crypto';

const SALT_HASH_SEPARATOR = '+';

const generateHash = (password: string, salt: string): string => {
    return pbkdf2Sync(password, salt, 1000, 32, 'sha512').toString('hex')
}

export const hash = (password: string): string => {
    const salt = randomBytes(32).toString('hex');
    const hash = generateHash(password, salt);
    return `${salt}${SALT_HASH_SEPARATOR}${hash}`;
}

export const validPassword = (password: string, hashed: string): boolean => {
    const [salt, hash] = hashed.split(SALT_HASH_SEPARATOR);
    return hash === generateHash(password, salt);
}
