// find a substring inside a string

/*
this algorithm moves through each character of the array

the algorithm uses a start pointer. this starts at the first character in the main string

if the character in the main string matches the first character in the substring it moves on and the loop 
checks the second character in the string with the second character in the substring

if it does not match, then it moves the start pointer up by one

this loop continues until the start pointer reaches the end of the original stirng.


the algorithm returns the index in the main string where the substring starts, if the substirng is not present
it returns -1.

the algorithm uses a found counter to track the number of characters that have ben found
*/

const naiveStringSearch = (stringToSearch, subString) => {
    let start = 0
    let index = -1
    //let count = 0
    let found = 0


    while(start < stringToSearch.length && found < (subString.length)) {
        let valInSearch = stringToSearch[start]
        let valInSubString = subString[found]

        if (valInSearch === valInSubString) {
            if (found === 0) {
                index = start
            }
            start++
            found++
        } else {
            start++
            found = 0
        }
    }

    if (found === subString.length) return index
    return -1
}

const result = naiveStringSearch("Hello my name is John David Jones", "Jones")
console.log(result)

// Hi my name is Dave
// my