let btn=document.querySelector(".btn");
let txtbox=document.querySelector(".txtbox");
let item2=document.querySelector(".item2");



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
//lastSeen();
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
<span class="hitext">Java</span><br />
<span class="hitext">JavaScript</span><br />
<span class="hitext">CSS</span><br />
<span class="hitext">HTML</span><br />
<span class="hitext">SQL</span><br /><br />
I've experiance with following frameworks :<span class="hitext"
  >Spring Boot</span
>
<br /><br />
<span class="hitext">I use IDE: VSCode ,Intelij ,Eclipse</span>
</div>`;
let educationmessage=`<div class="message">
I am completed B.Tech degree in Information Technology from Seacom
Engineering College Passing Year : 2023 <br /><br />
I have completed my Diploma from A.P.C Roy Polytechnic Passing Year:2018
Result:72.0% <br /><br />
I have completed my Higher Secondary school from local school known as
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
    
};
let timeout=setTimeout(start,1000);
typing();


const chatevent=() => {
    let divTag=document.createElement('div');
    let userinput=txtbox.value.toLowerCase();
    let replydiv=document.createElement('div');
    let reptxt=document.createElement('div');
    let reptim=document.createElement('div');
    reptxt.innerText=txtbox.value;
    reptim.innerText=recentTime();
    reptxt.classList.add("myrep");
    reptim.classList.add("myr");
    replydiv.classList.add("mymessage");
    replydiv.appendChild(reptxt);
    replydiv.appendChild(reptim);
    item2.appendChild(replydiv);
    txtbox.value="";
    
    if(userinput==='hi'){
      function hirep  (){
        let totalTag=document.createElement('div');
      let startTag=document.createElement('div');
      totalTag.classList.add("total");
      startTag.innerHTML=himessage;
      startTag.classList.add("mess");
      let timetag=document.createElement('div');
      timetag.textContent=recentTime();
      timetag.classList.add("ti");
      totalTag.appendChild(startTag);
      totalTag.appendChild(timetag);
      item2.appendChild(totalTag);
      item2.lastChild.scrollIntoView();
      }
      
      typing();
      let timeout=setTimeout(hirep,1000);
    }else if(userinput==='skills'){
        function skillrep  (){let totalTag=document.createElement('div');
        let startTag=document.createElement('div');
        totalTag.classList.add("total");
        startTag.innerHTML=skillsmessage;
        startTag.classList.add("mess");
        let timetag=document.createElement('div');
        timetag.textContent=recentTime();
        timetag.classList.add("ti");
        totalTag.appendChild(startTag);
        totalTag.appendChild(timetag);
        item2.appendChild(totalTag);
        item2.lastChild.scrollIntoView();
        }
        
        typing();
        let timeout=setTimeout(skillrep,1000);
    }else if(userinput==='resume'){
        function resumeLink() {
            let totalTag=document.createElement('div');
            totalTag.classList.add("total");
            let timetag=document.createElement('div');
      timetag.textContent=recentTime();
      timetag.classList.add("ti");
            let contentTag=document.createElement('div');
            contentTag.classList.add("down");
            let textTag=document.createElement('div');
            textTag.innerText="Pritam_Saha_Resume";
            textTag.classList.add("mess");
            let buttonTag=document.createElement('a');
            buttonTag.href="https://drive.google.com/file/d/1k6BAnASGfw54mnp6AKvu9avrU6qoGJW0/view?usp=share_link";
            buttonTag.innerHTML=`<i class="fa-solid fa-circle-down" style="color: #3cec48; margin-top: 5px;"></i>`;
            contentTag.appendChild(textTag);
            contentTag.appendChild(buttonTag);
            totalTag.appendChild(contentTag);
            totalTag.appendChild(timetag);
      item2.appendChild(totalTag);
      item2.lastChild.scrollIntoView();
        }
        typing();
      let timeout=setTimeout(resumeLink,1000);
    }else if(userinput==='education'){
        function edurep  (){let totalTag=document.createElement('div');
        let startTag=document.createElement('div');
        totalTag.classList.add("total");
        startTag.innerHTML=educationmessage;
        startTag.classList.add("mess");
        let timetag=document.createElement('div');
        timetag.textContent=recentTime();
        timetag.classList.add("ti");
        totalTag.appendChild(startTag);
        totalTag.appendChild(timetag);
        item2.appendChild(totalTag);
        item2.lastChild.scrollIntoView();
        }
        
        typing();
        let timeout=setTimeout(edurep,1000);
    }else if(userinput==='address'){
        function addrep  (){let totalTag=document.createElement('div');
        let startTag=document.createElement('div');
        totalTag.classList.add("total");
        startTag.innerHTML=addressmessage;
        startTag.classList.add("mess");
        let timetag=document.createElement('div');
        timetag.textContent=recentTime();
        timetag.classList.add("ti");
        totalTag.appendChild(startTag);
        totalTag.appendChild(timetag);
        item2.appendChild(totalTag);
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
            let callTag=document.createElement('a');
            callTag.href="+917980674430";
            callTag.classList.add("ctag");
            let callTag1=document.createElement('div');
            callTag1.innerHTML=`<i class="fa-solid fa-phone" style="color:  #000000;"></i>`;
            callTag1.classList.add("first");
            let callTag2=document.createElement('div');
            callTag2.innerText="+917980674430";
            callTag2.classList.add("second");
            callTag.appendChild(callTag1);
            callTag.appendChild(callTag2);
            let mailTag=document.createElement('a');
            mailTag.href="pritam96.apc@gmail.com";
            mailTag.classList.add("ctag");
            let mailTag1=document.createElement('div');
            mailTag1.innerHTML=`<i class="fa-solid fa-envelope" style="color: #000000;"></i>`;
            mailTag1.classList.add("first");
            let mailTag2=document.createElement('div');
            mailTag2.innerText="pritam96.apc@gmail.com";
            mailTag2.classList.add("second");
            mailTag.appendChild(mailTag1);
            mailTag.appendChild(mailTag2);
            let gitTag=document.createElement('a');
            gitTag.href="https://github.com/Pritamsaha-gitHub";
            gitTag.classList.add("ctag");
            let gitTag1=document.createElement('div');
            gitTag1.innerHTML=`<i class="fa-brands fa-github" style="color: #000000;"></i>`;
            gitTag1.classList.add("first");
            let gitTag2=document.createElement('div');
            gitTag2.innerText="github.com/Pritamsaha-gitHub";
            gitTag2.classList.add("second");
            gitTag.appendChild(gitTag1);
            gitTag.appendChild(gitTag2);
            let linkedinTag=document.createElement('a');
            linkedinTag.href="https://www.linkedin.com/in/pritamsaha-1996/";
            linkedinTag.classList.add("ctag");
            let linkedinTag1=document.createElement('div');
            linkedinTag1.innerHTML=`<i class="fa-brands fa-linkedin" style="color: #000000;"></i>`;
            linkedinTag1.classList.add("first");
            let linkedinTag2=document.createElement('div');
            linkedinTag2.innerText="www.linkedin.com/in/pritamsaha-1996/";
            linkedinTag2.classList.add("second");
            linkedinTag.appendChild(linkedinTag1);
            linkedinTag.appendChild(linkedinTag2);
            let timetag=document.createElement('div');
            timetag.textContent=recentTime();
            timetag.classList.add("ti");
            contentTag.appendChild(textTag);
            contentTag.appendChild(callTag);
            contentTag.appendChild(mailTag);
            contentTag.appendChild(gitTag);
            contentTag.appendChild(linkedinTag);
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
            let gitTag=document.createElement('a');
            gitTag.href="https://github.com/Pritamsaha-gitHub";
            gitTag.classList.add("ctag");
            let gitTag1=document.createElement('div');
            gitTag1.innerHTML=`<i class="fa-brands fa-github" style="color: #000000;"></i>`;
            gitTag1.classList.add("first");
            let gitTag2=document.createElement('div');
            gitTag2.innerText="github.com/Pritamsaha-gitHub";
            gitTag2.classList.add("second");
            gitTag.appendChild(gitTag1);
            gitTag.appendChild(gitTag2);
            let timetag=document.createElement('div');
            timetag.textContent=recentTime();
            timetag.classList.add("ti");
            contentTag.appendChild(textTag);
            contentTag.appendChild(gitTag);
            contentTag.appendChild(timetag);
            item2.appendChild(contentTag);
            item2.lastChild.scrollIntoView();

        }
        typing();
      let timeout=setTimeout(projects,1000);
    }else if(userinput==='clear'){
        location.reload();
    }else if(userinput==='about'){
        function aboutrep  (){let totalTag=document.createElement('div');
        let startTag=document.createElement('div');
        totalTag.classList.add("total");
        startTag.innerHTML=aboutmessage;
        startTag.classList.add("mess");
        let timetag=document.createElement('div');
        timetag.textContent=recentTime();
        timetag.classList.add("ti");
        totalTag.appendChild(startTag);
        totalTag.appendChild(timetag);
        item2.appendChild(totalTag);
        item2.lastChild.scrollIntoView();
        }
        
        typing();
        let timeout=setTimeout(aboutrep,1000);
    }else{
        function wrongrep  (){let totalTag=document.createElement('div');
        let startTag=document.createElement('div');
        totalTag.classList.add("total");
        startTag.innerHTML=wronginput;
        startTag.classList.add("mess");
        let timetag=document.createElement('div');
        timetag.textContent=recentTime();
        timetag.classList.add("ti");
        totalTag.appendChild(startTag);
        totalTag.appendChild(timetag);
        item2.appendChild(totalTag);
        item2.lastChild.scrollIntoView();
        }
        
        typing();
        let timeout=setTimeout(wrongrep,1000);
    }
}

btn.addEventListener("click", chatevent);
txtbox.addEventListener('keypress', function(event) {
    // Check if the 'Enter' key was pressed
    if (event.keyCode === 13 && txtbox.value.length > 0) {
        // Add your code to handle the 'Enter' key press here
        chatevent();
    }});