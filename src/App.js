import { Container, Col, Row } from "react-bootstrap";
import './App.scss'
import { AddNotes } from "./AddNotes/AddNotes";

function App() {
  return (
    <Container fluid className="app">
      <div className="title">
        <h1>Juan Bautista Martín Navarro</h1>
      </div>

      <Row className="todo">
        <Col
          className="todo__title"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <h2>Today</h2>
        </Col>
        <Col
          className="todo__list"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
        </Col>
        <Col
          className="todo__input"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <AddNotes />

        </Col>
      </Row>
    </Container>
  );
}

export default App;
