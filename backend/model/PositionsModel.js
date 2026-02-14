const mongoose = require("mongoose");
const PositionSchema = require("../schemas/PositionsSchema");

const PositionModel = mongoose.model("Position", PositionSchema);

module.exports = PositionModel;
