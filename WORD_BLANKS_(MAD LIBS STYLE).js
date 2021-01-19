function wordBlanks (myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " into my school " + myAdverb;

    return result;
}

console.log(wordBlanks("alien", "beautiful", "ran", "slowly"));