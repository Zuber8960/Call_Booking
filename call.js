const form=document.querySelector("#myForm");
const nameInput=document.querySelector("#name");
const emailInput=document.querySelector("#email");
const phoneInput=document.querySelector("#phone");



form.addEventListener("submit",onSubmit);
function onSubmit(e){
    e.preventDefault();

    if(nameInput.value==""||emailInput.value==""||phoneInput.value==""){
        alert("Incoplete details!"+"\n"+"Please fill the form correctly.")
    }else{
        alert("Thank you!"+"\n"+"you will be contacted shortly.")
    }
}

    