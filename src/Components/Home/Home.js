//Kartlar eklenecek

import "./style.css";
import img from "../../Assets/telcubuk.png";
import img2 from "../../Assets/filmasin.png";
import img3 from "../../Assets/telhalat.png";
import img4 from "../../Assets/celik.png";

import Button from "react-bootstrap/Button";
import Card from "./Card.js";

function Home() {
  return (
    <div className="wrapper">
      <Card
        img={img}
        title="İNŞAAT DEMİRİ"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
      <Card
        img={img2}
        title="FİLMAŞİN"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />

      <Card
        img={img3}
        title="DEMİR HALAT"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />

      <Card
        img={img4}
        title="ÇELİK"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />

      <Card
        img={img2}
        title="FİLMAŞİN"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
      <Card
        img={img4}
        title="ÇELİK"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
    </div>
  );
}

export default Home;
