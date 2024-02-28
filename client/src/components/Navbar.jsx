import { Link } from "react-router-dom";
import cv from "./../pages/cv2.png"

function Navbar() {
  return (
    <div className="bg-neutral-800 flex justify-between px-20 py-4">
      <Link to="/" className="text-white font-bold">
        <div className="screen flex place-items-center">
          <img src={cv} alt="Sistema1" className="w-10" />
          <h1 className="ml-3 font-mono">Sistema Curricular CCT</h1>
        </div>
      </Link>
      <div className="screen flex place-items-center">
        <ul className="flex gap-x-1">
          <li>
            <Link to="/" className="bg-slate-300 px-2 py-1 rounded-lg">Inicio</Link>
          </li>
          <li>
            <Link to="/datos-generales" className="bg-teal-700 px-2 mx-3 py-1 rounded-lg text-white">Crear un nuevo curriculum</Link>
          </li>
          <li>
            <Link to="/curriculums" className="bg-purple-600 px-2 py-1 rounded-lg text-white">Ver un curriculum registrado</Link>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;
