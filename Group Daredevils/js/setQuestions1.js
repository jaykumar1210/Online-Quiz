var pos = Math.floor((Math.random() * 20) + 0);
var test, test_status, question, choice, choices, chA, chB, chC, correct = 0,numq=0, name;
var questions = [
[ "What is the size of byte variable?","8 bit","16 bit","32 bit","64 bit","A"],
[ "Which of the following is false about String?","String is immutable"," String can be created using new operator"," String is a primary data type","C"],
[ "When static binding occurs?","Static binding occurs during Compile time","Static binding occurs during load time","Static binding occurs during runtime","A"],
[ "Dynamic binding uses which information for binding?","type","object","Both of the above","B"],
[" What is correct syntax for main method of a java class?","public static int main(String[] args)","public int main(String[] args)","public static void main(String[] args)","C"],
[" What is the default value of float variable?","0.0d","0.0f","0","B"],
[" What kind of variables a class can consist of?","class variables, instance variables","class variables, local variables, instance variables","class variables","B"],
["Which of the following is Faster, StringBuilder or StringBuffer?","StringBuilder","StringBuffer","none of the above","A"],
["What of the following is the default value of a local variable?","Not Assigned","null","0","A"],
["In which case, a program is expected to recover?","If an error occurs","If an exception occurs","Both of the above","B"],
["Which method must be implemented by all threads?","wait()","start()","run()","C"],
["What is an applet?","An applet is a Java program that runs in a Web browser","Applet is a tool","Applet is a standalone java program","A"],
["What happens when thread's sleep() method is called?","Thread returns to the ready state","Thread returns to the waiting state","Thread starts running","A"],
["Method Overriding is an example of","Static Binding","Dynamic Binding","None of the above","B"],
["What is the default value of Boolean variable?","true","false","not defined","B"],
["What is an Interface?","An interface is a collection of abstract methods","Interface is an abstract class","Interface is an concrete class","C"],
["What is the default value of char variable?","\u0000","0","null","A"],
["Which arithmetic operations can result in the throwing of an ArithmeticException?","/ , %"," * , +"," >>, <<","A"],
["Which of these keywords is used to define packages in Java?","pkg","Pkg","package","C"],
["Which of the following package stores all the standard java classes?","lang","java","util","B"]
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
		$("test_status").innerHTML = "<h1>You have Successfully Passed the java Test</h1>";
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