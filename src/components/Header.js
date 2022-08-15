import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getCityWeather, getCities, selectCity } from '../redux/weatherSlice';

function Header() {
  const [query, setQuery] = useState('');
  const currentCity = useSelector(selectCity);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    if(e.target.value.length>=3) dispatch(getCities(e.target.value));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setQuery('');
    if(currentCity) dispatch(getCityWeather(currentCity));
  }

  useEffect(() => {
    dispatch(getCityWeather({ name: "Kocaeli", latitude: 40.7656, longitude: 29.9406 }))
  },[dispatch]);

  return (
    <Navbar bg="light" expand="lg" className='p-0 shadow'>
    <Container fluid className='header'>
      <Navbar.Brand href="#">Weather App </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px', padding: '0' }}
          navbarScroll
        >
          &nbsp;
        </Nav>
        <Form className="d-flex ms-5" onSubmit={(e) => handleSubmit(e)}>
          <Form.Control
            type="search"
            placeholder="City Name"
            className="me-2"
            aria-label="Search"
            value={query}
            onChange={(e) => handleSearch(e)}
          />
          <Button type='submit' variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;