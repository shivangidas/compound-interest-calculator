/*
* principal: initial deposit
* rate: rate of interest
* time: number of years 
* n: number of times per year interest compounds (1-yearly, 12-monthly)
* periodic_principal: regular amount deposited after the initial principal
*/
export function simpleInterestAmount(principal: number, rate: number, time: number) {
    return (principal * (1 + rate * time)).toFixed(2);
}
export function amountWithInitialDeposit(principal: number, rate: number, time: number, n: number) {
    return (principal * ((1 + rate / n) ** (n * time))).toFixed(2);
}

export function amountWithContributions(principal: number, rate: number, time: number, n: number, periodic_principal: number) {
    const amount = Number(amountWithInitialDeposit(principal, rate, time, n))
    return (amount + ((periodic_principal * (((1 + (rate / n)) ** (time * n)) - 1)) / (rate / n))).toFixed(2);
}

export function calculateWithoutFormula(principal: number, rate: number, time: number, n: number, periodic_principal: number) {

    let amount = Number(simpleInterestAmount(principal, rate, 1 / n));
    for (let i = 2; i <= (time * n); i++) {
        let newPrincipal = amount + periodic_principal;
        amount = Number(simpleInterestAmount(newPrincipal, rate, 1 / n));
    }
    return (amount + periodic_principal).toFixed(2);
}