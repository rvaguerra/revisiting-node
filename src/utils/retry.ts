import { wait } from "./wait";

export const retry = async (action: () => Promise<void>, retries: number = 3, delay: number = 1000): Promise<void> => {
    try {
        await action();
    } catch (error) {
        if (retries === 0) {
            throw error;
        }

        await wait(delay);
        await retry(action, retries - 1, delay);
    }
};
