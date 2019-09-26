const MORSE_TABLE = {
    '.-':     'a','-...':   'b','-.-.':   'c','-..':    'd','.':      'e','..-.':   'f','--.':    'g','....':   'h','..':     'i',
    '.---':   'j','-.-':    'k','.-..':   'l','--':     'm','-.':     'n','---':    'o','.--.':   'p','--.-':   'q','.-.':    'r',
    '...':    's','-':      't','..-':    'u','...-':   'v','.--':    'w','-..-':   'x','-.--':   'y','--..':   'z','.----':  '1',
    '..---':  '2','...--':  '3','....-':  '4','.....':  '5','-....':  '6','--...':  '7','---..':  '8','----.':  '9','-----':  '0',
};

function decode(expr) {
    function decodeBin(value){
        let result='';
        
        let divisorBin=2;
        let nextChunkBin;
        while(value.length > 0) {
            nextChunkBin = value.substring(0,divisorBin);
            switch (nextChunkBin) {
                case "00":result+="";
                break;
                case "10":result+=".";
                break;
                case "11":result+="-";
                break;
            }
            value = value.substring(divisorBin,value.length);
        } 
        
    return result;
    }
    
    let result='';
    let divisor=10;
    let nextChunk;
    while(expr.length > 0) {
        nextChunk = expr.substring(0,divisor);
        result+=nextChunk!='**********'?MORSE_TABLE[decodeBin(nextChunk)]:' ';
        expr = expr.substring(divisor,expr.length);
    } 
    
return result
    /*expr
           .trim()
           .split('   ')
           .map(function(element){
            return element.length>0?element.split(' ')
           .map(value=>MORSE_TABLE[value]).join(''):element;})
           .join(' ');*/
}

module.exports = {
    decode
}
