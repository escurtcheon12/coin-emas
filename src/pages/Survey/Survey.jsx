import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../../assets/css/survey.css";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setName,
//   setGender,
//   setAge,
//   setHeight,
//   setWeight,
// } from "../../redux/action/action";

const Survey = () => {
  // const dispatch = useDispatch();
  // const gender = useSelector((state) => state.globalReducer.gender);

  // const handleNameChange = (event) => {
  //   dispatch(setName(event.target.value));
  // };

  // const handleGenderChange = (event) => {
  //   dispatch(setGender(event.target.value));
  // };

  // const handleAgeChange = (event) => {
  //   dispatch(setAge(event.target.value));
  // };

  // const handleHeightChange = (event) => {
  //   dispatch(setHeight(event.target.value));
  // };

  // const handleWeightChange = (event) => {
  //   dispatch(setWeight(event.target.value));
  // };

  return (
    <>
      <Container className=" p-5">
        <Form>
          <div>
            <Form.Label>Nama putra/putri anda : </Form.Label>
            <InputGroup className="mb-4">
              <Form.Control
                aria-label="Username"
                aria-describedby="basic-addon1"
                // onChange={(e) => handleNameChange(e)}
              />
            </InputGroup>
          </div>
          <div>
            <Form.Label>Jenis kelaminnya : </Form.Label>
            <div>
              <Form.Check
                type="radio"
                id="laki-laki"
                name="gender"
                value="Laki Laki"
                label="Laki Laki"
                // checked={gender === "Laki Laki"}
                // onChange={handleGenderChange}
              />
              <Form.Check
                className="mb-4"
                type="radio"
                id="perempuan"
                name="gender"
                value="Perempuan"
                label="Perempuan"
                // checked={gender === "Perempuan"}
                // onChange={handleGenderChange}
              />
            </div>
          </div>
          <div>
            <Form.Label>Berapa usianya : </Form.Label>
            <InputGroup className="mb-4">
              <Form.Control
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="number"
                // onChange={(e) => handleAgeChange(e)}
              />
            </InputGroup>
          </div>
          <div>
            <Form.Label>Tinggi badannya : </Form.Label>
            <InputGroup className="mb-4">
              <Form.Control
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="number"
                // onChange={(e) => handleHeightChange(e)}
              />
            </InputGroup>
          </div>
          <div>
            <Form.Label>Berat badannya : </Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="number"
                // onChange={(e) => handleWeightChange(e)}
              />
            </InputGroup>
          </div>
          <div className="d-flex justify-content-end">
            <Button variant="dark">NEXT</Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Survey;
