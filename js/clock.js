let name = prompt("Lütfen isminizi giriniz:")
var days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

if (name) {
    document.querySelector("#myName").innerHTML = name;
} else {
    alert("Hatalı / Boş giriş yaptınız!")
    let error = `İsim bilgisi alınamadı sayfayı yenileyip doğru bir giriş yapınız!`
     document.querySelector("#end").innerHTML = "";
     document.querySelector("#start").innerHTML = error;
   
}

function startTime() {
    
    const today = new Date();
    
    let now = days[today.getDay()];
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    m = checkTime(m);
    s = checkTime(s);
    year = checkTime(year);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s + "<br>" + day + "/" + month + "/" + year + "~" + now;     
    setTimeout(startTime, 1000);

}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}

startTime();


