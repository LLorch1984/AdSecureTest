const highestOccurrence = function (array) {
    const topResult = []
    const maxResult = []
    const amount = array.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1
        return acc
    }, {})
    for (property in amount) {
        if (maxResult[0] === undefined) {
            topResult[0] = amount[property]
            if (typeof parseInt(property) === 'number' && isNaN(parseInt(property))) {
                maxResult[0] = property
            } else {
                maxResult[0] = parseInt(property)
            }
        } else if (amount[property] === topResult[0]) {
            if (typeof parseInt(property) === 'number' && isNaN(parseInt(property))) {
                maxResult[maxResult.length] = property
            } else {
                maxResult[maxResult.length] = parseInt(property)
            }

        } else if (amount[property] > topResult[0]) {
            maxResult.length = 0
            topResult[0] = amount[property]
            if (typeof parseInt(property) === 'number' && isNaN(parseInt(property))) {
                maxResult[0] = property
            } else {
                maxResult[0] = parseInt(property)
            }
        }
    }

    return maxResult
}


const maxSubarraySum = function (array, repeats) {
    debugger
    if (array.length === 0) return null
    let currentValue = 0
    let maxValue = 0
    const operations = array.length - repeats
    let counter = 0
    while (counter <= operations) {

        for (i = counter; i < repeats + counter; i++) {
            currentValue += array[i]
        }
        if (currentValue > maxValue) maxValue = currentValue
        counter++
        currentValue = 0
    }
    return maxValue
}

const averagePair = function (array, targetAverage) {
    const divider = 2
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                if ((array[i] + array[j]) / divider === targetAverage) {
                    return true
                }
            }
        }
    }
    return false
}


