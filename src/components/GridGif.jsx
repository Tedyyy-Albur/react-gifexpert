
import { GifItem } from "../components/GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GridGif = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  /*
   const [images, setimages] = useState([]);

   const getImages = async ()=>{
     const newImages = await getGifs(category);
     setimages(newImages);
   }

   useEffect (()=>{
       getImages();
   },[] )
*/

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading &&(<h2>Cargando </h2>)
          
      }
      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem key={image.id}
              {...image} />
          ))
        }

      </div>

    </>
  )
}
