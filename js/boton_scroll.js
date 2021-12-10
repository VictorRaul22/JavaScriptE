const d=document,
w=window;
export default function scrollTopButton(btn){
    const $scrollBtn=d.querySelector(btn);
    w.addEventListener("scroll",e=>{
        let scrollTop=w.pageXOffset || w.scrollY;
        if(scrollTop>600){
            $scrollBtn.classList.remove("hidden");
        }else{
            $scrollBtn.classList.add("hidden");
        }
    
    });
    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavio:"smooth",
                top:0
            })
        }
    })

}