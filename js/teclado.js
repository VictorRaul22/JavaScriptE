const d=document;
let x=0,y=0;
export function moveBall(e,ball,esenario){
    const $ball=d.querySelector(ball),
        $stage=d.querySelector(esenario),
        limitsBall=$ball.getBoundingClientRect(),
        limitsStage=$stage.getBoundingClientRect();
        //console.log(limitsBall,limitsStage)
    switch(e.keyCode){
        case 37:
            
            //move("left")
            if(limitsBall.left>limitsStage.left){
                x--;
                e.preventDefault();
            }
            break;
        case 38:
            //move("up")
            if(limitsBall.top>limitsStage.top){
                y--;
                e.preventDefault();
            }
            break;
        case 39:
            //move("right")
            
            if(limitsBall.right<limitsStage.right){
                x++;
                e.preventDefault();
            }
            break
        case 40:
            //move("down")
            if(limitsBall.bottom<limitsStage.bottom){
                e.preventDefault();
                y++;
            }
            
            break;
    }
    //console.log(x,y)
    $ball.style.transform=`translate(${x*10}px, ${y*10}px)`;
    //console.log($ball.style.transform);
}
export function shortcuts(e){
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(`ctrl: ${e.ctrlKey}`);
    // console.log(`alt: ${e.altKey}`);
    // console.log(`shift: ${e.shiftKey}`);
    // console.log(e);
    if(e.altKey && e.key==="a"){
        alert("has lanzado un alerta con el teclado");
    }
    if(e.altKey && e.key==="c"){
        confirm("Ha lanzado un comfirm")
    }
    if(e.altKey && e.key==="p"){
        prompt("Ha lanzado un aviso")
    }
}