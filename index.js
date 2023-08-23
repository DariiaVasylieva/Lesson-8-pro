function generateKey(length, characters) {
   let key = '';

    for (i = 0; i < length; i++) {
       key += characters[Math.round(Math.random() * (characters.length - 0 + 1) + 0)];
        
    }
    return key;
}

const string = 'abcdefghijklmnopqrstuvwxyz1234567890';

console.log(generateKey(9, string));