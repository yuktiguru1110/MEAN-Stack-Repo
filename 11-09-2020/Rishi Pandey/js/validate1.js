function jsfun1()
{
    // alert("TESTING")
    var name=form1.t1.value;
    var designation=form1.t2.value;

    if(name=="")
    {
        alert("PLease enter name")
        return false;
       
    }
    if (designation=="")
    {
        alert("please enter designation")
        return false;
    }
    else
    {
        return true;
    }

   
   
   
}