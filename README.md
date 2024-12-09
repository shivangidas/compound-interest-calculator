# Compound Interest calculator

## The fascinating maths behind compound interest

Exploring the magical compound interest and testing out how well the mathematical formulas hold.

### Simple interest

$I = P * r * t$

$A = P * (1 + r * t)$

    I - interest
    A - final amount
    P - initial principal
    r - rate of interest
    t - number of years

### Compound interest

$$A = P * ({1+ {r \over n}} )^ {n * t}$$

    n - number of times per year interest compounds (1-yearly, 12-monthly)

### Compound interest with regular deposits

I wrote a function `calculateWithoutFormula` where I use the simple interest and add it iteratively to the new principal to find the final amount.

I used the following formula to verify my results.

$$A = P * ({1+ {r \over n}} )^ {n * t} + {PMT * (({1 + {r \over n}}) ^ {n * t} - 1) \over {r \over n}} $$

    PMT - regular monthly deposits

## Limitations

1. The rate of interest is yearly.
2. The regular deposits are monthly.
3. The regular deposits are at the end of the month rather than the beginning.

## References

- [Online calculators](https://www.thecalculatorsite.com/finance/calculators/compoundinterestcalculator.php)
- [This reddit post](https://www.reddit.com/r/personalfinance/comments/12t92ap/calculating_compound_interest_plus_monthly/)

## Instructions to run locally

Test

```bash
npm run test
```

Build

```bash
npm run build
```
