const d=document;
export default function sorteo(items,btn){
    const $items=d.querySelectorAll(items),
        $btn=d.querySelector(btn);
    console.log($items)
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            let numero=Math.floor(Math.random() * (($items.length-1) - 0)) + 0;
                alert($items[numero].textContent)
        }
    })
}