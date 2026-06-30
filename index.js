// function openfullscreen(imagesrc){
//     document.getElementById('fullscreen-img').src=imagesrc;
//     document.getElementById('fullscreen-view').style.display = 'flex';
//    }
//    function closefullscreen(){
//     document.getElementById('fullscreen-view').style.display = 'none';
//    }
function openfullscreen(imagesrc){
    document.getElementById('fullscreen-img').src=imagesrc;
    document.getElementById('fullscreen-view').style.display = 'flex';
   }
   function closefullscreen(){
    document.getElementById('fullscreen-view').style.display = 'none';
   }


   const text = "Full Stack Web Developer !! ";
   let index = 0;
   
   function typeText() {
       document.getElementById("typing-text").innerText = text.substring(0, index);
       index++;
   
       if (index > text.length) {
           index = 0; // Restart typing
       }
   
       setTimeout(typeText, 100);
   }
   
   typeText();

   
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("home-btn").addEventListener("click", function () {
            scrollToSection("home");
        });

        document.getElementById("about-btn").addEventListener("click", function () {
            scrollToSection("about");
        });

        document.getElementById("service-btn").addEventListener("click", function () {
            scrollToSection("service");
        });

        document.getElementById("resume-btn").addEventListener("click", function () {
            scrollToSection("resume");
        });

        document.getElementById("projects-btn").addEventListener("click", function () {
            scrollToSection("projects");
        });

        document.getElementById("contact-btn").addEventListener("click", function () {
            scrollToSection("contact");
        });

        function scrollToSection(sectionId) {
            const targetElement = document.getElementById(sectionId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for fixed navbar
                    behavior: "smooth"
                });
            }
        }
    });


   