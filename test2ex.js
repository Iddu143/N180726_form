let i=0;
var img=["s1.jpg","s2.jpg","s5.jpg","s3.jpg"];
console.log(i)
function multi(){
    
    if (i>=img.length){
        i=0;
    } 
    document.body.style.backgroundImage="url("+img[i]+")";
    i++;
   setTimeout(multi,2000);
}
multi();

function nameValidation(){
    var user=document.getElementById("uname").value;
    // console.log(user);
    document.getElementById('uname').value=user.toUpperCase();
    upattern=/^f[\w]{4,9}$/i;
    if(upattern.test(user)){
        document.getElementById("uname").style.backgroundColor="white";
        return true;

    }
    else{
        document.getElementById("uname").style.backgroundColor="red";
        return false;
    }
}
function mailValidation(){
    var mail=document.getElementById("email").value;
    mpattern=/^"([a-z0-9]*)@[a-z]{2,7}(\.)(com|edu|in|net)$/i;
    if(mpattern.test(mail)){
        document.getElementById("email").style.backgroundColor="white";
        return true;
    }
    else{
        document.getElementById("email").style.backgroundColor="red";
        // alert("invalid")
        return false;
    }
}
function mobileValidation(){
    var mobile=document.getElementById("mnumber").value;
    mnpattern=/(^(977)[0-9]{7}$|^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/;
    if(mnpattern.test(mobile)){
        document.getElementById("mnumber").style.backgroundColor="white";
        return true;
    }
    else{
        document.getElementById("mnumber").style.backgroundColor="red";
        return false;
    }
}
function countryValidation(){
    var countryValue=document.getElementById("country").value;
    if(countryValue=="India"){
        document.getElementById("beerdiv").style.display="none";
    }else{
        document.getElementById("beerdiv").style.display="block";
    }
}
function paymentValidation(){
    var payment=document.getElementById("pay").value;
    paypattern=/(^(SBIN)([0-9]){7}$)/gi;
    // paypattern=/^(SBIN)[0-9]{3}$/;
    if(paypattern.test(payment)){
        document.getElementById("pay").style.backgroundColor="white";
    }
    else{
        document.getElementById("pay").style.backgroundColor="red";
    }
}
let count=document.getElementById("days");

function daysValidation(){
    if(document.getElementById("nuz").checked||document.getElementById("kdp").checked){
        document.getElementById("totalcost").innerText="Total Cost:" +(document.getElementById("days").value*2000);
    }
    else if(document.getElementById("sk").checked||document.getElementById("ong").checked){
        document.getElementById("totalcost").innerText="Total Cost" +(document.getElementById("days").value*3000);
    }
}
count.addEventListener('keyup',daysValidation);

