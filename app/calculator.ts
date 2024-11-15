/*
* principal: initial deposit
* rate: rate of interest
* time: number of years 
* n: number of times per year interest compounds (1-yearly, 12-monthly)
* periodic_principal: regular amount deposited after the initial principal
*/

export function amountWithInitialDeposit(principal: number, rate: number, time: number, n: number) {
    return principal * ((1 + rate / n) ** (n * time));
}

export function amountWithContributions(principal: number, rate: number, time: number, n: number, periodic_principal: number) {
    const amount = amountWithInitialDeposit(principal, rate, time, n)
    return amount + ((periodic_principal * (((1 + (rate / n)) ** (time * n)) - 1)) / (rate / n))
}
