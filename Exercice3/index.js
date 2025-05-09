// Créez votre fonction ici
function calculateAverage(array) {
    if (Array.isArray(array)) {
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
        }
        let average = sum / array.length
        return average
    } else {
        return 'No numbers to calculate average'
    }
}
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
