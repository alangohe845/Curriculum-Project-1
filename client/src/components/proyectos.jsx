import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Proyectos = () => {
    const initialState = {
        nombre_proyecto: '',
        descripcion: '',
        estado: '',
        FK_datos_generales: '', // Aquí se asignará el ID obtenido de la ruta
    };

    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
    const params = useParams();
    const { id } = params; // CORRECTO, porque accede a la propiedad id del objeto params

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Asignar el ID obtenido de la ruta al campo fk_datos_generales
        setFormData((prevFormData) => ({
            ...prevFormData,
            FK_datos_generales: id,
        }));

        const camposRequeridos = ['nombre_proyecto', 'descripcion', 'estado'];
        const camposVacios = camposRequeridos.filter(campo => !formData[campo].trim());

        if (camposVacios.length > 0) {
            toast.error("Favor de llenar todos los campos");
            return;
        }

        // Envío de la solicitud HTTP dentro del bloque then
        axios.post('http://localhost:4000/proyectos', formData)
            .then(response => {
                console.log('Datos enviados correctamente');
                setFormData(initialState);
                toast.success("Datos registrados correctamente",
                    {
                        onClose: () => {
                            //   navigate('/')
                        },
                        autoClose: 500,
                    },
                );
            })
            .catch(error => {

                console.error('Error al enviar datos:', error);
            });
    };

    const handleContinue = (e) => {
        e.preventDefault();
        // Asignar el ID obtenido de la ruta al campo fk_datos_generales
        setFormData((prevFormData) => ({
            ...prevFormData,
            FK_datos_generales: id,
        }));

        const camposRequeridos = ['nombre_proyecto', 'descripcion', 'estado'];
        const camposVacios = camposRequeridos.filter(campo => !formData[campo].trim());

        if (camposVacios.length > 0) {
            toast.error("Favor de llenar todos los campos");
            return;
        }

        // Envío de la solicitud HTTP dentro del bloque then
        axios.post('http://localhost:4000/proyectos', formData)
            .then(response => {
                console.log('Datos enviados correctamente');
                setFormData(initialState);
                toast.success("Registrando datos... Procediendo a Redes sociales",
                    {
                        onClose: () => {
                            navigate(`/curriculum/${id}/redes`)
                        },
                        autoClose: 500,
                    },
                );
            })
            .catch(error => {

                console.error('Error al enviar datos:', error);
                console.log(FK_datos_generales)
            });
    };

    const handleCancelar = () => {
        setFormData(initialState);
    };

    return (
        <>
            <div className="container mx-auto">
                <ToastContainer />
                <h1 className="text-center text-3xl font-bold my-8">Proyectos personales y profesionales</h1>
        <h2 className="text-center text-xl font-bold my-8">Describa de manera breve algunos de los proyectos en que ha tenido participacion.</h2>
                <form className="border rounded p-4 mt-4 text-start" method='post'>
                    <div className="grid grid-cols-3 gap-4">
                        <div className='mb-5'>
                            <label className="block mb-1">Nombre del proyecto (Describa de manera profesional):</label>
                            <input type="text" placeholder="Ejem: Programacion Full Stack con JS" name="nombre_proyecto" value={formData.nombre_proyecto} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div>
                            <label className="block mb-1">Descripcion del proyecto:</label>
                            <textarea type="text" placeholder="Sea breve pero certero en su habilidad" name="descripcion" value={formData.descripcion} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className='mb-5'>
                            <label className="block mb-1">Estado del proyecto:</label>
                            <input type="text" placeholder="Ejem: Programacion Full Stack con JS" name="estado" value={formData.estado} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" required />
                        </div>

                    </div>
                    <div className="flex justify-center mt-6">
                        <button type="submit" onClick={handleContinue} className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mr-4">Aceptar y seguir con Redes Sociales</button>
                        <button type="submit" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Aceptar y registrar otro campo</button>
                        <button type="button" onClick={handleCancelar} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancelar</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Proyectos;
