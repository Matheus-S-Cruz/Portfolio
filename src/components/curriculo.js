import { useRef } from 'react';
import curriculo from '../images/curriculo.png'
import download from '../images/download.png'

export const Curriculo = () =>{

        const handleDownload = () => {
        const link = document.createElement('a');
        link.href = curriculo;
        link.download = 'curriculo.png';
        link.click();
    };

    const imageRef = useRef();

    return(
        <div className="curriculo-container p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Meu Currículo</h2>
        <div className="flex flex-col items-center">
          <img
            ref={imageRef}
            src={curriculo}
            alt="Visualização do Currículo"
            className="curriculo w-full max-w-lg mb-4 border border-gray-300 rounded-lg"
          />
          <button
            onClick={handleDownload}
            className="download-button flex items-center bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            <img src={download} alt="Download do currículo" className="w-6 h-6 mr-2" />
            Baixar Currículo
          </button>
        </div>
      </div>
    )
}