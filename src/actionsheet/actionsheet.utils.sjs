    var join = function(a,b) {
        return a+b
    };
    var isNotSlot = function(v) {
        return typeof v !== 'string'
    }
    module.exports = {
        join: join,
        isNotSlot: isNotSlot
    }