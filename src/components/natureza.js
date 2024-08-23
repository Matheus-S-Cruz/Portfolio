import { useRef } from 'react';
import download from '../images/download.png'
import certificado from '../images/certificado.pdf'
import certificadoimg from '../images/certificado.png'

export const Natureza = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = certificado;
        link.download = 'certificado.pdf';
        link.click();
    };

    const imageRef = useRef();

    return (
        <div>
            <h1 className='py-16 text-2xl font-semibold'>Natureza</h1>
            <div>
                <div className="curriculo-container p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center">Certificados</h2>
                    <div className="flex flex-col items-center">
                        <img
                            ref={imageRef}
                            src={certificadoimg}
                            alt="Visualização do Certificado"
                            className="curriculo w-full max-w-lg mb-4 border border-gray-300 rounded-lg"
                        />
                        <button
                            onClick={handleDownload}
                            className="download-button flex items-center bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                        >
                            <img src={download} alt="Download do certificado" className="w-6 h-6 mr-2" />
                            Baixar Certificado
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}