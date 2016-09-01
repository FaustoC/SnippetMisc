var index1 = 0;
var index2 = 0;
document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    var cheat1 = "iddqd";
    var cheat2 = "idkfa";
    
    nextLetter1=cheat1.charAt(index1);
    nextLetter2=cheat2.charAt(index2);
    console.log(charStr);
    changed=false;
    if(charStr==nextLetter1) { index1++; changed=true;}
    if(charStr==nextLetter2) { index2++; changed=true;}
    if(!changed) {	
    	index1=0;
      index2=0;
      console.log("reset");
      }
    if(index1>=cheat1.length) {
    	index1=0;
      index2=0;

    	alert("CHEAT");
    }
    else {
    	
    }
    if(index2>=cheat2.length) {
    	index1=0;
      index2=0;

    	alert("CHEAT2");
    }
    else {
    	
    }
    
};
