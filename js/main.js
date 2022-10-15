

pos_left = 0
pos_bottom  = 0


onkeydown = function(e){

    console.log(e)
    if(e.key == "ArrowRight"){
        // document.getElementById('man').src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0158055d-8402-444a-93b4-b88a4a8d03f5/d4fp8aa-7c7108f1-dad7-4dc9-8c9b-f1fc2b168415.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxNTgwNTVkLTg0MDItNDQ0YS05M2I0LWI4OGE0YThkMDNmNVwvZDRmcDhhYS03YzcxMDhmMS1kYWQ3LTRkYzktOGM5Yi1mMWZjMmIxNjg0MTUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mLgGGqxCprmfu-oZ6SS7-WsmzXpzVXVAoKbBHbGATrs"
        document.getElementById("myDiv").style.transform = "rotateY(0deg)";
        document.getElementById("myDiv").style.left = pos_left+"px"
        pos_left += 30
    }
    
    if(e.key == "ArrowLeft"){
        document.getElementById("myDiv").style.transform = "rotateY(180deg)";
        document.getElementById("myDiv").style.left = pos_left+"px"
        pos_left += -30
    }
        

    if(e.key == "ArrowDown"){
        document.getElementById("myDiv").style.bottom = pos_bottom+"px"
        pos_bottom += 30
    }

    if(e.key == "ArrowUp"){
        document.getElementById("myDiv").style.bottom = pos_bottom+"px"
        pos_bottom += -30
    }

}































// onkeydown = function(e){
    


    // if(e.keyCode >= 48 && e.keyCode <= 57){
    //     this.alert("reqem daxil etmek olmaz")
    // }else{
    //     console.log(e.key + "-" +e.keyCode)
    // }


    // if(e.keyCode  == "191" || e.keyCode == "190"){
    //     console.log(e.key+'- Daxil etmek qadagandir');
    // }else{
    //     console.log(e.key + "-" +e.keyCode)
    // }

// }