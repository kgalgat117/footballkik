const dependable = require('dependable');
const path = require('path');

const container = dependable.container();

const simpledependencies = [
    ['_', 'lodash'],
    ['mongoose', 'mongoose']
];

simpledependencies.forEach(function(val){
    container.register(val[0], function(){
        return require(val[1]);
    })
});

container.load(path.join(__dirname, '/controllers'));
container.load(path.join(__dirname, '/helpers'));

container.register('container', function(){
    return container;
});

module.exports = container;