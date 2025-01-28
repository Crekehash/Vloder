var hassan = document.querySelector("#m1a")
var yousaf = document.querySelector("#m1l")
var check=0
hassan.addEventListener("mouseover",function(){
if(check==0){
yousaf.style.opacity = "100%"
}
check = 1

})
hassan.addEventListener("mouseout",function(){
if(check==1){
yousaf.style.opacity = "0%"
}
check = 0

})





var sdfsd = document.querySelector("#m2a")
var dfgd = document.querySelector("#m2l")
var check=0
sdfsd.addEventListener("mouseover",function(){
if(check==0){
dfgd.style.opacity = "100%"
}
check = 1

})
sdfsd.addEventListener("mouseout",function(){
if(check==1){
dfgd.style.opacity = "0%"
}
check = 0

})
