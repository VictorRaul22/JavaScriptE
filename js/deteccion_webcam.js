const d=document,
 n=navigator;
export default function webCam(id){
    const $video=d.getElementById(id);
    console.log(n.mediaDevices.getUserMedia);

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true}).then(stream=>{
            $video.srcObject=stream;
            $video.play();

        }).catch(err=>{
            $video.insertAdjacentHTML("beforebegin",`<p>Susedio el diguiente error <mark>${err}</mark></p>`)
        })
    }
}