const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth:true
});
var crsr = document.querySelector(".cursor")
var main = document.querySelector("body")
var vd = document.querySelector(".frontpage")

main.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + -5 + "px"
    crsr.style.top = dets.y + -5 + "px"
})
var tl = gsap.timeline();
tl.from("nav",{
    y:-30,
    opacity:0,
    duration:0.8,
    delay:0.2,
    stagger:0.3
})
tl.from(".frontpage h1",{
    x:-300,
    opacity:0,
    duration:0.8,
    delay:0.2,
    stagger:0.3
})
tl.from(".frontpage .centerfront",{
    x:10000,
    opacity:0,
    duration:2,

    delay:0.2,
    stagger:0.4,

})
tl.from(".h2",{
    y:1000,
    opacity:0,
    duration:0.8,
    delay:0.2,
    stagger:0.3
})
 
var elem = document.querySelectorAll(".elem");

elem.forEach(function(val){
    
    val.addEventListener("mouseenter",function(dets){
       val.style.backgroundColor = "red"
       val.childNodes[3].style.opacity = 1
       crsr.style.opacity = 0
        })
    val.addEventListener("mouseleave",function(){
        val.style.backgroundColor = "transparent"
        val.childNodes[3].style.opacity = 0
        crsr.style.opacity = 1
        
    })
    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].left = dets.x+"px"
        val.childNodes[3].top = dets.y+"px"
        
                
    })
})
