setInterval(function(){
    if(document.getElementsByClassName("slide")[0].classList.contains("animate")){
        document.getElementsByClassName("slide")[1].classList.add("animate");
        document.getElementsByClassName("slide")[0].classList.remove("animate");
    }else if(document.getElementsByClassName("slide")[1].classList.contains("animate")){
        document.getElementsByClassName("slide")[2].classList.add("animate");
        document.getElementsByClassName("slide")[1].classList.remove("animate");
    }else if(document.getElementsByClassName("slide")[2].classList.contains("animate")){
        document.getElementsByClassName("slide")[0].classList.add("animate");
        document.getElementsByClassName("slide")[2].classList.remove("animate");
    }
},6000);


const btnSrollEffect = document.querySelector(".btn_scrolling_effect");


window.addEventListener("scroll" , () => {
    if(window.pageYOffset > 100){
        btnSrollEffect.classList.add("active");
    }else{
        btnSrollEffect.classList.remove("active");
    }
});


btnSrollEffect.addEventListener("click" , function(){

    window.scrollTo({
        top : 0,
        left : 0,
        behavior : "smooth",
        transition : "all 0.6s ease-in-out"
    });


});



