import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Content from './components/Content';
import DefaultCities from './components/DefaultCities';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>

      <Container style={{maxWidth: '767px'}}>
        <Row className='border'>
          <Col className='p-0'>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col className='p-0'>
            <DefaultCities />
          </Col>
        </Row>
        <Row className=''>
          <Col className='content shadow rounded p-3'>
            <Content />
          </Col>
        </Row>
        <Row>
          <Col className='footer shadow text-dark mb-0'>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
