function check(form)
{
 if(form.userid.value == "bindu" && form.pswrd.value == "12345")
  {
    window.open('home.html')
  }

else if(form.userid.value == "arvind" && form.pswrd.value == "12345")
  {
    window.open('home.html')
  }
 else
 {
   alert("Error Password or Username")
  }
}