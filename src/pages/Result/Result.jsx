import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "../../assets/css/result.css";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location || !location.state || !location.state.formData) {
    console.log("No data found"); // Log if no data is found
    return null;
  }

  const {
    formData,
    calories,
    proteinCalories,
    lemakCalories,
    carboCalories,
    totalPoints,
    status,
  } = location.state;

  const handleNextClick = () => {
    // Prepare the data to send
    const dataToSend = {
      proteinCalories,
      totalPoints,
      status, // Include total points in the data to send
    };
    if (formData) {
      dataToSend.formData = formData;
    }

    // Navigate to the next page with the prepared data
    navigate("/package", { state: dataToSend });
  };

  return (
    <>
      <Container>
        <div className="mt-5">
          <h2 className="m-5 text-center fw-bold">Hasil Analisa Test </h2>
          <Table striped bordered responsive className="custom-table">
            {" "}
            {/* Add custom-table class for styling */}
            <thead>
              <tr className="text-center fw-bold">
                <td colSpan={4}>Kebutuhan Gizi Harian</td>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>Energi</th>
                <th>Protein</th>
                <th>Lemak</th>
                <th>Karbohidrat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{calories} kkal</td>
                <td>{Math.round(proteinCalories)} gr</td>
                <td>{Math.round(lemakCalories)} gr</td>
                <td>{Math.round(carboCalories)} gr</td>
              </tr>
            </tbody>
          </Table>

          <Table className="mt-5 custom-table" striped bordered responsive>
            {" "}
            {/* Add custom-table class for styling */}
            <thead>
              <tr className="text-center fw-bold">
                <td colSpan={4}>Paket Stunting Untuk Kebutuhan Harian</td>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>Ayam 40gr</th>
                <th>Ikan 40gr</th>
                <th>Telur 60gr</th>
                <th>Daging 60gr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{Math.round(proteinCalories / 7)} porsi</td>
                <td>{Math.round(proteinCalories / 7)} porsi</td>
                <td>{proteinCalories / 10} porsi</td>
                <td>{proteinCalories / 10} porsi</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="d-flex justify-content-center m-5">
          <Button
            variant="dark"
            onClick={handleNextClick}
            style={{ width: "200px" }}
          >
            Lanjut
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Result;
