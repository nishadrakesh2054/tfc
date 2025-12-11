import Image from "next/image";

export default function Preloader() {
  return (
    <div id="preloader" className="preloader">
      <div className="animation-preloader">
        <div className="spinner">
          {" "}
          <Image
            src="/assets/img/loader1.png"
            alt="Loader"
            width={100}
            height={100}
            className="spinner-logo p-0 m-0"
            priority
            loading="eager"
          />
        </div>

        <p className="text-center">Loading ... </p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
