

var bio = {
	"name": "Violet Viola",
	"role": "web developer",
	"contacts":{
		"email": "vviola@vvmail.com",
		"phone": "111-11111",
		"mobile": "222-222222",
		"github": "vviola",
		"location":"Boston, MS"
	},
	"WelcomeMessage": "welcome to my web developing world!",
	
	"skills":[
	"Html","JavaScript","CSS"
	],

	"bioPic": "images/fry.jpg"
}
 

var work ={
"jobs":[
 {
	"employer":"One World Inc.",
	"title": "web developer",
	"dates":"2010-2012",
	"description": "helped to maintain the website, help desk support",
	"location":"London,ON"
 },
 {
	"employer": "Universal Bank",
	"title": "front-end developer",
	"dates": "2012-2014",
	"description": "design and maintanace of website design",
	"location":"Boston,MA"
 }
]
}

var education = {
	"schools":[
	{
		"name":"LOCC",
		"degree":"certificate",
		"location":"London, ON",
		"dates": 2012,
		"major":"IT",
		"url": "http://example.com",
	},
	{
		"name":"Boston School of Information Tech",
		"degree":"diploma",
		"location":"Boston, MA",
		"dates": 2013,
		"major":"front-end developer",
	   "url": "http://example.com"
	}
	],
	"onlineCourses":[
	{
		"title": "Java script basics",
		"school": "Udacity",
		"dates": 2014,
		"url": "https://www.udacity.com/course/ud804"
	}	
	
	]


}
var projects = {
"projects": [
	{

	"title":"Udacity mug",
	"datesWorked":2014,
	"description":"mock up a web page",
	"images":[
	"images/mug1.jpg",
	"images/mug1.jpg"
	]	

	},

	{
	"title":"resumeBuilder",
	"datesWorked":2015,
	"description":"creating a website",
	"images":[
	"images/fry.jpg",
	"images/fry.jpg"	
	]
	
}
	]
}

var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend (formattedRole);

var formattedName=HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);


var formattedImage=HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedImage);

var formattedWelcome=HTMLWelcomeMsg.replace("%data%",bio.WelcomeMessage);
$("#header").append(formattedWelcome);
 



var formattedMobile=HTMLcontactGeneric.replace("%contact%","mobile");
var formattedMobile1=formattedMobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedMobile1);

var formattedEmail=HTMLcontactGeneric.replace("%contact%","email");
var formattedEmail1=formattedEmail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedEmail1);

var formattedgithub=HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedgithub);



if (bio.skills.length>0) {
	$("#header").append(HTMLskillsStart);	


	var formattedSkill=HTMLskills.replace ("%data%",bio.skills[0]);
	$("#skills").append (formattedSkill);

	formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill= HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append (formattedSkill);

	}

function displayWork(){

for(job in work.jobs) {

	$("#workExperience").append (HTMLworkStart);

	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);

	var formattedEmployerTitle=formattedEmployer+formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDate=HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDate);

	var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);

	var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

	}
 }

displayWork();

projects.display=function(){
	for (project in projects.projects){
	$("#projects").append(HTMLprojectStart);

	var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);



	
	var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].datesWorked);
	$(".project-entry:last").append(formattedDates);


    
	var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

	for (image in projects.projects[project].images){

	var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
	$(".project-entry:last").append(formattedImage);

		}
	}
}

projects.display();

education.display=function(){
	for (school in education.schools){
		
		$("#education").append(HTMLschoolStart);

		var formattedName=HTMLschoolName.replace("%data%",education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedCity=HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedCity);

		var formattedEduDate=HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedEduDate);

		var formattedMajor=HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
		}
	}

	education.display();


	$("#education").append(HTMLonlineClasses);

	for(onlineCourse in education.onlineCourses){

		$("#education").append(HTMLschoolStart);

	    var formattedOnlineTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);

	    var formattedOnlineSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);

	   	$(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);


	    var formattedOnlineDate=HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
	    $(".education-entry:last").append(formattedOnlineDate);

	    var formattedOnlineUrl=HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);
	    $(".education-entry:last").append(formattedOnlineUrl);
  
	}


$("#mapDiv").append(googleMap);


$(document).click(function(loc) {

var x =loc.pageX;
var y =loc.pageY;

logClicks (x,y);

});


