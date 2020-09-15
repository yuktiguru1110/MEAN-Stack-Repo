function check(){
    var name = Document.forms.name.value;
    var desgination =Document.forms.desgination.value;
    if(name=="" || desgination==""){
        alert("Enter all the details")
        forms.name.focus()
        return false;
    }
}