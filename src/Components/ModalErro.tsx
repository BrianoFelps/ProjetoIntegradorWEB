import React from 'react';
import './ModalErro.css'; // Adicione estilos conforme necessário
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

interface ModalProps {
  show?: boolean;
  onClose?: () => void;
  title?: string;
  message?: string;
}

const ModalErro: React.FC<ModalProps> = ({ show, onClose, title, message }) => {

  if (!show) return null;

  return (
    <div className="modal-overlay">
        <div className="modal-content">
            <div className='modal-errorsymb'>
              <FontAwesomeIcon className='i' icon={faTimesCircle}></FontAwesomeIcon>
            </div>
            <div className='modal-title'>
                <h3 className='t'>{title}</h3>
            </div>
            <div className="modal-body">
                <p className='m'>{message}</p>
            </div>
            <div className='btnArea'>
                <button className='btnModal' onClick={onClose}>Ok</button>
            </div>
        </div>
    </div>
  );
};

export default ModalErro;