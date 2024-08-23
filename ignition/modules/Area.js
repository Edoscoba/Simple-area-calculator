const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("AreaCalculatorModule", (m) => {

  const area = m.contract("AreaCalculator", []);

  return { area };
});
