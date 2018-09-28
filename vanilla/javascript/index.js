console.log('hello');

function f(x, y, ...z) {
    return [x, y, z]
}

console.log(f('a','b','c'));

const selectEntries = function selectEntries (start, end) {
    var entry = {
        start: start,
        end: end
    };

    return entry;
}

const input = selectEntries(1 , 2);

console.log('start value: ' + input);
console.log('end value: ' +input.entry.end)
