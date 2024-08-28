import util from "node:util"

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

var date = new Date();

var o = {
    x: 1, y: 2, date,
    list: [
        { id: 1, name: "alaa 1", on: date.addDays(3) },
        { id: 2, name: "alaa 2", on: date.addDays(5) },
        { id: 3, name: "alaa 3", on: date.addDays(-1) },
        { id: 4, name: "alaa 4", on: date.addDays(0) },
    ]
}

console.log(util.inspect(o, { colors: true, depth: Infinity }));