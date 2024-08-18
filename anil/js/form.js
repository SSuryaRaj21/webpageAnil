
const AnnilForm = document.getElementById('AnnilForm');
const AnnilUser = document.getElementById('user');
const AnnilPassCode = document.getElementById('passcode');
const AnnilExcel = document.getElementById('excel');

AnnilForm.addEventListener('submit',function(e){
    e.preventDefault()
    if((AnnilUser.value=='')||(AnnilPassCode=="")){
         AnnilForm.style.backgroundColor="pink"

    }
  else if((AnnilUser.value !='AnnilBioChem')||(AnnilPassCode.value!="AnnilBio@2019")){
    alert("error data")
  }
    else if((AnnilUser.value=='AnnilBioChem')&&(AnnilPassCode.value=="AnnilBio@2019")){
        AnnilExcel.style.display="block"
    }
    else{
        
        
    }
    AnnilForm.reset()
})