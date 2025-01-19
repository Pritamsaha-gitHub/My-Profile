let audio = new Audio("./assets_sentmessage.mp3");
let btn=document.querySelector(".btn");
let txtbox=document.querySelector(".txtbox");
let item2=document.querySelector(".item2");

function playSound() {
    audio.play();
}

let startMessage = `<div class="message">
Hello there 👋🏻, <br /><br />
My name is <span class="hitext">Pritam Saha</span>.<br /><br />
I am a Information Technology Student of
<b>Seacom Engineering College👨🏻‍💻📚</b><br />
<br />
I am eager to hear about potential career opportunities, so I would be
pleased to chat about job openings in the engineering sphere.<br /><br />
Send <span class="hitext">'hi'</span> to know more about me.
</div>`;
let himessage=`<div class="message">
Send Keyword to get what you want to know about me... <br />
e.g <br />
<span class="hitext">'skills'</span> - to know my skills <br />
<span class="hitext">'experience'</span> - to know my experiences <br />
<span class="hitext">'resume'</span> - to get my resume <br />
<span class="hitext">'education'</span> - to get my education details
<br />
<span class="hitext">'address'</span> - to get my address <br />
<span class="hitext">'contact'</span> - to get ways to connect with me
<br />
<span class="hitext">'projects'</span> - to get details of my projects
<br />
<span class="hitext">'clear'</span> - to clear conversation <br />
<span class="hitext">'about'</span> - to know about this site
</div>`;
let skillsmessage=`<div class="message">
I have learn fullStack devlopment From AccioJob <br /><br />
I can comfortably write code in following languages : <br />
<span class="hitext">Core Java & Spring Boot</span><br />
<span class="hitext">Data Structures & Algorithms</span><br />
<span class="hitext">JPA & Hibernate</span><br />
<span class="hitext">PostgreSQL, MongoDB, MySQL</span><br />
<span class="hitext">Docker, Kubernetes</span><br />
<span class="hitext">HTML, CSS, JavaScript</span><br /><br />


I've experiance with following frameworks :<span class="hitext"
  >Spring Boot</span
>
<br /><br />
<span class="hitext">I use IDE: VSCode ,Intelij ,Eclipse</span>
</div>`;
let educationmessage=`<div class="message">
● I am completed <b class="hitext"> B.Tech</b> degree in Information Technology from Seacom
Engineering College Passing Year : 2023, <br /><br />
● I have completed my <b class="hitext">Diploma</b> from A.P.C Roy Polytechnic Passing Year:2018,<br /><br />
● I have completed my <b class="hitext">Higher Secondary</b> school from local school known as
Jagatballavpur High School Passing Year:2014
</div>`;
let addressmessage=`<div class="message">
Vill+P.O+P.S-Jagatballavpur,Dist-Howrah,West Bengal, Pin-711408
</div>`;
let aboutmessage=`<div class="message">
🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from
SCRATCH! <br /><br />
👨🏻‍💻 Designed and Developed by <span class="hitext">Pritam Saha</span> ❤️
</div>`;
let wronginput=`<div class="message">
Hey I couldn't catch you...😢 <br />
Send <span class="hitext">'hi'</span>
to know more about usage.
</div>`;
let workexperienceMessage = `<div class="message">
● I am currently working as Java Developer at <a href="https://www.linkedin.com/company/dgliger-consulting/about" target="_blank" class="hitext">DGLiger Consulting</a> from July 2024 to present,<br /><br />
● I have worked as Software Engineer at <a href="https://www.linkedin.com/company/e-labs-lims" target="_blank" class="hitext">Quality and Testing Info Solutions Pvt. Ltd.</a> from January 2023 to July 2024.
</div>`;

function lastSeen(){
    let lastTime =document.querySelector(".seen");
    let tim=new Date();
    let hour=tim.getHours();
    if(hour<10){
        hour="0"+hour;
    }
    let minute=tim.getMinutes();
    if(minute<10){
        minute="0"+minute;
    }
    lastTime.innerText="last seen today at " + hour +":"+minute;
}
function typing(){
    let lastTime =document.querySelector(".seen");
    lastTime.innerText="typing.....";
    let timeout=setTimeout(lastSeen,1000);
}
function recentTime(){
    let lastTime =document.querySelector(".seen");
    let tim=new Date();
    let hour=tim.getHours();
    if(hour<10){
        hour="0"+hour;
    }
    let minute=tim.getMinutes();
    if(minute<10){
        minute="0"+minute;
    }
    return hour +":"+minute;
}
let check=`<span style="position: relative; top: 6px; color: gray; font-size:22px;" class="material-symbols-outlined">
done_all
</span>`;

function reply(retMessage){
    let replydiv=document.createElement('div');
    let reptxt=document.createElement('div');
    let reptim=document.createElement('div');
    reptxt.innerText=retMessage;
    reptim.innerHTML=recentTime() + check;
    reptxt.classList.add("myrep");
    reptim.classList.add("myr");
    replydiv.classList.add("mymessage");
    replydiv.appendChild(reptxt);
    replydiv.appendChild(reptim);
    txtbox.value="";
    return replydiv;
}
function repTime(mes){
    let totalTag=document.createElement('div');
    let startTag=document.createElement('div');
    totalTag.classList.add("total");
    startTag.innerHTML=mes;
    startTag.classList.add("mess");
    let timetag=document.createElement('div');
    timetag.textContent=recentTime();
    timetag.classList.add("ti");
    totalTag.appendChild(startTag);
    totalTag.appendChild(timetag);
    playSound();
    return totalTag;
}
function addbutton(val,address){
    let callTag=document.createElement('a');
            callTag.href=val;
            callTag.classList.add("ctag");
            let callTag1=document.createElement('div');
            callTag1.innerHTML=address;
            callTag1.classList.add("first");
            let callTag2=document.createElement('div');
            callTag2.innerText=val;
            callTag2.classList.add("second");
            callTag.appendChild(callTag1);
            callTag.appendChild(callTag2);
            playSound();
            return callTag;
}

function start(){
    let totalTag=document.createElement('div');
    let startTag=document.createElement('div');
    totalTag.classList.add("total");
    startTag.innerHTML=startMessage;
    startTag.classList.add("mess");
    let timetag=document.createElement('div');
    timetag.textContent=recentTime();
    timetag.classList.add("ti");
    totalTag.appendChild(startTag);
    totalTag.appendChild(timetag);
    item2.appendChild(totalTag);
    playSound();
};
let timeout=setTimeout(start,1000);
typing();

const chatevent=() => {
    let divTag=document.createElement('div');
    let userinput=txtbox.value.toLowerCase();
    item2.appendChild(reply(txtbox.value));
    item2.lastChild.scrollIntoView();
    if(userinput==='hi'){
      function hirep  (){
      item2.appendChild(repTime(himessage));
      item2.lastChild.scrollIntoView();
      }
      typing();
      let timeout=setTimeout(hirep,1000);
    }else if(userinput==='skills'){
        function skillrep  (){
        item2.appendChild(repTime(skillsmessage));
        item2.lastChild.scrollIntoView();
        }
        typing();
        let timeout=setTimeout(skillrep,1000);
    }else if(userinput==='resume'){
        function resumeLink() {
            let totalTag=document.createElement('div');
            totalTag.classList.add("total");
            let contentTag=document.createElement('a');
            contentTag.classList.add("down");
            let textTag=document.createElement('div');
            textTag.innerHTML=`<i class="fa-solid fa-file-pdf" style="color: #ec1818;"></i>&nbsp;&nbsp;&nbsp; Pritam_Saha_Resume &nbsp;&nbsp;&nbsp;`;
            textTag.classList.add("mess");
            let buttonTag=document.createElement('div');
            contentTag.href="./Pritam_Resume.pdf";
            contentTag.download="Pritam_Resume.pdf";
            buttonTag.innerHTML=`<i class="fa-solid fa-circle-down" style="color: #3cec48; margin-top: 5px;"></i>`;
            contentTag.appendChild(textTag);
            contentTag.appendChild(buttonTag);
            totalTag.appendChild(contentTag);
            let timetag=document.createElement('div');
            timetag.textContent=recentTime();
            timetag.classList.add("ti");
            totalTag.appendChild(timetag);
      item2.appendChild(totalTag);
      item2.lastChild.scrollIntoView();
      playSound();
        }
        typing();
      let timeout=setTimeout(resumeLink,1000);
    }else if(userinput==='education'){
        function edurep  (){
        item2.appendChild(repTime(educationmessage));
        item2.lastChild.scrollIntoView();
        }
        typing();
        let timeout=setTimeout(edurep,1000);
    }else if(userinput==='address'){
        function addrep  (){
        item2.appendChild(repTime(addressmessage));
        item2.lastChild.scrollIntoView();
        }
        typing();
        let timeout=setTimeout(addrep,1000);
    }else if(userinput==='contact'){
        function contactreply() {
            let contentTag=document.createElement('div');
            contentTag.classList.add("total");
            let textTag=document.createElement('div');
            textTag.innerText="Hover & Click here to see more";
            textTag.classList.add("mess");
            contentTag.appendChild(textTag);
            contentTag.appendChild(addbutton("+91798074430",`<i class="fa-solid fa-phone" style="color:  #000000;"></i>`));
            contentTag.appendChild(addbutton("pritam96.apc@gmail.com",`<i class="fa-solid fa-envelope" style="color: #000000;"></i>`));
            contentTag.appendChild(addbutton("https://github.com/Pritamsaha-gitHub",`<i class="fa-brands fa-github" style="color: #000000;"></i>`));
            contentTag.appendChild(addbutton("https://www.linkedin.com/in/pritamsaha-1996/",`<i class="fa-brands fa-linkedin" style="color: #000000;"></i>`));
            let timetag=document.createElement('div');
            timetag.textContent=recentTime();
            timetag.classList.add("ti");
            contentTag.appendChild(timetag);
            item2.appendChild(contentTag);
            item2.lastChild.scrollIntoView();
        }
        typing();
      let timeout=setTimeout(contactreply,1000);
    }else if(userinput==='projects'){
        function projects() {
            let contentTag=document.createElement('div');
            contentTag.classList.add("total");
            let textTag=document.createElement('div');
            textTag.innerText="You want to check my projects? Then just jump into my Github Account.";
            textTag.classList.add("mess");
            contentTag.appendChild(textTag);
            contentTag.appendChild(addbutton("https://github.com/Pritamsaha-gitHub",`<i class="fa-brands fa-github" style="color: #000000;"></i>`));
            let timetag=document.createElement('div');
            timetag.textContent=recentTime();
            timetag.classList.add("ti");
            contentTag.appendChild(timetag);
            item2.appendChild(contentTag);
            item2.lastChild.scrollIntoView();
        }
        typing();
      let timeout=setTimeout(projects,1000);
    }else if(userinput==='clear'){
        location.reload();
    }else if(userinput==='experience'){
        function exprep  (){
            item2.appendChild(repTime(workexperienceMessage));
            item2.lastChild.scrollIntoView();
            }
            typing();
            let timeout=setTimeout(exprep,1000);
    }else if(userinput==='about'){
        function aboutrep  (){
        item2.appendChild(repTime(aboutmessage));
        item2.lastChild.scrollIntoView();
        }
        typing();
        let timeout=setTimeout(aboutrep,1000);
    }else{
        function wrongrep  (){
        item2.appendChild(repTime(wronginput));
        item2.lastChild.scrollIntoView();
        }
        typing();
        let timeout=setTimeout(wrongrep,1000);
    }
    playSound();
}

btn.addEventListener("click", chatevent);
txtbox.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 && txtbox.value.length > 0) {
        chatevent();
    }});