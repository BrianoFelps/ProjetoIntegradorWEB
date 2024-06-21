import React, { useState, useRef, useEffect } from 'react';
import './InputTypeText.css';
import axios from 'axios';
import { EQ_API_URL } from '../utils/EquilibriumApiConfig';

interface props {
    UserId: number | undefined;
}

function Input(props: props) {
    const [valueContent, setValueContent] = useState<string>('');
    const [ContentLoaded, setContentLoaded] = useState(false);
    const [content, setContent] = useState('');

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Função para buscar os valores correspondentes aos Elementos
        const fetchContentValueAndCategory = async () => {
            try{

                const response = await axios.get(`${EQ_API_URL}/pages/Elm/props`);
                const titleValue = response.data.find((element: any) => element.category === 'InputTitle' && element.user_id == props.UserId)?.value;
                // console.log(`titleValues: ${titleValue}`)
                const textAreaValue = response.data.find((element: any) => element.category === 'InputText' && element.user_id == props.UserId)?.value;
                // console.log(`textAreaValue: ${textAreaValue}`)

                setValueContent(titleValue || '');
                setContent(textAreaValue || '');
                setContentLoaded(true);

                // console.log(content)

                if (!titleValue) {
                    await axios.post(`${EQ_API_URL}/pages/Elm`, { id_property: 2, value: '', user_id: props.UserId, page_id: 1 });
                  }
                if (!textAreaValue) {
                    await axios.post(`${EQ_API_URL}/pages/Elm`, { id_property: 3, value: '', user_id: props.UserId, page_id: 1 });
                }
            } catch (error) {
                console.error(`Error fetching element value: ${error}`);
            }
        };
        
        fetchContentValueAndCategory()

        const handleScroll = () => {
            if (textareaRef.current && titleRef.current) {
                const textareaRect = textareaRef.current.getBoundingClientRect();
                const titleRect = titleRef.current.getBoundingClientRect();
                
                if (textareaRect.bottom < titleRect.bottom) {
                    titleRef.current.style.visibility = 'hidden';
                } else {
                    titleRef.current.style.visibility = 'visible';
                }
            }
        };

        const textarea = textareaRef.current;
        if (textarea) {
            textarea.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (textarea) {
                textarea.removeEventListener('scroll', handleScroll);
            }
        };

    }, [props.UserId]);

    const updateContentToBackend = async (updatedValue: string, inputType: string) => {
        console.log(`Valor do user_id: ${props.UserId}`);
        try {
            let IdProperty: number;
            // Determine qual propriedade usar com base no tipo de entrada
            if (inputType === 'title') {
                IdProperty = 2; // Use o id_property correspondente ao título
            } else if (inputType === 'textarea') {
                IdProperty = 3; // Use o id_property correspondente à área de texto
            } else {
                throw new Error('Tipo de entrada não reconhecido');
            }

            console.log(`Valor da id_property: ${IdProperty}`)

            const response = await axios.put(`${EQ_API_URL}/pages/Elm`, { value: updatedValue, id_property: IdProperty, user_id: props.UserId });
            if (response.status === 404) {
                // Se a atualização falhar porque o elemento não existe, crie um novo
                await axios.post(`${EQ_API_URL}/pages/Elm`, { value: updatedValue, id_property: IdProperty, user_id: props.UserId, page_id: 1 });
                console.log(`Novo valor inserido no banco de dados. Valor: ${updatedValue}`);
            } else {
                console.log(`Valor atualizado no banco de dados. Valor: ${updatedValue}`);
            }
            
        } catch (error) {
            console.error(`Erro ao atualizar o valor: ${error}`);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Tab') {
            e.preventDefault();

            const textarea = e.currentTarget;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;

            const newValue =
                textarea.value.substring(0, start) +
                '    ' +
                textarea.value.substring(end);

            setContent(newValue);

            textarea.selectionStart = textarea.selectionEnd = start + 4;

        } else if (e.key === 'Enter' && e.target === textareaRef.current) {


        } else if (e.key === 'Enter') {

            setContent(prevContent => prevContent + '\n');

        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const updatedValue = e.target.value;
        setContent(updatedValue);
        updateContentToBackend(updatedValue, 'textarea')
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedValue = e.target.value;
        setValueContent(e.target.value);
        updateContentToBackend(updatedValue, 'title')
    };

    return (
        <div className="custom-textarea-container">
            <input
                type="text"
                value={
                    ContentLoaded !== false ? valueContent : ''
                }
                onChange={handleTitleChange}
                className="custom-title"
                placeholder="Título"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        textareaRef.current?.focus();
                    }
                    
                }}
                
            />
            <textarea
                id="Input"
                placeholder="Conteúdo"
                value=
                {
                    ContentLoaded !== false ? content : ''
                }
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                ref={textareaRef}
            ></textarea>
        </div>
    );
}

export default Input;
