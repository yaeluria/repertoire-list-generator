
// button = document.getElementById("display").innerHTML;
var composerName, pieceTitle, keyName, opNum;
	
	
	function showInput(){
 composerName = document.getElementById("composer-name").value;
 pieceTitle = document.getElementById("piece-title").value;
 keyName = document.getElementById('piece-key').value; 
 opNum  = document.getElementById("piece-opus").value;

		console.log(composerName + ": " + pieceTitle + " in " + keyName + ", Op." + opNum);

        document.getElementById("display").textContent = composerName + ": " + pieceTitle + " in " + keyName + ", Op." + opNum; 
      //  document.getElementById('display').innerHTML = 
                //    document.getElementById("user_input").value;
}


//showInput();

