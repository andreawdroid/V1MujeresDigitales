import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className='px-4 py-5 bg-white border-b'>
                 <div className='md:flex md:justify-between items-center'>
                <div className='text-green-600 font-black text-center md:text-4xl'>
                    <div className="flex flex-col items-center">
                        EducateYa
                        <div className='text-xs md:text-xs'>
                            <Link to="src/img/click.png">
                            <img src='/src/img/click.png' alt='Icono' />

                            </Link>
                        </div>
                    </div>
                </div>

                <input
                    type="search"
                    placeholder='Buscar Ofertas'
                    className='rounded-lg lg:w-96 block p-2 border'
                />
                <div className='flex items-center gap-4'>
                    <Link
                        to="/cursos"
                        className='font-bold uppercase'
                    >Ofertas</Link>

                    <button
                        type="button"
                        className='text-white text-sm bg-green-600 p-3 rounded-md uppercase font-bold'
                    >
                        Cerrar sesion
                    </button>
                </div>

            </div>
        </header>
    )
}

export default Header