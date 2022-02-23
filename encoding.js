const encoding = (string) => {
    if (!string) return 'Empty string'
    let encodeString = ''
    const maxLength = 9
    const letters = string.split("")
    const uniques = [...new Set(letters)]
    for (const key of uniques) {
        const quantity = letters.filter(item => item === key).length
        if (quantity > maxLength) {
            let counter = quantity
            while (counter > 0) {
                if (counter >= maxLength) encodeString += `${maxLength}${key}`
                else encodeString += `${counter}${key}`

                counter = counter - maxLength
            }
        } else {
            encodeString += `${quantity}${key}`
        }
    }

    return encodeString
}

console.log('Case 1: ', encoding("AAAAAAAAAAAAABBCCCCDD"))
console.log('Case 2: ', encoding("aA"))
console.log('Case 3: ', encoding("122333"))
