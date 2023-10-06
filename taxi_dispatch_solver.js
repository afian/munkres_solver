var munkres = require('munkres-js');

const pairings = [
    ["blue - c1", "blue - c2", "blue - c3"],
    ["purple - c1", "purple - c2", "purple - c3"],
    ["green - c1", "green - c2", "green - c3"]
];

const costMatrix = [
    [843, 1933, 623],
    [1150, 2288, 572],
    [699, 982, 1363]
];

const result = munkres(costMatrix);

console.log(result);

for (let i = 0; i < result.length; i++) {
    const driverIdx = result[i][0];
    const customerIdex = result[i][1];
    console.log(result[i] + " > " + pairings[driverIdx][customerIdex]); 
}
// => [ [ 0, 1 ], [ 1, 0 ], [ 2, 2 ] ]