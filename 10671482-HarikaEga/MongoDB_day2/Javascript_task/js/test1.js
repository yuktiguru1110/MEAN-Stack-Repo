
function func1(){
   
    var name=frm1.t1.value;
    var designation=frm1.t2.value;
    if(name=="")
    {
        alert("please enter the name")
       
         return false;
    }
   
    if(designation=="")
    {
        alert("please enter the designation")
        return false;
    }
    else 
    return true;
   
}