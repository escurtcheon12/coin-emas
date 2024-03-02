import { useState } from 'react';
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from 'react-router-dom'; 
import "../../assets/css/survey.css";

const Survey = () => {
  const [formData, setFormData] = useState({
    parent: "",
    name: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    energy: ""
  });

  const [questionnaire, setQuestionnaire] = useState({
    question1: "",
    question2: "",
    question3: "",
    totalPoints: 0
  });

  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuestionnaireAnswer = (question, answer) => {
    const isCorrect = checkAnswer(question, answer);
    const pointsToAdd = isCorrect ? 5 : 0;
    
    setQuestionnaire({
      ...questionnaire,
      [question]: answer,
      totalPoints: questionnaire.totalPoints + pointsToAdd
    });
  };

  const checkAnswer = (question, answer) => {
    const correctAnswers = {
      question1: "correct_answer",
      question2: "correct_answer",
      question3: "correct_answer"
    };

    return correctAnswers[question] === answer;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.parent.trim() === "" ||
      formData.name.trim() === "" ||
      formData.gender === "" ||
      formData.age === "" ||
      formData.height === "" ||
      formData.weight === "" ||
      formData.energy === "" ||
      Object.values(questionnaire).some(answer => answer === "")
    ) {
      alert("Please fill in all the fields");
    } else {

      console.log("Form Data:", formData); // Log form data
      console.log("Questionnaire Data:", questionnaire); // Log questionnaire data
      console.log("Total Points:", questionnaire.totalPoints); // Log total points

      const calories = parseInt(formData.weight) * 100;
      const proteinCalories = ((parseInt(formData.weight)* 100 )* 0.2) / 4; 
      const lemakCalories = ((parseInt(formData.weight)* 100) * 0.25) / 9; 
      const carboCalories = ((parseInt(formData.weight)* 100) * 0.55) / 4; 
      navigate('/result', { 
        state: {
          formData: formData, 
          calories: calories, 
          proteinCalories: proteinCalories, 
          lemakCalories: lemakCalories, 
          carboCalories: carboCalories,
          totalPoints: questionnaire.totalPoints 
        }
      });
    } 
  };


      return (  
        <Container className=" p-5">
          <h2 className="row justify-content-center mb-5">Form Data Diri dan Pretest</h2>
          <Form onSubmit={handleSubmit}>
          <div>
              <Form.Label>Nama Orang Tua : </Form.Label>
              <InputGroup className="mb-4">
                <Form.Control
                  name="parent"
                  value={formData.parent}
                  onChange={handleInputChange}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div>
              <Form.Label>Nama Anak : </Form.Label>
              <InputGroup className="mb-4">
                <Form.Control
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div>
              <Form.Label>Jenis Kelamin : </Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  id="laki-laki"
                  name="gender"
                  value="Laki Laki"
                  label="Laki Laki"
                  checked={formData.gender === "Laki Laki"}
                  onChange={handleInputChange}
                />
                <Form.Check
                  className="mb-4"
                  type="radio"
                  id="perempuan"
                  name="gender"
                  value="Perempuan"
                  label="Perempuan"
                  checked={formData.gender === "Perempuan"}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <Form.Label>Usia Anak : </Form.Label>
              <InputGroup className="mb-4">
                <Form.Control
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  type="number"
                />
                <InputGroup.Text id="basic-addon2">Tahun</InputGroup.Text>
              </InputGroup>
            </div>
            <div>
              <Form.Label>Tinggi Badan : </Form.Label>
              <InputGroup className="mb-4">
                <Form.Control
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  type="number"
                />
                <InputGroup.Text id="basic-addon2">cm</InputGroup.Text>
              </InputGroup>
            </div>
            <div>
              <Form.Label>Berat Badan : </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  type="number"
                />
                <InputGroup.Text id="basic-addon2">kg</InputGroup.Text>
              </InputGroup>
            </div>
            <div>
              <Form.Label>Kebutuhan Energi : </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  name="energy"
                  value={formData.energy}
                  onChange={handleInputChange}
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  type="number"
                />
                <InputGroup.Text id="basic-addon2">kkal</InputGroup.Text>
              </InputGroup>
            </div>
                 {/* Question 1 */}
                <div className="mb-3">
                  <Form.Label>Stunting adalah kondisi gagal tumbuh pada si kecil karena kurangnya asupan gizi yang seimbang, penyakit infeksi yang berulang dan kondisi sosial ekonomi.</Form.Label>
                  <Form.Control
                    as="select"
                    name="question1"
                    value={questionnaire.question1}
                    onChange={(e) => handleQuestionnaireAnswer("question1", e.target.value)}
                  >
                    <option value="">Pilih Jawaban</option>
                    <option value="correct_answer">Benar</option>
                    <option value="wrong_answer">Salah</option>
                  </Form.Control>
                </div>

                {/* Question 2 */}
                <div className="mb-3">
                  <Form.Label>Berikut adalah contoh protein hewani : Ayam, Ikan, Telur, Daging Sapi dan Daging Ayam</Form.Label>
                  <Form.Control
                    as="select"
                    name="question2"
                    value={questionnaire.question2}
                    onChange={(e) => handleQuestionnaireAnswer("question2", e.target.value)}
                  >
                    <option value="">Pilih Jawaban</option>
                    <option value="correct_answer">Benar</option>
                    <option value="wrong_answer">Salah</option>
                  </Form.Control>
                </div>

                {/* Question 3 */}
                <div className="mb-3">
                  <Form.Label>Akibat dari stunting adalah: tinggi badan anak pendek, anak mudah terkena penyakit dan terhambatnya perkembangan otak</Form.Label>
                  <Form.Control
                    as="select"
                    name="question3"
                    value={questionnaire.question3}
                    onChange={(e) => handleQuestionnaireAnswer("question3", e.target.value)}
                  >
                    <option value="">Pilih Jawaban</option>
                    <option value="correct_answer">Benar</option>
                    <option value="wrong_answer">Salah</option>
                  </Form.Control>
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <Button type="submit" variant="dark" style={{ width: "200px" }}>Lanjut</Button>
                </div>
              </Form>
        </Container>
      );
    };

    export default Survey;
