import React, { useState } from "react";
import { Button, Container, Spinner, Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Package = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState(
    location.state && location.state.formData ? location.state.formData : {}
  );
  const proteinCalories = location.state
    ? location.state.proteinCalories
    : null;
  const totalPoints = location.state ? location.state.totalPoints : null;
  const status = location.state ? location.state.status : null;

  const [loading, setLoading] = useState(false);

  const handlePackageSelection = (packageName) => {
    setSelectedPackage(packageName);
  };

  const handleSubmit = async () => {
    const dataToSend = {
      "Nama Ortu": formData.parent,
      "Nama Anak": formData.name,
      "Jenis Kelamin": formData.gender,
      "Paket Pilihan": selectedPackage,
      "Total Point": totalPoints,
      Umur: formData.age,
      "Berat Badan": formData.weight,
      "Tinggi Badan": formData.height,
      Status: status,
    };

    console.log("formData", formData);
    console.log("dataToSend", dataToSend);
    console.log("status", status);

    setLoading(true);

    try {
      const response = await axios.post(
        import.meta.env.VITE_SPREADSHEET_URL,
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      navigate("/thankyou");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = () => {
    navigate("/thankyou");
  };

  return (
    <>
      <Container>
        {loading ? (
          <div className="position-fixed top-50 start-50 translate-middle">
            <Spinner animation="border" />
          </div>
        ) : (
          <div className="mt-5">
            <div>
              <div className="mb-4">
                <Table striped bordered responsive>
                  <thead>
                    <tr className="text-center fw-bold">
                      <td colSpan={2}>PAKET A</td>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th>Bahan Makanan</th>
                      <th>Porsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AYAM</td>
                      <td>{Math.round((proteinCalories / 7) * 0.5)}</td>
                    </tr>
                    <tr>
                      <td>IKAN</td>
                      <td>{Math.round((proteinCalories / 7) * 0.5)}</td>
                    </tr>
                  </tbody>
                </Table>

                <div className="d-flex justify-content-center">
                  <Button
                    variant={selectedPackage === "Paket A" ? "success" : "dark"}
                    onClick={() => handlePackageSelection("Paket A")}
                  >
                    PILIH PAKET A
                  </Button>
                </div>
              </div>

              <div>
                <Table striped bordered responsive>
                  <thead>
                    <tr className="text-center fw-bold">
                      <td colSpan={2}>PAKET B</td>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th>Bahan Makanan</th>
                      <th>Porsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TELUR</td>
                      <td>{Math.round((proteinCalories / 10) * 0.5)}</td>
                    </tr>
                    <tr>
                      <td>DAGING SAPI</td>
                      <td>{Math.round((proteinCalories / 10) * 0.5)}</td>
                    </tr>
                  </tbody>
                </Table>

                <div className="d-flex justify-content-center">
                  <Button
                    variant={selectedPackage === "Paket B" ? "success" : "dark"}
                    onClick={() => handlePackageSelection("Paket B")}
                  >
                    PILIH PAKET B
                  </Button>
                </div>
              </div>
              {selectedPackage && (
                <div className="m-5 d-flex justify-content-center">
                  <Button
                    variant="dark"
                    onClick={handleSubmit}
                    style={{ width: "200px" }} // Adjust the width as needed
                  >
                    Kirim
                  </Button>
                </div>
              )}
              <div className="m-5 d-flex justify-content-center">
                <Button
                  variant="primary"
                  onClick={handleContinue}
                  style={{ width: "200px" }} // Adjust the width as needed
                >
                  Lanjut
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Package;
