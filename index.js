//Detecting the button press 
for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   var drumCode=this.innerHTML;
   makeSound(drumCode);
});
   }

 //decting the keyword press

document.addEventListener("keypress", function(event){
     makeSound(event.key);//event.key through this we accessed the keyword which user enters
});


//created a function which run from both button and keyword value

function makeSound(key){
   switch (key) {
      case "w":
         var tom1=new Audio("sound/tom-1.mp3");
         tom1.play();
         break;
      case "a":
         var tom1=new Audio("sound/tom-2.mp3");
         tom1.play();
          break;    
      case "s":
         var tom1=new Audio("sound/tom-3.mp3");
         tom1.play();
         break;
      case "d":
         var tom1=new Audio("sound/tom-4.mp3");
         tom1.play();
         break;
      case "j":
            var tom1=new Audio("sound/snare.mp3");
            tom1.play();
         break;
      case "k":
            var tom1=new Audio("sound/kick-bass.mp3");
            tom1.play();
         break;
      case "l":
            var tom1=new Audio("sound/crash.mp3");
            tom1.play();
         break;
}

}
/*var audio=new Audio("sound/tom-1.mp3");
audio.play();*/