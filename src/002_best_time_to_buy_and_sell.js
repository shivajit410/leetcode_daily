// Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description

var maxProfit = (prices) => {
    let profit = 0;
    let buyPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (buyPrice > prices[i]) {
            buyPrice = prices[i]
        }
        profit = Math.max(profit, prices[i] - buyPrice);
    }

    return profit;
}

// TestCase
let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices))