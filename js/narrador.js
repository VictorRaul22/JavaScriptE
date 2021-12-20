const d=document;

export default function narrador(){
 const $select=d.querySelector(".select"),
  $speechTextarea=d.querySelector(".form-speak__text"),
  $speechBtn=d.querySelector(".form-speak__btn"),
  speechMessage=new SpeechSynthesisUtterance();
  let voices=[];
  d.addEventListener("DOMContentLoaded",e=>{
    speechSynthesis.addEventListener("voiceschanged",()=>{
        //console.log(speechSynthesis.getVoices())
        voices=speechSynthesis.getVoices()
        voices.forEach((voz)=>{
            const $option=d.createElement("option");
            $option.value=voz.name;
            $option.textContent=`${voz.name} - ${voz.lang}`;
            $option.classList.add("select__option");
            $select.insertAdjacentElement("beforeend",$option)
        })
    })
  })
  d.addEventListener("change",e=>{
      if(e.target.matches(".select")){
        speechMessage.voice=voices.find(voice=>voice.name === e.target.value)
      }
  })
  
  d.addEventListener("click",e=>{
      if(e.target===$speechBtn){
          speechMessage.text=$speechTextarea.value;
          speechSynthesis.speak(speechMessage)
      }
  })


}