const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeInputSchema = new Schema({
                employeeName: String,
                motoStation: String,
                bikesAllocated: String,
                bikeTypes: String,
                availableBikes: String,
                petrolLessThan10L: String,
                petrolGreaterThan10L: String,
                petrolGreaterThan20L: String,
                airPressure: String,
                puncturedBikes: String,
                commentToUser: String,
                time: String
});

module.exports = EmployeeInputs = mongoose.model(
  "empInputs",
  employeeInputSchema
);
