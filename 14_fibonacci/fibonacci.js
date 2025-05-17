const fibonacci = function(num) {
    if (typeof num !== 'number') {
        num = parseInt(num)
    }
    if (num < 0) return "OOPS";
    if (num == 0) return 0;
    
    
    
    
    let sequence = [0, 1]
    let previousPrevious = 0
    let previous = 1;
    let current
    for (i = 1; i < 100; i++) {
        current = previousPrevious + previous
        sequence.push(current);
        console.log(current)
        previousPrevious = previous;
        previous = current;
        
    }
    return sequence[num];
};

fibonacci(10);

// Do not edit below this line
module.exports = fibonacci;
