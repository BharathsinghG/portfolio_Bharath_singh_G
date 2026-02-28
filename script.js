/* Typing Animation */
new Typed("#typing",{
strings:["Python FullStack Developer","Data Analyst","Machine Learning Enthusiast"],
typeSpeed:60,
backSpeed:40,
loop:true
});

/* Mobile Toggle */
document.querySelector(".menu-toggle").onclick=function(){
document.querySelector(".navlist").classList.toggle("active");
};

/* Download CV */
function downloadCV(){
window.open("Bharath_singh_CV_F(1).pdf", "_blank");
}

/* Scroll to Contact */
function scrollContact(){
document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}

/* Form Validation */
function validateForm(){
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

if(name===""||email===""||message===""){
alert("Please fill all fields");
return false;
}
alert("Message Sent Successfully!");
return true;
}

/* Back To Top */
let topBtn=document.getElementById("topBtn");

window.onscroll=function(){
if(document.documentElement.scrollTop>300){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}
};

topBtn.onclick=function(){
window.scrollTo({top:0,behavior:"smooth"});
};