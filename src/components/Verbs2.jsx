import { verbsEng, verbsEsp } from "../data";


export const Verbs2 = () => {

    let contador = 0;

    const active = 'w-40 h-12 py-2 px-5 mx-20 mb-2 text-xl font-regular rounded-md shadow-md border border-purple-600 bg-purple-600 text-white';
    const inactive = 'w-40 h-12 py-2 px-5 mx-20 mb-2 text-xl font-regular text-gray-800 rounded-md shadow-md border border-purple-600 hover:bg-purple-600 hover:text-white transition-all ease-in duration-75';
    const acertaste = 'w-40 h-12 py-2 px-5 mx-20 mb-2 text-xl font-regular rounded-md shadow-md border border-green-600 bg-green-600 text-white';
    const erraste = 'w-40 h-12 py-2 px-5 mx-20 mb-2 text-xl font-regular rounded-md shadow-md border border-red-600 bg-red-600 text-white';
    

    const arregloMezclado = array => {
        for(let i = array.length -1; i>0; i--){
            let indiceAleatorio = Math.floor(Math.random() * (i+1));
            let temporal = array[i];
            array[i] = array[indiceAleatorio];
            array[indiceAleatorio] = temporal;
        }
    }

    arregloMezclado(verbsEng);
    arregloMezclado(verbsEsp);

    const handleClick = (e) => { 

      console.log(e);

        contador ++;

        const button = document.querySelector(`#${e.target.id}`);

        if(button.className == active){
          button.className = inactive;
        } else{
          button.className = active;
        }
    
        if(contador == 2){
          const todosLosBotones = document.getElementsByTagName('button');
    
          let btnSeleccionados = [...todosLosBotones];
    
          let elegidos = btnSeleccionados.filter( boton => boton.className == active);
      
          let id1 = (elegidos[0].id).split('_');
          let id2 = (elegidos[1].id).split('_');
    
          if( id1[1] === id2[1]){
            elegidos.forEach(elemento => elemento.className = acertaste);
            elegidos.forEach(elemento => elemento.disabled = true);
          } else {
            elegidos.forEach(elemento => elemento.className = erraste);

            setTimeout(() => {
              elegidos.forEach(elemento => elemento.className = inactive);              
            }, 400);
          }
    
          contador = 0;

          let faltan = btnSeleccionados.filter( boton => boton.className == inactive);
          if(faltan.length === 0){
            setTimeout(() => {
              alert('Buen trabajo!!');              
              btnSeleccionados.forEach(elemento => elemento.className = inactive);
              btnSeleccionados.forEach(elemento => elemento.disabled = false);
            }, 150);
          }
        }
    }

  return (
    <>  
      <h2>Verbs</h2>

        <table className="table-auto">
          <thead>
            <tr>
              <th>Ingles</th>
              <th>Español</th>
            </tr>
          </thead>
          <tbody>
            {verbsEng.map( (verb, index) => {
            return (
              <tr>
                <th>
                    <button
                      id={`eng_${verb.id}`}
                      className={ inactive }
                      onClick={handleClick}
                      disabled={false}
                    >
                      {verb.eng}
                    </button>
                </th>
                <th>
                  <button
                    id={`esp_${verbsEsp[index].id}`}
                    className={ inactive }
                    onClick={handleClick}
                    disabled={false}
                    >
                      {verbsEsp[index].esp}
                  </button>
                </th>
            </tr>   
            )           
            } )}
          </tbody>
        </table>


    </>
  )
}

