import stuntingImage from "../../assets/images/stunting.jpg";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className="background-container">
      {/* Background image applied to the container */}
      <style>{`
        .background-container {
          background-image: url(${stuntingImage});
          background-size: cover;
          background-position: center;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative; /* Needed for z-index */
        }

        .background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Black color with 50% opacity */
        }

        .content {
          position: relative; /* Ensure text is above the overlay */
          z-index: 1; /* Set z-index to appear above the overlay */
          color: white;
          font-weight: 600;
        }
      `}</style>

      {/* Overlay for opacity */}
      <div className="background-overlay"></div>

      {/* Content inside the page */}
      <div className="container text-center content">
        <h1 className="display-4">Terima Kasih !</h1>
        <h1 className="lead">Kiriman Anda telah diterima.</h1>
        <hr className="my-4" />
        <h5>Kami menghargai partisipasi Anda.</h5>

        <a
          className="mt-4 p-3 btn btn-dark"
          href="/leaflet.pdf"
          target="_blank"
          download
        >
          Download Leaflet
        </a>
      </div>
    </div>
  );
};

export default Thankyou;
