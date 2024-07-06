
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for( tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for( tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
    
   
}

//========part2

var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }


// ------------------prt3

const scriptURL = '<https://script.google.com/macros/s/AKfycbzd5AdGi0ArxBfX89ZvC0qKtGR4iTCIdCc8Dn3OeydnNG1mBMXEba0qExB-NAEzaQXX/exec>'
        const form = document.forms['submit-to-google-sheet']
        const msg= document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Massage Sent Succsefully"
                setTimeout(function(){
                    msg.innerHTML=""
                },5000)
                form.reset()
                
            })
            .catch(error => console.error('Error!', error.message))
        })
