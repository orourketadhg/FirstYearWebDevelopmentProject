//falcon_9 
var Rocket_1_Text_1 = "<h4>Falcon 9</h4>	<p>The Falcon 9 rocket is SpaceX's most reliable rocket having 15 successful launches. This two stage rocket has become the most reusable rocket used today. It has launced both satellites and the Dragon spacecraft into orbit. First used during 2012 when it delivered a Dragon capsule containing cargo to the International Space Station.</p>	"	
var Rocket_1_Text_2 = "<p>The Falcon 9 uses 9 engines to provide 7,607 kiloNewtons of force over 162 seconds to deliver the rocket to space. The Rocket has a mass of almost 550 Tons and can carry a payload of alomst 23 tons to low Earth orbit, over 8 tons to geosynchronous orbit and an estimated 4 Tons to Mars.</p>	<p>The Rocket retains its reusablity by allowing the first stage to land back upon the earth safely, be at sea or on land.</p>	"
	
//falcon_Heavy	
var Rocket_2_Text_1 = "<h4>The Falcon Heavy</h4>	<p>The Falcon Heavy is the worlds most powerful rocket in use today, only ever beaten before by NASA's Saturn V moon Rocket. It has the ability to bring over 50 Tons of of people, resourses and cargo to space.</p>";
var Rocket_2_Text_2 = "<p>using three Falcon 9 Stage 1 booters as its first stage, the Falcon Heavy has the ability to deliver over 22,000 KiloNewtons of force. Each of the three boosters are able to land upon the ground using the same technology as the auto landing software the Falcon 9 has. It is SpaceX's hope that this Rocket will be the first of any to bring Man to Mars.  </p>";

//Dragon Capsule
var Rocket_3_Text_1 = "<h4>The Dragon </h4>		<p>The Draon is spacecraft that was designed by SpaceX to bring Cargo, Resources and people to Space.</p>";
var Rocket_3_Text_2 = "	<p>This 25 metric Cube has been used since 2012 to bring Cargo to the International Space Station. With a total payload mass of 6000kg SpaceX hopes that in Early 2018 they will be the first private company to launch people to space.</p>";

//images
//var Pictures_array = ["Falcon_9.jpg","Falcon_Heavy.jpg","Dragon.jpg"];
//var count = 0;


			/* Couldnt get the images to change on click of button*/

			
function Rocket_1() {
	var Text_1 = Rocket_1_Text_1; 
	var Text_2 = Rocket_1_Text_2;
	//count = 0;
	
	document.getElementById("PlaceHolder").innerHTML = Text_1;
	//document.getElementsByName("Rocket_Image").src = ("Assets/Images/" + Pictures_array[count]);
	document.getElementById("PlaceHolder_2").innerHTML = Text_2;
}//end falcon 9 

function Rocket_2() {
	var Text_1 = Rocket_2_Text_1;
	var Text_2 = Rocket_2_Text_2;
	//count = 1
	
	document.getElementById("PlaceHolder").innerHTML = Text_1;
	//document.getElementsByName("Rocket_Image").src = ("Assets/Images/" + Pictures_array[count]);
	document.getElementById("PlaceHolder_2").innerHTML = Text_2;
}//end falcon_Heavy

function Rocket_3() {
	var Text_1 = Rocket_3_Text_1; 
	var Text_2 = Rocket_3_Text_2;
	//count = 2;	
	
	document.getElementById("PlaceHolder").innerHTML = Text_1;
	//document.getElementsByClassName("Rocket_Image").src = ("Assets/Images/" + Pictures_array[count]);
	document.getElementById("PlaceHolder_2").innerHTML = Text_2;
}//end Dragon Capsule
