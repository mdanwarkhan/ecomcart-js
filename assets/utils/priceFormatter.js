const numberFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
})

const priceFormatter = (price, quantity) => {
    const totalPrice = numberFormatter.format(price * quantity)
    return totalPrice
}

export default priceFormatter
