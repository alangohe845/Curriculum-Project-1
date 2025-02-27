import { Route, Routes } from "react-router-dom";
import swal from 'sweetalert';
import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import { TaskContextProvider } from "./context/TaskProvider";
import DatosGenerales from "./components/cv";
import Escolaridades from "./components/Escolaridades";

import Navbar from "./components/Navbar";
import VistaTareas from "./components/continue";
import VistaContinua from "./components/continuar";
import Habilidades from "./components/habilidades";
import Experiencia from "./components/Experiencia";
import Hobbies from "./components/hobbies";
import Proyectos from "./components/proyectos";
import Redes from "./components/redes";
import Certificados from "./components/certificados";
import Idiomas from "./components/idiomas";
import Excel from "./components/excel";
import VerCurriculum from "./components/setCurriculum";
import DeleteDatosGenerales from "./components/delete";
import VistaCurri from "./pages/VerCurriculum";
import HabilidadesEdit from "./components/updates/habilidadesUpdate";

function App() {
  return (
    <div className="bg-gray-300 h-screen">
      <Navbar />
      <div className=" mx-auto">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/datos-generales" element={<DatosGenerales />} />
            <Route path="/excel" element={<Excel />} />
            <Route path="/curriculum" element={<VistaContinua />} />
            <Route path='curriculum/:id'>
              <Route path='escolaridad' element={<Escolaridades />}></Route>
              <Route path='habilidades' element={<Habilidades />}></Route>
              <Route path='experiencia' element={<Experiencia />}></Route>
              <Route path='hobbies' element={<Hobbies />}></Route>
              <Route path='proyectos' element={<Proyectos />}></Route>
              <Route path='redes' element={<Redes />}></Route>
              <Route path='certificados' element={<Certificados />}></Route>
              <Route path='idiomas' element={<Idiomas />}></Route>
              <Route path='ver' element={<VerCurriculum />}></Route>
              <Route path='delete' element={<DeleteDatosGenerales />}></Route>
              <Route path='update' element={<VistaCurri />}></Route>

              {/*  <Route path='otros' element={<Otros />}></Route>
                <Route path='crear' element={<CrearCurriculum />}></Route>
                <Route path='ver' element={<VerCurriculum />}></Route>
                <Route path='modificar' element={<ModificarCurriculum />}></Route> */}
            </Route>
            <Route path='modify/:id/'>
                <Route path="habilidades"  element={<HabilidadesEdit />}></Route>
              </Route>
            <Route path="/curriculums" element={<VistaTareas />} ></Route>
            {/* <Route path='/curriculums/:id/delete' element={<DeleteDatosGenerales/>}></Route> */}

          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
