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
    <img src="public/images/Mund_femen.jpg"></img>
      <img src="public/images/tecni_Nacio.jpeg"></img>
      <img src="public/images/ligaBetplay.jpg"></img>
      <img src="public/images/sele-Colombia.jpg"></img>
      <img src="public/images/lucho.webp"></img>
      <img src="public/images/Mund_femen.jpg"></img>
          
        </div>
      );
    };



export default Galeria;
