import image1 from "../../../assets/img/1.jpg";
import image2 from "../../../assets/img/2.jpg";
import image3 from "../../../assets/img/3.jpg";
import image4 from "../../../assets/img/4.jpg";
import image5 from "../../../assets/img/5.jpg";
import image6 from "../../../assets/img/6.jpg";
import image7 from "../../../assets/img/7.jpg";
import image8 from "../../../assets/img/8.jpg";
import image9 from "../../../assets/img/9.jpg";
import image10 from "../../../assets/img/10.jpg";
import image11 from "../../../assets/img/11.jpg";
import image12 from "../../../assets/img/12.jpg";
import image13 from "../../../assets/img/13.jpg";
import image14 from "../../../assets/img/14.jpg";
import image15 from "../../../assets/img/15.jpg";
import image16 from "../../../assets/img/16.jpg";
import image17 from "../../../assets/img/17.jpg";
import image18 from "../../../assets/img/18.jpg";
import image19 from "../../../assets/img/19.jpg";
import image20 from "../../../assets/img/20.jpg";

export default function Collection() {
  return (
    <>
    <h2 className="pt-24 text-center bg-accent-white-50 text-3xl font-bold px-6 font-Poppins text-accent-green-200">Gallery</h2>
    <div className="grid grid-cols-2 bg-accent-white-50 md:grid-cols-4 gap-4  p-20" data-aos="fade-down"
              data-aos-delay="400">
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
          <img className="h-auto max-w-full rounded-lg" src={image10} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image8} alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image12} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image13} alt="" />
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
          <img className="h-auto max-w-full rounded-lg" src={image16} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image17} alt="" />
        </div>
      </div>
    </div>
    </>
  );
}
