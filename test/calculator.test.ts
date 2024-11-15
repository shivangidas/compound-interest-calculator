import { amountWithInitialDeposit, amountWithContributions } from "../app/calculator.js";

describe('compound interest', () => {
    test('amountWithInitialDeposit', () => {
        expect(amountWithInitialDeposit(1000, 0.05, 2, 1)).toBe(1102.5);
        expect(amountWithInitialDeposit(1000, 0.05, 20, 1)).toBe(2653.2977051444223);
        expect(amountWithInitialDeposit(1000, 0.05, 20, 12)).toBe(2712.6402854819885);
    });

    test('amountWithContributions', () => {
        expect(amountWithContributions(1000, 0.05, 2, 1, 500)).toBe(2127.5);
        expect(amountWithContributions(1000, 0.05, 2, 12, 500)).toBe(13697.901602557551);
        expect(amountWithContributions(1000, 0.05, 20, 12, 500)).toBe(208229.47454332063);
    });
})
