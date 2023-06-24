import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import CarouselBox from "./Carousel/CarouselBox";

function App() {
  return (
    <div>
        <Header />
        <main className="img"></main>
        <div className="content">
          <Container>
            <h2>Основное содержимое страницы</h2>
            {/* Другое содержимое страницы */}
          </Container>
        </div>
        <Container>
          <CarouselBox />
        </Container>
      </div>
  );
}

export default App;
