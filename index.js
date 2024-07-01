function duplicateCount(text) {
    let casedText = text.toLowerCase();
    let charCount = {};


    for (let i = 0; i < casedText.length; i++) {
        let char = casedText[i];
        if (/[a-z0-9]/.test(char)) {
            if (charCount[char]) {
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }
    }

    let countRepeated = 0;
    for (let char in charCount) {
        if (charCount[char] > 1) {
            countRepeated++;
        }
    }
    return countRepeated;
}

console.log(duplicateCount("abcde"))// output:0
console.log(duplicateCount("aabbcde"))// output: 2
console.log(duplicateCount("aabBcde"))// output: 2
console.log(duplicateCount("indivisibility"))// output: 1
console.log(duplicateCount("Indivisibilities"))// output: 2
console.log(duplicateCount("aA11"))// output:2
console.log(duplicateCount("ABBA"))// output :2