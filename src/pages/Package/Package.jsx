import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useLocation } from 'react-router-dom';

const Package = () => {
  const location = useLocation();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState(location.state && location.state.formData ? location.state.formData :{});
  const proteinCalories = location.state ? location.state.proteinCalories : null;
  const totalPoints = location.state ? location.state.totalPoints : null;

  const handlePackageSelection = (packageName) => {
    setSelectedPackage(packageName);
  };

  const handleSubmit = () => {
    // Combine user information with the selected package
    const dataToSend = { 
      ...formData, 
      selectedPackage,
      totalPoints, 
      name: formData.name,
      gender: formData.gender,
      age: formData.age,
      weight: formData.weight,
      height: formData.height
    };
    
    // Send data to the backend for further processing (e.g., input into a spreadsheet)
    // You would typically make an API call here to your backend server
    console.log("Data to send:", dataToSend);
    // Example of sending data to a backend server:
    // fetch('your-backend-api-url', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(dataToSend)
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
  };  
  return (
    <>
      <Container>
        <div className="mt-5">
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
        </div>
      </Container>
    </>
  );
};

export default Package;
