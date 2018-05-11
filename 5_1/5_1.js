console.log('------------------1------------------');
var string = 'Hi there dude';
function last(string) {
    return string.slice(-1);
}
console.log(last(string));


console.log('------------------2------------------');
function withoutLast(string) {
    return string.slice(0, -1);;
}
console.log(withoutLast(string));


console.log('------------------3------------------');
function reverseString(string) {
    return string.split('').reverse().join(''); 
}
console.log(reverseString(string));
console.log('\u202E' + string);

console.log('------------------4------------------');
stringWithSpace = '                Hi  ,      there     .         Dude :                            ok   !    '
function withoutSpaces(stringWithSpace) {
    var newString = '';
    newString = stringWithSpace.trim().replace(/\s+/g, ' ').replace(/ ,\s/g,', ').replace(/ !/g,'! ').replace(/ : /g,': ').replace(/ .\s+/g,'. ');
    return newString;
}
console.log(withoutSpaces(stringWithSpace));