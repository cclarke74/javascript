let isInternetEnabled = true
let isGPsEnabled = true
// Camel Case
let is_internet_enabled = true
// Snake Case

console.log("Can I Navigate using Google Maps: " + (isInternetEnabled && isGPsEnabled))

let ewallet = 0
let isCreditCardLinked = false

console.log("Can I Book a Cab: " + (ewallet>0 || isCreditCardLinked))

// String Concatenation
console.log("Is Internet not Enaabled" + !isInternetEnabled)
// String Interpolation - Use backticks ``
console.log(`Is Internet not Enabled" + ${!isInternetEnabled}`)