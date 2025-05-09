function convertToBinary() {
    const input = document.getElementById('decimalInput')
    const result = document.getElementById('binaryResult')
    let value = input.value
    let binaryNumber = ''

    if (!/^\d+$/.test(value)) {
        result.innerText = ''
        return
    }

    let number = parseInt(value)

    while (number > 0) {
        binaryNumber = (number % 2) + binaryNumber
        number = Math.floor(number / 2)
    }
    result.innerText = binaryNumber
}
