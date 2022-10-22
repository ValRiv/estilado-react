import data from "./example.json";
import comic from "../assets/img/ComicTitle.png";
import soldout from "../assets/img/soldout.png";
import styles from './styleCard.module.css';

const Tarjetas = () => {
  const filas = (element) => {
    const style = {
      background: "linear-gradient(111.87deg, #A6A6A6 0%, #2B2B2B 64.67%)",
      position: "absolute",
      width: "286px",
      height: "154px",
      left: "1120px",
      top: "602px",
      boxshadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderradius: "6px"

    }

    return (

      <tr>
        <td>
          <img src={element.picture} classname="super" alt="description of image"></img>
        </td>
        <tr>
          {element.stock_qty ? <div className={styles.card}><img src={comic} className="comic" alt="description of image"></img><h1>{element.title}</h1><h1>{element.price}</h1></div> : <div className={styles.soldout}><h1>{element.title}</h1><img src={soldout} classname="soldout" alt="description of image" ></img></div>}

        </tr>

      </tr>

    );
  };
  return (
    <table>
      {data.map((e) => filas(e))}
    </table>
  );
};
export default Tarjetas;