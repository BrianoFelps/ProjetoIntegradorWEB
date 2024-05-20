import { ReactNode, useEffect, useState } from 'react';
import './InputWriteIdea.css'
import axios from 'axios';
// import imgplace from '../assets/temploemoji100porcentorealfi.svg';

interface Props{
    onClick?: () => void;
    classNm?: string;
    InputWriteIdeaId: number;
}

function Spacer(props: Props){
    const [ InputValue, setInputValue ] = useState<string>('');

    useEffect(() => {

        const fetchInputValue = async () =>{
          try{
            const response = await axios.get(`http://localhost:8080/pages/Elm/WI`);
            const WriteIdea = response.data.find((WriteIdea: {id: number}) => WriteIdea.id === props.InputWriteIdeaId);
            const WriteIdeaValue = WriteIdea ? WriteIdea.value : '';
            setInputValue(WriteIdeaValue);
            // console.log(`Tooltip input value: ${TooltipValue}`)
          } catch (error) {
            console.error('Error fetching tooltip input:', error)
          }
        }
    
        fetchInputValue();
      }, [props.InputWriteIdeaId])

      const updateValueToBackend = async (updatedValue: string) => {
        try {
    
           await axios.put('http://localhost:8080/pages/Elm', { id_property: 6, value: updatedValue, id: props.InputWriteIdeaId }); // Enviar o valor completo como string
    
          console.log(`Valor atualizado no banco de dados. Valor: ${updatedValue}`);
    
            
        } catch (error) {
            console.error(`Erro ao atualizar o valor: ${error}`);
        }
    };

    const handleInputChange = (newValue: string) => {
        setInputValue(newValue);
        updateValueToBackend(newValue);
      };

    return(
        <div id='Spacer' key={props.InputWriteIdeaId} onClick={props.onClick} className={props.classNm}>
            <input type="text" value={InputValue}
            onChange={(e) => handleInputChange(e.target.value)} />
        </div>
    )
}

export default Spacer;