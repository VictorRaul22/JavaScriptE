export function reloj(btnI,btnD,pintar,reloj){
    const d=document; 
    let intervalId=0;
    d.addEventListener("click",(e)=>{
        
       
        if(e.target.matches(btnI)){
            let where=document.querySelector(pintar);
            let dat;
            intervalId=setInterval(()=>{
                dat=new Date();
                where.textContent=`${dat.getHours()}:${dat.getMinutes()}:${dat.getSeconds()}`;
                console.log(where);
            },1000);
            document.querySelector(reloj).classList.add("active-reloj");
            document.querySelector(btnI).setAttribute("disabled","true");
           
        }
        if(e.target.matches(btnD)){
            document.querySelector(btnI).setAttribute("disabled","false");
            clearInterval(intervalId)
            document.querySelector(pintar).textContent=null;
            document.querySelector(reloj).classList.remove("active-reloj");
            document.querySelector(btnI).disabled=false;
        }
    })
}