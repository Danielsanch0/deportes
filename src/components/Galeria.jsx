import { useEffect, useRef } from 'react'; // Importa solo los hooks necesarios


const Galeria = () => {
   
    const galleryRef = useRef(null); // Referencia al contenedor de la galería

    useEffect(() => {
      const scrollInterval = setInterval(() => {
        if (galleryRef.current) {
          const gallery = galleryRef.current;
          const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth; // El máximo que se puede desplazar
          
          // Si se ha alcanzado el final del desplazamiento, vuelve al inicio
          if (gallery.scrollLeft >= maxScrollLeft) {
            gallery.scrollLeft = 0; // Reinicia al principio
          } else {
            gallery.scrollLeft += 100; // Incrementa el desplazamiento para moverse
          }
        }
      }, 1000); // Ajusta el tiempo del intervalo
  
      return () => clearInterval(scrollInterval); // Limpia el intervalo al desmontar el componente
    }, []);
      return (
        <div className="galery" ref={galleryRef}>
          <img src="public/images/img1.jpg"></img>
      <img src="public/images/img2.jpg"></img>
      <img src="public/images/img3.jpg"></img>
      <img src="public/images/img4.jpg"></img>
      <img src="public/images/img5.png"></img>
          {/* Agrega más imágenes según sea necesario */}
        </div>
      );
    };



export default Galeria;
