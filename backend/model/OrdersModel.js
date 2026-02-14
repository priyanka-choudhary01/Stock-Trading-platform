const {model} = require("mongoose");

const {OrderSchema} = require("../schemas/OrdersSchema");

const OrderModel = new model("Order" , OrderSchema);

module.exports = {OrderModel};