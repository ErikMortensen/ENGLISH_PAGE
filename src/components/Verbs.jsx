
import { verbs } from "../data";

export const Verbs = () => {

  let contador = 0;

  const active = 'py-2 px-5 mx-20 text-xl font-regular rounded-md border border-purple-600 bg-purple-600 text-white';
  const inactive = 'py-2 px-5 mx-20 text-xl font-regular text-gray-800 rounded-md border border-purple-600 hover:bg-purple-600 hover:text-white transition-all ease-in duration-75';
  const acertaste = 'py-2 px-5 mx-20 text-xl font-regular rounded-md border border-green-600 bg-green-600 text-white';
 
  // luego de acertar
  /*
    *   cursor-not-allowed
    * disabled
    *
  */

 
  // const handleClick = (e) => {
  //   console.log(e);
  //   console.log(e.target.id);
  //   !(e.target.id);
  // };

  const handleClick = (e) => { 

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
        alert('acertaste!!');
        elegidos.forEach(elemento => elemento.disabled = true);
      } else {
        elegidos.forEach(elemento => elemento.className = inactive);
        alert('Erraste!');
      }

      contador = 0;
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
            {verbs.map( (verb, index) => {
            return (
              <tr>
                <th>
                    <button
                      id={`eng_${index}`}
                      className={ inactive }
                      onClick={handleClick}
                      disabled={false}
                    >
                      {verb.eng}
                    </button>
                </th>
                <th>
                  <button
                    id={`esp_${index}`}
                    className={ inactive }
                    onClick={handleClick}
                    disabled={false}
                    >
                      {verb.esp}
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
