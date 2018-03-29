// Ajax call(XMLHttpRequest)initializatin
function loadjson(file,callback){
   var xhr= new XMLHttpRequest();
   xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    // true when it is asynchronus
   xhr.onreadystatechange=function() {
     if(xhr.readyState ===4 && xhr.status =="200"){
       callback(xhr.responseText);
     }
   }
xhr.send();
}
// function calling
loadjson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
basics(data.left);
  education(data.education);
  skill(data.skills);
})

// for main div class calling
// var main=document.queryselector('.main');

// for main div id calling
var main=document.getElementById('main');
// element creation
var left=document.createElement("div");
// add class name to element
 left.classList.add("left");
// add id to Element
 left.setAttribute("id","left");
// adding text to divyaperumalla
 left.textContent="Profile Details:"
 left.appendChild(document.createElement("HR"));
// appending to main div
main.appendChild(left);
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
// education div start
var edu=document.createElement("div");
edu.classList.add("edu1");
edu.textContent="Education Details:";
edu.appendChild(document.createElement("HR"));
right.appendChild(edu);

function basics(leftside){
  // basics-constructor contains left object details of json file
var image=document.createElement("img");
image.src=leftside.photo;
left.appendChild(image);
var name=document.createElement("h1");
name.textContent=leftside.name;
left.appendChild(name);
var email=document.createElement("h2");
email.textContent=leftside.email;
 left.appendChild(email);
var ph=document.createElement("p");
ph.textContent=leftside.phone;
 left.appendChild(ph);
var address=document.createElement("h3");
address.textContent=leftside.address;
 left.appendChild(address);
console.log(left);
}
function education(Educa){
for(i in Educa)
{
var e1=document.createElement("div");
e1.classList.add("edu2");
e1.textContent=Educa[i].course;
var ul=document.createElement("ul");
for(j in Educa[i].college){
  var li=document.createElement("li");
  li.textContent=Educa[i].college[j];
ul.appendChild(li);
e1.appendChild(ul);
edu.appendChild(e1);
console.log(edu);
}
}
}

function skill(skills){
  var skill_title=document.createElement("div");
  skill_title.classList.add("tech_skills");
  skill_title.textContent="Technical skills:";
  skill_title.appendChild(document.createElement("HR"));
  right.appendChild(skill_title):
// table creation
var table=document.createElement("table");
var row="";
for (var i = 0; i < skills.length; i++) {
row +="<tr><td>"+skills[i].name+"</td><td>"+skills[i].value+"</td></tr>";
}
table.innerHTML=row;
skill_title.appendChild(table);
}
