let getpass = (event)=>{
    let confirmpass=event.target.value;
    let pass=document.getElementById('password').value;
    let errorinput = document.getElementById('passerror');
    let output = (confirmpass === pass) ? "" : "Password is not matching";
    errorinput.innerText=output;
    }
  
  
  
let validatePhonenumber =(event)=>{
    let phoneerror=document.getElementById('phoneerror');
    const phoneNum = '[0-9]'; 
    const userinput=event.target.value;
    let result = (userinput.match(phoneNum)&& (userinput.length===10 && userinput.length>0))? true :false;
    let res=(result)?"":"Phone number is not valid"
    phoneerror.innerText=res;  
    }