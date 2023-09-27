import useServicios from "../hooks/useServicios";
import PreviewServicios from "../components/PreviewServicio";


const Servicios = () => {

  const { servicios } = useServicios();
  console.log(servicios)
  return (
    <>
      <h1 className='text-4xl font-black'>SERVICIOS</h1>
      <div className="bg-white shadow-md mt-10 rounded-lg">
        {servicios.length ? servicios.map(curso => (
          <PreviewServicios
            key={servicios._id}
            servicios={servicios}
          />
        )) : <p className="text-center text-gray-600 uppercase">No hay Servicios</p>}
      </div>
    </>
  )
}

export default Servicios