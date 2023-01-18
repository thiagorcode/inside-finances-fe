export const validateMoney = (valueMoney?: string) => {
  if (!valueMoney) return false;
  const regex = /^[0-9]+(,[0-9]{1,2})?$/;
  const isValid = regex.test(valueMoney);

  return isValid;
};
