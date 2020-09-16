function test1(){
   // alert("Text input type")
   //return false;

   var  name=frm1.t1.value;
   var designation=frm1.t2.value;

   if(name=="" || designation=="")
   {
       alert("Please Enter the Name as well as the Designation")
       return false;
   }
   else{
       return true;
   }

   if(name=="")
   {
       alert("Please  enter the Name")
       return false;
   }
   else
   {
       return true;
   }

   if(designation=="")
   {
       alert("Please enter the Designation")
       return false;
   }
   else
   {
       return true;
   }

   
}