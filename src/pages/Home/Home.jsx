import stuntingImage from "../../assets/images/stunting.jpg";
import ownerImage from "../../assets/images/foto.jpeg";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#022031", minHeight: "100vh", color: "white", }}>
      {/* Jumbotron */}
      <div
        className="jumbotron jumbotron-fluid position-relative d-flex align-items-center"
        style={{
          backgroundImage: `url(${stuntingImage})`,
          backgroundSize: "cover",
          color: "white",
          textAlign: "center",
          height: "auto",
          minHeight:"500px",
        }}
      >
        <div className="position-absolute w-100 h-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
        <div className="container position-relative z-index-1">
          <h1 className="display-4" style={{ color: "#32EE88", fontWeight: "600" }}>Apa Itu Stunting ?</h1>
          <p className="lead">Stunting adalah kondisi yang ditandai dengan kurangnya tinggi badan anak apabila dibandingkan dengan anak-anak seusianya.</p>
          <hr className="my-4" />
          <p>Mulai Test dengan mengisi form data anak anda dengan mengklik tombol dibawah sayang ya .</p>
          <a className="btn btn-primary btn-lg mb-3" href="/Survey" role="button" style={{ backgroundColor: "#022031", width: "200px", border: "none" }}>Mulai Test</a>
        </div>
      </div>

      {/* About the Website */}
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center p-4">
            <h2 className="p-4" style={{ color: "#32EE88", fontWeight: "600" }}>Coin Emas.</h2>
            <p>Adalah Suatu aplikasi penghitung gizi memiliki peran yang penting dalam upaya pencegahan stunting, terutama pada anak-anak. Dengan menggunakan aplikasi ini, orang tua dan pengasuh dapat dengan mudah mengontrol dan memantau asupan gizi anak mereka secara harian.</p>
          </div>
        </div>  
      </div>

      {/* Owner Section */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center p-4">
            <h5 className="p-3">Made By</h5>
            <img src={ownerImage} alt="Owner" className="img-thumbnail" style={{ width: "130px" }} />
            <h4 className="p-3"> Gati Dwi Cahyani Amd.Gz</h4>
            <p>Supported By</p>
            <p>RSUD Kramat Jati Jakarta Timur</p>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Home;
