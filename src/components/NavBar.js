import linkedin from "../images/linkedin.png";
import email from "../images/email.png";
import github from "../images/github.png";
import instagram from "../images/instagram.png";

export const NavBar = () => {
  return (
    <div>
      <div className="w-full bg-gray-600 h-14 rounded-2xl mt-4 flex justify-between items-center">
        <div className="text-2xl flex justify-evenly w-1/2 h-full items-center">
        <a className="bg-green-700 h-full flex items-center justify-center w-20 text-center" href="#home">Home</a>
        <a href="#sobre" className="hover:bg-slate-200 h-full flex items-center justify-center w-18 text-center hover:text-black">Sobre</a>
        <a href="#materias" className="hover:bg-slate-200 h-full flex items-center justify-center w-22 text-center hover:text-black">Matérias</a>
        <a href="#tecnico" className="hover:bg-slate-200 h-full flex items-center justify-center w-20 text-center hover:text-black">Técnico</a>
        <a href="#PPE" className="hover:bg-slate-200 h-full flex items-center justify-center w-12 text-center hover:text-black">PPE</a>
        </div>

        <div id="contato" className="h-full w-[512px] flex flex-row items-center justify-evenly">
          <a href="https://www.linkedin.com/in/matheus-cruz-12ab9a248/">
            <img className="w-12" src={linkedin} />
          </a>
          <a href="https://github.com/Matheus-S-Cruz">
            <img className="w-12" src={github} />
          </a>
          <a href="https://www.instagram.com/matheussdacruz/">
            <img className="w-12" src={instagram} />
          </a>
          <a href="mailto:matheus_silva-cruz@estudante.sesisenai.org.br">
            <img className="w-12" src={email} />
          </a>
        </div>
      </div>
    </div>
  );
};
