//REVERSE A STRING

const string = 'My name is ashwani';

function reverse(str){
    if(!str && str.length<2 || typeof str !=='string'){
        return 'hmm thats not good';
    }

    var reverseString = '';
    for(let i=str.length-1; i>=0; i--){
        reverseString+=str[i];
    }
    console.log(reverseString);
    
}

reverse(string);