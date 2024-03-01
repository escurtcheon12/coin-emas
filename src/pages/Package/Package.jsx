import React from "react";
import { Button, Container, Table } from "react-bootstrap";

const Package = () => {
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
                  <td>4</td>
                </tr>
                <tr>
                  <td>IKAN</td>
                  <td>4</td>
                </tr>
              </tbody>
            </Table>

            <div className="d-flex justify-content-center">
              <Button variant="dark">PILIH PAKET A</Button>
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
                  <td>3</td>
                </tr>
                <tr>
                  <td>DAGING SAPI</td>
                  <td>3</td>
                </tr>
              </tbody>
            </Table>

            <div className="d-flex justify-content-center">
              <Button variant="dark">PILIH PAKET B</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Package;
