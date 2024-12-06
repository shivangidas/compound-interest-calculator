import { amountWithInitialDeposit, amountWithContributions, calculateWithoutFormula } from "../app/calculator.js";

describe('compound interest', () => {
    test('amountWithInitialDeposit', () => {
        expect(amountWithInitialDeposit(1000, 0.05, 2, 1)).toBe("1102.50");
        expect(amountWithInitialDeposit(1000, 0.05, 20, 1)).toBe("2653.30");
        expect(amountWithInitialDeposit(1000, 0.05, 20, 12)).toBe("2712.64");
    });

    test('amountWithContributions', () => {
        expect(amountWithContributions(1000, 0.05, 2, 1, 500)).toBe("2127.50");
        expect(amountWithContributions(1000, 0.05, 2, 12, 500)).toBe("13697.90");
        expect(amountWithContributions(1000, 0.05, 20, 12, 500)).toBe("208229.47");
    });
});
describe('compound interest without formula', () => {

    test('calculateWithoutFormula', () => {
        expect(calculateWithoutFormula(1000, 0.05, 2, 1, 500)).toBe("2127.50");
        expect(calculateWithoutFormula(1000, 0.05, 2, 12, 500)).toBe("13697.91");
        expect(calculateWithoutFormula(1000, 0.05, 20, 12, 500)).toBe("208229.62");
    });
});