const getPowNumbers = (array) => {
    if (array.length == 0) return 'Empty array'
    return array.map(item => Math.pow(item, 2)).sort((a, b) => a - b)
}

console.log('Case 1: ', getPowNumbers([1, 2, 3, 5, 6, 8, 9]))
console.log('Case 2: ', getPowNumbers([-2, -1]))
console.log('Case 3: ', getPowNumbers([-10, -5, 0, 5, 10]))