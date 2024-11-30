export function setValue(value) {
    return (Number(value) * 1.8).toFixed(2)
}

export function setTax(amount) {
    let taxes =
    {
        amount: amount,
        shipping: (amount * 0.07).toFixed(2),
        tax: (amount * 0.25).toFixed(2),
        total: 0
    }
    let resume = Number(taxes.amount) + Number(taxes.tax) + Number(taxes.shipping )
    taxes.total = resume
    
    return taxes
}