import {useState, useEffect} from 'react'

function Example() {
    const [count, setCount] = useState(0);

    useEffect( // usato per far avvenire cose al variare degli stati
        // al variare del valore di una delle dipendenze invoca il metodo definito
        () => { // funzione che definisce cosa deve essere fatto quando una delle dipendenze cambia
            document.title = `Conteggio: ${count}`;
        },
        [count] // dipendenze di cui lo useEffect è in ascolto
        // [x] // se le dipedenze ci sono lo useEffect invoca il metodo al variare di una qualsiasi delle variabili definite
        //     // se le dipendenze non ci sono lo useEffect invoca il metodo ad ogni update del componente
        // [ ] // se le dipendenze sono un array vuoto lo useEffect invoca il metodo solo alla creazine del componente
    );

    const handleClick = () => {
        setCount(count + 1);
        //document.title = `Conteggio: ${count}`;
    };

    return (
        <div>
            <p>Conteggio: {count}</p>
            <button onClick = {handleClick}>Incrementa</button>
        </div>
    );
}

export default Example; 