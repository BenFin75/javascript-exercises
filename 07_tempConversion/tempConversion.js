const ftoc = function(temp) {
  let ctemp = ((temp - 32) * (5/9)).toFixed(1);
  return parseFloat(ctemp);
};

const ctof = function(temp) {
  let ftemp = ((temp * (9/5)) +32).toFixed(1);
  return parseFloat(ftemp);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
