const events = require("events");
const eventEmitter = new events();
const {
    add,
    sub,
    mul,
    div,
  } = require('./operation.js')

eventEmitter.on("add", (a,b) => add(a,b));
eventEmitter.on("sub", (a,b) => sub(a,b));
eventEmitter.on("multi", (a,b) => mul(a,b));
eventEmitter.on("divide", (a,b) => div(a,b));

module.exports = {
  eventEmitter
};
// ...