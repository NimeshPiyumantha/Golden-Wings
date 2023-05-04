import Header from "../../components/Header";
import image3 from "../../assets/img/3.jpg";
import image4 from "../../assets/img/4.jpg";
import image5 from "../../assets/img/5.jpg";
import image6 from "../../assets/img/6.jpg";
import image7 from "../../assets/img/7.jpg";
import image8 from "../../assets/img/8.jpg";
import image9 from "../../assets/img/9.jpg";
import image10 from "../../assets/img/10.jpg";
import image11 from "../../assets/img/11.jpg";
import image12 from "../../assets/img/12.jpg";
import image13 from "../../assets/img/13.jpg";
import image14 from "../../assets/img/14.jpg";
import image15 from "../../assets/img/15.jpg";
import image16 from "../../assets/img/16.jpg";
import image17 from "../../assets/img/17.jpg";

export default function Gallery() {
  return (
    <>
      <Header />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-20 p-10">
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image5} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image3} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image4} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image7} alt="" />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image10}
              alt=""
            />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image8} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image12}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image13}
              alt=""
            />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image6} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image9} alt="" />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image16}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image17}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image5} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image3} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image4} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image7} alt="" />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image10}
              alt=""
            />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image8} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image12}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image13}
              alt=""
            />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image6} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image9} alt="" />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image16}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image17}
              alt=""
            />
          </div>
        </div>
        
      </div>
    </>
  );
}
