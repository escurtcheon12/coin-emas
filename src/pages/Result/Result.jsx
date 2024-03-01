import React from "react";
import { Button, Container, Table } from "react-bootstrap";

const Result = () => {
  return (
    <>
      <Container>
        <div className="mt-5">
          <Table striped bordered responsive>
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
                <td>1100 kkal</td>
                <td>55 gr</td>
                <td>31 gr</td>
                <td>151,25 gr</td>
              </tr>
            </tbody>
          </Table>

          <Table className="mt-5" striped bordered responsive>
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
                <td>8 porsi</td>
                <td>8 porsi</td>
                <td>5,5 porsi</td>
                <td>5,5 porsi</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="d-flex justify-content-end">
          <Button variant="dark">NEXT</Button>
        </div>
      </Container>
    </>
  );
};

export default Result;
