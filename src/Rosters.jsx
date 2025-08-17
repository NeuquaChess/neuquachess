import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Rosters() {
  return (
    <div className="App w-100 bg-white">
      <Link to="/">
        <img src="/logo.png" alt="Neuqua Chess Logo" className="site-logo" />
      </Link>
      
      <Container className="content-section" style={{ marginTop: '20px', marginBottom: '50px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Team Rosters and Schedule</h1>
        <div style={{ width: '100%', height: '80vh', border: 'none' }}>
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5f_kOot6zpPz-vg4z2JKQalU1fWMYVlloZfzAoMNs2mAmH1n76iNKaeZJWQ0yVwNXUSS1O7_XCfnu/pubhtml"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Neuqua Chess Team Rosters"
          />
        </div>
      </Container>
    </div>
  );
}

export default Rosters;
