document.addEventListener("DOMContentLoaded",()=>{
    function validateForm(){
        const form = document.getElementById("resumeform") as HTMLFormElement;
        if(!form.checkValidity){
            alert("Please fill the fields correctly")
            return false;
        }
        return true;
    }

    function generateResume(){
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value;

        // populate resume
        (document.getElementById("displayname") as HTMLElement).innerText = name;
        (document.getElementById("displayemail") as HTMLElement).innerText = email;
        (document.getElementById("displayphone") as HTMLElement).innerText = phone;
        (document.getElementById("displayeducation") as HTMLElement).innerText = education;
        (document.getElementById("displayexperience") as HTMLElement).innerText = experience;
        (document.getElementById("displayskills") as HTMLElement).innerText = skills;

    };

    document.getElementById("resumeform")?.addEventListener("submit",function(event){
        event.preventDefault();
        if (validateForm()){
            generateResume();
        };
    });

    // generate resume

    document.getElementById("name")?.addEventListener("input",generateResume);
    document.getElementById("email")?.addEventListener("input",generateResume);
    document.getElementById("phone")?.addEventListener("input",generateResume);
    document.getElementById("education")?.addEventListener("input",generateResume);
    document.getElementById("experience")?.addEventListener("input",generateResume);
    document.getElementById("skills")?.addEventListener("input",generateResume);

});