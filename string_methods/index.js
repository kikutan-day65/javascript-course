let username = "Haruto Mori"

// get the length of a string
console.log(username.length)

// get the specific letter of a string
console.log(username.charAt(0))

// get the index of the specific letter in a string
console.log(username.indexOf("o"))

// get the LAST index of the specific letter in a string
console.log(username.lastIndexOf("o"))

// get rid of any spaces before and after the string
example = "    Remove tab spaces   "
example = example.trim()
console.log(example)

// convert to uppercase or lowercase
let another_user = "Yazan Ghunaim"
console.log(another_user.toUpperCase())
console.log(another_user.toLowerCase())

// replace the characters
let phone_number = "123-456-7890"
phone_number = phone_number.replaceAll("-", "")
console.log(phone_number)
