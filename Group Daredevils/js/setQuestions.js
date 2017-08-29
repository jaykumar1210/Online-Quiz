var pos = Math.floor((Math.random() * 20) + 0);
var test, test_status, question, choice, choices, chA, chB, chC, correct = 0,numq=0, name;
var questions = [
[ "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?","last()","push()","None Of the above","B"],
[ "Which built-in method returns the characters in a string beginning at the specified location?","subStr()","getSubstring()","None Of the above","A"],
[ "Which of the following jQuery method gets the html contents (innerHTML) of the first matched element?"," html( )"," getHtml( )","None of the above","A"],
[ "Which of the following jQuery method get the input value of an element?","getContent()","val( )","getValue( )","B"],
[ "Which built-in method calls a function for each element in the array?","while()","loop()","forEach()","C"],
[" Which of the following jQuery selector selects elements with the given element tag-name?","$('tag-name')","$('#tag-name')","$('.tag-name')","B"],
["Which of the following jQuery method removes an attribute from each of the matched elements?","deleteAttr(name)","removeAttr(name)","removeAttribute(name)","B"],
["Which of the following jQuery method adds the previous selection to the current selection?","add( selector )","andSelf( )","append(selector)","B"],
["Which of the following jQuery selector selects all elements available in a DOM?","$('*')","$('?')"," $('#')","A"],
["Which of the following jQuery method sets the width property of an element?","setCSSWidth( value )","setWidth( value)","width( value )","C"],
["Which of the following type of variable takes precedence over other if names are same?","global variable","local variable","Both of the above","B"],
[" Which of the following jQuery method reduce the set of matched elements to a single element?","isEqual( index )","eq( index )","checkEqual( selector )","B"],
["Which of the following jQuery method setups global settings for AJAX requests?","jQuery.ajax( options )","jQuery.ajaxSetup( options )", "serialize( )","B"],
[ "How can you get the total number of arguments passed to a function?","Using args.length property","Using arguments.length property","Both of the above","B"],
["Which of the following jQuery method sets attributes of an element?","attr(name, value)","setAttr(name, value)","setAttributes(name, value)","A"],
["Which of the following jQuery method gets the current offset of the first matched element, in pixels, relative to the document?"," offset( )","offsetParent( )", "position( )","A"],
[" Which built-in method returns the character at the specified index?","characterAt()","getCharAt()","charAt()","C"],
[" Which of the following jQuery method stops the bubbling of an event to parent elements?","preventDefault( )","stopImmediatePropagation( )","stopPropagation( )","B"],
[" Which of the following jQuery method can be used to attach a function to be executed when all AJAX requests have ended?","ajaxStart( callback )","ajaxComplete( callback )","ajaxStop(callback)","B"],
[" Which of the following jQuery method checks if event.stopImmediatePropagation() was ever called on this event object?","isDefaultPrevented( )","isPropagationStopped( )","isImmediatePropagationStopped( )","C"],
];
function $(x){
	return document.getElementById(x);
}
function renderQuestion(){
        
	test = $("test");
	if(numq >= 10){
		if(correct>=8)
		{
			
		test.innerHTML = "<h1><b>Your Score is"+correct+" out of "+10+"</h1>";
		$("test_status").innerHTML = "<h1>You have Successfully Passed the jQuery Test</h1>";
		numq = 0;
		correct = 0;
	}
	else
	{
		
		test.innerHTML = "<h1><b>Your Score is "+correct+" of "+10+" questions correct</h1>";
		$("test_status").innerHTML = "<h1>You Did not pass the Test.Please Try Again....</h1>";
		numq = 0;
		correct = 0;	
	}
		return false;
	}
        //alert(pos);
	$("test_status").innerHTML = "Question "+(numq+1)+" of "+10;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h2>"+"<b>"+question+"<b>"+"</h2><br>";
	test.innerHTML += "<input  type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<input class='buttom' name='submit' id='submit' onclick='checkAnswer()' value='Submit Answer' type='submit'>";
        
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
        
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	numq++;
    pos = Math.floor((Math.random() * 20) + 0);
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);