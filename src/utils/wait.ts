export const wait = async (delay: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
};
