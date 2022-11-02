window.onload =  function(){
    header.addEventListener('click', ()=>{
        document.getElementById("initPageContainer").style.display = "flex";
        document.getElementById("taakstraffenContainer").style.display = "none";
        document.getElementById("gevangenisstraffenContainer").style.display = "none";
    });

    taakstraffen.addEventListener('click', ()=>{
        document.getElementById("taakstraffenContainer").style.display = "flex";
        document.getElementById("initPageContainer").style.display = "none";
    });

    gevangenisstraffen.addEventListener('click', ()=>{
        document.getElementById("gevangenisstraffenContainer").style.display = "flex";
        document.getElementById("initPageContainer").style.display = "none";
    });
};
