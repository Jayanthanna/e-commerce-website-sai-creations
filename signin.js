
//this function decide whether or not password should be visible or not
function show_pass()
{
    var checkbox=document.getElementById("sign_show");
    var pass =document.getElementById("sign_pass");
    var cp=document.getElementById("sign_cpass");
    var eye_o=document.getElementById("open");
    var eye_c=document.getElementById("close");
    if(checkbox.checked==true)
    {
        pass.type="text";
        cp.type="text";

    }
    else{
        pass.type="password";
        cp.type="password";
    }
        
}
//this function checks whether or not all information entered is upto standard or not
function password_check()
{
    //getting all values and checking them before storing
    var error=document.getElementById("error_message");
   var pass=document.getElementById("sign_pass").value;
   var cp=document.getElementById("sign_cpass").value;

    //CHECKING IF CONFIRM PASSWWORD AND PASSWORDS ARE SAME
    if(cp!=pass)
    {
        
        error.innerHTML=("PASSWORDS DON'T MATCH !");
        error.style.display="block";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
        return false;
    }
    else{ 
          const scriptURL = 'https://script.google.com/macros/s/AKfycbxC1nqvvuqsd45fPxTxSgTWvZD1XQztWjL8zGTQTvyVn6QfClbLyQAo/exec'
          const form = document.forms['google-sheet']
       
          form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            
              .then(response => window.open('bill.html','_self'))
              .catch(error => console.error('Error!', error.message))
          })
    }

}
