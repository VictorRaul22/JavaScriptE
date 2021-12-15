const d=document,
    n=navigator;
export default function getGeolocation(id){
    const $div=d.getElementById(id),
    option={
      enableHighAccuracy:true,
      timeout:5000,
      maximumAge:0
    };
    const success=position=>{
      let coords=position.coords;
      $div.innerHTML=`
        <p>Tu posicion actual es: </p>
        <ul>
            <li>Latitud: <b>${position.coords.latitude}</b></li>
            <li>Longitud: <b>${position.coords.longitude}</b></li>
            <li>Precision: <b>${position.coords.accuracy}</b> metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
      `
    };
    const error=error=>{
      $div.innerHTML=`<p><mark>Error ${error.code}:${error.message}</mark></p>`
    };
    n.geolocation.getCurrentPosition(success,error,option)

}