function jfun1()
{
    var name=frm1.t1.value;
    var des=frm1.t2.value;
    if(name==""){
        alert("Please enter name")
        frm1.t1.focus();
        return false;
    }

    if(des==""){
        alert("Please enter designation")
        frm1.t2.focus();
        return false;
    }
    
    else 
    return true;
}