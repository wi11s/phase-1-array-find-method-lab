function superbowlWin(array) {
    let winValue = array.find((element) => element.result === 'W')
    if (winValue !== undefined) {
        return winValue.year
    } else {
        return undefined
    }
    
}

