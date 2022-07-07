const getOperationTotalPrice = (operation) => {
  const { price, qnt } = operation;
  return price * qnt;
};

const getOperationRevenue = (operations) => {
  return operations.reduce((acc, operation) => {
    return operation.type === 'BUY'
      ? acc - getOperationTotalPrice(operation)
      : acc + getOperationTotalPrice(operation);
  }, 0);
};

const main = (operations) => {
  return {
    absProfit: getOperationRevenue(operations),
    portfolio: {
      AFKS: getOperationRevenue(
        operations.filter((operation) => operation.ticker === 'AFKS')
      ),
      GAZP: getOperationRevenue(
        operations.filter((operation) => operation.ticker === 'GAZP')
      ),
      SBER: getOperationRevenue(
        operations.filter((operation) => operation.ticker === 'SBER')
      ),
    },
  };
};

module.exports = main;
