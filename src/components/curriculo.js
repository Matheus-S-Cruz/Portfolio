import curriculo from '../images/curriculo.png'
import download from '../images/download.png'

export const Curriculo = () =>{

        const handleDownload = () => {
        const link = document.createElement('a');
        link.href = curriculo;
        link.download = 'curriculo.png';
        link.click();
    };

    return(
        <div className='Curriculo'>
            <h2>Meu Currículo</h2>
            <br/>
            <img src={curriculo} alt="Currículo" className='curriculo'/>
            <br/>
            <img src={download} onClick={handleDownload} className='download'></img>
            </div>
    )
}