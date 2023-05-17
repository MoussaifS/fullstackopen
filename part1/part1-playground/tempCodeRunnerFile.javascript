var mergeAlternately = function(word1, word2) {
    let maxLength = word1.length +  word2.length;
    let str ="";
    for(let i =0; i<maxLength; i++){
         str += (word1[i]||'') + (word2[i]||'');    
    }
    return str.split('q');
        
        
    }  
console.log(mergeAlternately("abcww", "pqr"), '||| a p b q c r')
