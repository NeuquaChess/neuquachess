import { useState, useEffect } from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [mainCarouselImages, setMainCarouselImages] = useState([]);
  const [aboutSectionImages, setAboutSectionImages] = useState([]);

    useEffect(() => {
    const mainCarouselNumbers = [1, 2, 4, 6, 7, 8, 12, 14, 15];
    setMainCarouselImages(mainCarouselNumbers.map(num => `/carousel${num}.png`));

    // Select 3 unique images for the about section from remaining carousel images
    const allCarouselImageNumbers = Array.from({ length: 15 }, (_, i) => i + 1);
    const availableForAbout = allCarouselImageNumbers.filter(num => !mainCarouselNumbers.includes(num));
    const aboutNumbers = availableForAbout.sort(() => 0.5 - Math.random()).slice(0, 3);
    setAboutSectionImages(aboutNumbers.map(num => `/carousel${num}.png`));
  }, []);

  return (
    <div className="App w-100 bg-white">
      <img src="/logo.png" alt="Neuqua Chess Logo" className="site-logo" />
      <Carousel fade interval={4000} pause={false} className="scrollable-carousel" controls={false} style={{ height: '100vh', width: '100vw' }}>

        {mainCarouselImages.map((image, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-img-container">
              <img
                className="d-block carousel-img"
                style={{ height: '100vh', width: '100vw' }}
                src={image}
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-text">
                <h1>Neuqua Valley Chess</h1>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="content-section description-section">
        <div className="content-grid">
          <div className="image-gallery">
            <img src={aboutSectionImages[0]} alt="About 1" className="staggered-img img-2" />
            <img src={aboutSectionImages[1]} alt="About 2" className="staggered-img img-1" />
            <img src={aboutSectionImages[2]} alt="About 3" className="staggered-img img-2" />
          </div>
          <div className="text-content">
            <h2>About Us</h2>
            <p>
              Neuqua has two parts to our chess program: A club, and a competitive team that competes in Saturday tournaments. All skill levels are welcome, from beginners to experienced players. We meet every Tuesday and Thursday in room D200. Develop your chess skills, make new friends, and compete in tournaments. Our varsity team competes in IHSA sectionals and the Illinois State Chess Championship. For more casual players, feel free to simply show up after school and play a few rounds.
            </p>
          </div>
        </div>
      </Container>

      <Container className="content-section fun-section">
        <div className="content-grid">
          <div className="text-content">
            <h2>Work hard, Play harder</h2>
            <p>
              You're not just a round of chess; you're part of a team. The Neuqua Chess Team offers exciting team-building activities, bughouse rounds at the 95th street library, and most importantly, a group of friends that will stick with you through the best wins and toughest losses.  
            </p>
          </div>
          <div className="image-gallery">
            <img src="/fun1.png" alt="Fun 1" className="staggered-img img-1" />
            <img src="/fun2.png" alt="Fun 2" className="staggered-img img-2" />
            <img src="/fun5.png" alt="Fun 5" className="staggered-img img-3" />
          </div>
        </div>
      </Container>

      <Container className="content-section contact-section">
        <Row>
          <Col md={6}>
            <h2>Team Meetings</h2>
            <p>The chess team meets on regular school days every Tuesday and Thursday in room D200. First meeting of the 25-26 season is TBA.</p>
          </Col>
          <Col md={6}>
            <h2>Contact</h2>
            <p>Neuqua Chess Team Discord: <a href="https://discord.gg/S2YtQrnF" target="_blank" rel="noopener noreferrer">https://discord.gg/S2YtQrnF</a></p>
            <p>Coach Email: <a href="mailto:james_fox@ipsd.org">james_fox@ipsd.org</a></p>
          </Col>
        </Row>
      </Container>

      <footer className="footer">
        <p>&copy; 2025 Neuqua Valley Chess Team&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;| </p>
        <div className="footer-links">
          <a href="https://discord.gg/S2YtQrnF" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="mailto:james_fox@ipsd.org" className="footer-link">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
