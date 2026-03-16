function testMenu(s){ 
    if(window.location.hash=='#CP'){
      document.getElementById("popisID").checked=true;
     }else if(window.location.hash=='#CZ'){
       document.getElementById("zdrojeID").checked=true;
     }else if(window.location.hash!='#M'){
      //nemam menu
       window.location.href="index.html#"+s;
      }
}
function loadOkolie(s){
  if(s=='HU'){
    window.location.href="Xhugo.html#NO";
  }else if(s=='HR'){
    window.location.href="Xzdrz.html#NO";
  }else if(s=='VZ'){
    window.location.href="Xvz.html#NO";
  }else if(s=='ST'){
    window.location.href="Xzahradnictvo.html#NO";                    
  }
}
function myFunction(i) {
  var popup = document.getElementById("myPopup"+i);
  //popup.parentElement.parentElement.parentElement.parentElement.style.fontSize=3+"vw";
  popup.style.width=80+'vw';
  /*popup.textContent.length;*/
  /*popup.style.fontSize=2.8+"vw";*/
  
  /*var parentSyle = window.getComputedStyle(popup.parentElement.parentElement.parentElement.parentElement, null);
  var cssFontSize=parentSyle.getPropertyValue("font-size");
  var floatSize=parseFloat(cssFontSize, 10);
  var mensiaSize=floatSize-4;
  popup.style.fontSize=mensiaSize+"px";*/
  
  /*alert(cssFontSize);*/
  /*alert(popup.parentElement.parentElement.parentElement.parentElement.style.fontSize);*/
   var www=screen.availWidth;
   var halfw=www/2;
   var offsets = popup.getBoundingClientRect();
   var left = offsets.left;
   var widel=offsets.width;
   var widelHalf=widel/2;
   var posun = -1*(left - halfw);
   var celkom=posun-widelHalf;
   popup.style.marginLeft=celkom+"px";
   popup.style.marginTop="6vw";
   popup.classList.toggle("show");
}