import React from 'react'
import './images.css'
function Image() {
  return (
    <div>
        <div className='imageDiv'><img src="./src/components/sources/photo1.png" alt="" className='image'/></div>
        <hr />
        <div className='yazi'>
            
            <div><img src="./src/components/sources/baskan.png" alt=""/></div>
            <div><div>Evliya Çelebi, seyahatnamesinde gezip gördüğü yerler arasında bağ, bahçe, bostanlardan söz ederken bağlık-bahçelik bu yerlere her defasında "Bağ-ı Meram" Meram Bağı ifadesini kullanmaktadır . Hatta buraların Konya’nın Meramı gibi olduğunu ifade etmektedir. Konya'nın son kilisesi olan Aziz Pavlus Kilisesi burada bulunmaktadır.</div></div>
        </div>
        <hr />
        <div className='imageDiv'><img src="./src/components/sources/photo2.png" alt="" className='image'/></div>
    </div>
    
  )
}

export default Image