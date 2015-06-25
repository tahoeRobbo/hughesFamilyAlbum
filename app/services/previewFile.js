/*CORRECT WORKING FUNCTION TO CONVERT TO BASE 64 AND DISPLAY PREVIEW*/
//var readFile;
var previewFile = function() {
		var preview = document.querySelector('#preview');
		var file = document.querySelector('input[type=file]').files[0];
		var reader = new FileReader();
		
		reader.onloadend = function() {
			preview.src = reader.result
		}
		if (file) {
			reader.readAsDataURL(file);
		} else {
			preview.src = '';
		}
	} // previewFile()

var uploadFile = function() {
	console.log('uploadFile Clicked')
	var file = document.querySelector('input[type=file]').files[0];
	var reader = new FileReader();
	var inputCaption = document.querySelector('#photoCaption').value;
	
/*	reader.onloadend = function() {
		reader.result;
	}*/
	
	//RUNS AFTER THE READER.READAS...(FILE) IN THE IF STATEMENT.  DELIVERS RESULTS AFTER EVERYTHING IS LOADED
	//SIMILAR TO PROMISE RESOLUTION
	reader.onloadend = function() {
		var imgRef = new Firebase('https://familyalbum.firebaseio.com/photos');
		imgRef.push({
			data : reader.result,
			caption : inputCaption,
		});
		document.querySelector('#photoCaption').value = '';
	}
	
	//MAKES SURE THERE IS A FILE SELECTED -- IF THERE IS, READ THE FILE AS A DATAURL -- CAN ACCESS RETURN
	//VIA READER.RESULT
	if (file) {
		console.log("within if statement fired");
		reader.readAsDataURL(file);
	}
	else {
		console.log('else fired uploadFile');
	}
};  // uploadFile()


