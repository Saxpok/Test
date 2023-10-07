let getString = (data) => {
typeof(data) === "string" ? console.log("+") : console.log("-")
}
let getData = (arg) => {
    let i;
    arg ? i = 'some cool string' : i = 12345
    return i
}
