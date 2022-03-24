/**
 * 
 * @param {String} str 
 */

 function validParentheses(str){
    let opening = /\(|\{|\[/;
    const closing = /\]|\}|\)/;
  
    if (str.length % 2 != 0) return false;
    else if (str.charAt(0).match(closing)) return false;  
    else if (str.charAt(str.length-1).match(opening)) return false;  
    
    let counter = 0;
    let parentheses = 0;
    let squareBrackets = 0;
    let curlyBraces = 0;
  
    for(let i = 0; i < str.length; i++){
      switch(str[i]){
        case "(":
          counter ++;
          parentheses = i;
          break;
        case "{":
          counter ++;
          curlyBraces = i;
          break;
        case "[":
          counter ++;
          squareBrackets = i;
          break;
        case ")":
          counter --;
          parentheses = i;
          break;
        case "]":
          counter ++;
          parentheses = i;
          break;
        case "}":
          counter ++;
          parentheses = i;
          break;
        default:
          break;
      }
    
      
    }
    return true;
  }
  
  console.log(validParentheses("{{{{"));