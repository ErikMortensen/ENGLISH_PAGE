
import sound from '../assets/audios/test2.mp4';

export const Cards = () => {

    // const cargarImagen = require.context("../assets/images", true);

    let audio = new Audio(sound);
    
    const start = () => {
        audio.play();
    };

    const stop = () => {
        audio.pause();
        audio.currentTime = 0;
    };

  return (
    <>
        <h1 className="text-indigo-600 font-bold uppercase">Tarjeta</h1>

        {/* <img src="../assets/images/drink_1.jpg" alt="tomando agua" /> */}
        {/* <img src={cargarImagen(`./${drink_1}.jpg`)} alt="tomando agua" /> */}
        <button 
            onClick={start}
            className="bg-green-500 p-3 text-white font-bold hover:bg-green-700 cursor-pointer transition-all"
            >
            Play
        </button>

    </>
  )
}
