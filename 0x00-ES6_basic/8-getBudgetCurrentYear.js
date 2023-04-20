/*
 * Function to demonstrate ES6 Computed Property names
 * @return {array} object showing budget details
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {

  const budget = {
	  [`income-${getCurrentYear()}`]: income,
	  [`gdp-${getCurrentYear()}`]: gdp,
	  [`capita-${getCurrentYear()}`]: capita
  };

  return budget
}
