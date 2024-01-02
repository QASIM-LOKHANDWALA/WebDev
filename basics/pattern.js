function createPattern1(numOfRows){
    for(var i=0 ; i<numOfRows ; i++){
        var StringToPrint = "";
        for(var j=0 ; j<i+1 ; j++){
            StringToPrint = StringToPrint + "*";
        }
        console.log(StringToPrint);
    }
}
function createPyramid(numOfRows){
    for(var i=numOfRows ; i>0 ; i--){
        var StringToPrint = "";
        for(var j=1 ; j<=i ; j++){
            StringToPrint = StringToPrint + " ";
        }
        for(var j=1 ; j<numOfRows-i; j++){
            StringToPrint = StringToPrint + "*";
        }
        for(var j=1 ; j<=numOfRows-i; j++){
            StringToPrint = StringToPrint + "*";
        }
        console.log(StringToPrint);
    }
    
}

var startTime = new Date().getTime(); 
createPyramid(10);
createPattern1(10);
var endTime = new Date().getTime(); 
console.log((endTime-startTime)/10000 + " seconds");
