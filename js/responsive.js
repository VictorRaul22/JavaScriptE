const d = document,
    w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
    let cargado = false;
    let breakpoint = w.matchMedia(mq);
    const responsive = (bk) => {
        if (bk.matches && !cargado) {
            d.getElementById(id).innerHTML = desktopContent;
            cargado = true;
        }
        if (!bk.matches) {
            d.getElementById(id).innerHTML = mobileContent;
            cargado = false;
        }

    }

    w.addEventListener("resize", () => responsive(breakpoint));
    responsive(breakpoint);

    //OTRA FORMA DE HACER
    // const responsive2=(e)=>{
    //     if(e.matches){
    //         d.getElementById(id).innerHTML=desktopContent;
    //     }else{
    //         d.getElementById(id).innerHTML=mobileContent;
    //     }
    //  }
    //  breakpoint.addListener(responsive2)
    //  responsive2(breakpoint)
}