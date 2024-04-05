import React, { useState, useRef, useEffect } from 'react';
import './InputTypeText.css';

interface Props {
    placeholder?: string;
    rows?: number;
}

function Input(props: Props) {
    const [title, setTitle] = useState(props.placeholder || '');

    const [content, setContent] = useState('');

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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
    }, []);

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
        setContent(e.target.value);
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    return (
        <div className="custom-textarea-container">
            <input
                type="text"
                value={title}
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
                value={content}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                ref={textareaRef}
            ></textarea>
        </div>
    );
}

export default Input;
