//votre code ici
function pairNumbers(min, max) {
    const nbPair = []
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            nbPair.push(i)
        }
    }
    return nbPair.join(',')
}
export default pairNumbers
