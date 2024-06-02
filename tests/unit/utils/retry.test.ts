import { retry } from "../../../src/utils/retry";

describe('Retry', () => {
    beforeAll(() => {
        jest.useFakeTimers();
        jest.runAllTimersAsync();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('should only be called once if successful', async () => {
        // Arrange
        const action = jest.fn().mockImplementation();

        jest.spyOn(global, 'setTimeout');

        // Act
        await retry(action);

        // Assert
        expect(action).toHaveBeenCalledTimes(1);
        expect(setTimeout).not.toHaveBeenCalled();

    });

    it('is called once plus number of retries if failed', async () => {
        // Arrange
        const action = jest.fn().mockImplementation(() => { throw new Error('Failed') });
        const retries = 3;

        jest.spyOn(global, 'setTimeout');

        // Act
        await expect(async () => await retry(action, retries, 0)).rejects.toThrow();

        // Assert
        const expectedCalls = 1 + retries; // original + retries
        expect(action).toHaveBeenCalledTimes(expectedCalls);
        expect(setTimeout).toHaveBeenCalledTimes(retries);
    });
});
