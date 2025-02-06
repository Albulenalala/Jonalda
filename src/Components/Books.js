import React, { useState, useEffect, useCallback } from "react";
import booksData from "../Data/books.json"; // Importoni të dhënat e librave nga JSON
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import styled from "styled-components";
// Importi i imazheve
import JOURNAL_3 from "../Assets/JOURNAL (3).png";
import JOURNAL_4 from "../Assets/JOURNAL (4).png";
import JOURNAL_5 from "../Assets/JOURNAL (5).png";
import JOURNAL_6 from "../Assets/JOURNAL (6).png";
import JOURNAL_7 from "../Assets/JOURNAL (7).png";
import IMG_1 from "../Assets/1.JPG";
import IMG_2 from "../Assets/2.JPG";
import IMG_3 from "../Assets/3.JPG";
import IMG_4 from "../Assets/4.JPG";
import IMG_5 from "../Assets/5.JPG";
import IMG_6 from "../Assets/6.JPG";
import IMG_7 from "../Assets/7.JPG";
import IMG_8 from "../Assets/8.JPG";
import IMG_9 from "../Assets/9.JPG";
import IMG_10 from "../Assets/10.JPG";
import IMG_111 from "../Assets/111.jpg";
import IMG_121 from "../Assets/121.JPG";
import IMG_131 from "../Assets/131.jpg";
import HIPO from "../Assets/Mouse1.jpg";
import HENA from "../Assets/Hena zhduket.jpg";
import SHENDETI from "../Assets/ok.jpg";
import SUN from "../Assets/Largohu diell.jpg";
import MIND from "../Assets/Loja e mendjes.jpg";
import MOUSE from "../Assets/Mouse.jpg";
import NAZEMADHI from "../Assets/Nazemadhi.jpg";
import NDRYSHIMET from "../Assets/Ndryshimet.jpg";
import OLYMP from "../Assets/Olimpiada.jpg";
import DANCE from "../Assets/Perse.jpg";
import SUPE from "../Assets/Supe.jpg";
import TEST from "../Assets/Testi.jpg";
import A1 from "../Assets/A1.jpg";
import A2 from "../Assets/A2.jpg";
import A3 from "../Assets/A3.jpg";
import A4 from "../Assets/A4.jpg";
import A5 from "../Assets/A5.jpg";
import A6 from "../Assets/A6.jpg";
import A7 from "../Assets/A7.jpg";
import A8 from "../Assets/A8.jpg";
import M1 from "../Assets/M1.jpg";
import M2 from "../Assets/M2.jpg";
import M3 from "../Assets/M3.jpg";
import M4 from "../Assets/M4.jpg";
import M5 from "../Assets/M5.jpg";
import M6 from "../Assets/M6.jpg";
import M7 from "../Assets/M7.jpg";
import M8 from "../Assets/M8.jpg";
import M9 from "../Assets/M9.jpg";
import M10 from "../Assets/M10.jpg";
import M11 from "../Assets/M11.jpg";
import M12 from "../Assets/M12.jpg";
import M13 from "../Assets/M13.jpg";
import M14 from "../Assets/M14.jpg";
import M15 from "../Assets/M15.jpg";
import M16 from "../Assets/M16.jpg";
import M17 from "../Assets/M17.jpg";
import M18 from "../Assets/M18.jpg";
import L1 from "../Assets/L1.jpeg";
import L2 from "../Assets/L2.jpeg";
import L3 from "../Assets/L3.jpeg";
import R1 from "../Assets/R1.jpg";
import R2 from "../Assets/R2.jpg";
import R3 from "../Assets/R3.jpg";
import R4 from "../Assets/R4.jpg";
import R5 from "../Assets/R5.JPG";
import R6 from "../Assets/R6.jpg";
import R7 from "../Assets/R7.jpg";
import R8 from "../Assets/R8.jpg";
import R9 from "../Assets/R9.jpg";
import R10 from "../Assets/R10.jpg";
import R11 from "../Assets/R11.jpg";
import R12 from "../Assets/R12.jpg";
import R13 from "../Assets/R13.jpg";
import R14 from "../Assets/R14.jpg";
import U1 from "../Assets/u1.jpg";
import U2 from "../Assets/u2.jpg";
import U3 from "../Assets/u3.jpg";
import U4 from "../Assets/u4.jpg";
import U5 from "../Assets/u5.jpg";
import U6 from "../Assets/u6.jpg";
import U7 from "../Assets/u7.jpg";
import U8 from "../Assets/u8.jpg";
import U9 from "../Assets/u9.jpg";
import U10 from "../Assets/u10.jpg";
import U11 from "../Assets/u11.jpg";
import U12 from "../Assets/u12.jpg";
import U13 from "../Assets/u13.jpg";
import U14 from "../Assets/u14.jpg";
import U15 from "../Assets/u15.jpg";
import U16 from "../Assets/u16.jpg";
import U17 from "../Assets/u17.jpg";
import U18 from "../Assets/u18.jpg";
import U19 from "../Assets/u19.jpg";
import U20 from "../Assets/u20.jpg";
import U21 from "../Assets/u21.jpg";
import U22 from "../Assets/u22.jpg";
import U23 from "../Assets/u23.jpg";
import U24 from "../Assets/u24.jpg";
import U25 from "../Assets/u25.jpg";
import U26 from "../Assets/u26.jpg";
import U27 from "../Assets/u27.jpg";
import U28 from "../Assets/u28.jpg";
import U29 from "../Assets/u29.jpg";
import U30 from "../Assets/u30.jpg";
import U31 from "../Assets/u31.jpg";
import U32 from "../Assets/u32.jpg";
import U33 from "../Assets/u33.jpg";

const BooksCover = styled.div`
  background-image: url(${require("../Assets/About.jpg")});
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  font-family: "Quicksand", serif;
`;

const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

const FilterSection = styled.div`
  margin: 50px auto;
  padding: 50px;
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  max-width: 900px;
  margin-top: -60px;
`;

const FormRow = styled(Row)`
  margin-top: 20px;
`;

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    setBooks(booksData); 
    setFilteredBooks(booksData); 
  }, []);

  const handleFilter = useCallback(() => {
    let filtered = books;

    if (searchTerm) {
      filtered = filtered.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((book) => book.category === selectedCategory);
    }

    setFilteredBooks(filtered);
  }, [searchTerm, selectedCategory, books]);

  useEffect(() => {
    handleFilter();
  }, [handleFilter]);

 
  const openModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  
  const closeModal = () => {
    setSelectedBook(null);
    setShowModal(false);
  };


  const getBookImage = (coverImage) => {
    switch (coverImage) {
      case "JOURNAL_3":
        return JOURNAL_3;
      case "JOURNAL_4":
        return JOURNAL_4;
      case "JOURNAL_5":
        return JOURNAL_5;
      case "JOURNAL_6":
        return JOURNAL_6;
      case "JOURNAL_7":
        return JOURNAL_7;
      case "1.JPG":
        return IMG_1;
      case "2.JPG":
        return IMG_2;
      case "3.JPG":
        return IMG_3;
      case "4.JPG":
        return IMG_4;
      case "5.JPG":
        return IMG_5;
      case "6.JPG":
        return IMG_6;
      case "7.JPG":
        return IMG_7;
      case "8.JPG":
        return IMG_8;
      case "9.JPG":
        return IMG_9;
      case "10.JPG":
        return IMG_10;
      case "111.jpg":
        return IMG_111;
      case "121.JPG":
        return IMG_121;
      case "131.jpg":
        return IMG_131;
      case "Mouse.jpg":
        return MOUSE;
      case "Mouse1.jpg":
        return HIPO;
      case "Hena zhduket.jpg":
        return HENA;
      case "ok.jpg":
        return SHENDETI;
      case "Largohu diell.jpg":
        return SUN;
      case "Loja e mendjes.jpg":
        return MIND;
      case "Ndryshimet.jpg":
        return NDRYSHIMET;
      case "Nazemadhi.jpg":
        return NAZEMADHI;
      case "Perse.jpg":
        return DANCE;
      case "Olimpiada.jpg":
        return OLYMP;
      case "Supe.jpg":
        return SUPE;
      case "Testi.jpg":
        return TEST;
      case "A1.jpg":
        return A1;
      case "A2.jpg":
        return A2;
      case "A3.jpg":
        return A3;
      case "A4.jpg":
        return A4;
      case "A5.jpg":
        return A5;
      case "A6.jpg":
        return A6;
      case "A7.jpg":
        return A7;
      case "A8.jpg":
        return A8;
      case "M1.jpg":
        return M1;
      case "M2.jpg":
        return M2;
      case "M3.jpg":
        return M3;
      case "M4.jpg":
        return M4;
      case "M5.jpg":
        return M5;
      case "M6.jpg":
        return M6;
      case "M7.jpg":
        return M7;
      case "M8.jpg":
        return M8;
      case "M9.jpg":
        return M9;
      case "M10.jpg":
        return M10;
      case "M11.jpg":
        return M11;
      case "M12.jpg":
        return M12;
      case "M13.jpg":
        return M13;
      case "M14.jpg":
        return M14;
      case "M15.jpg":
        return M15;
      case "M16.jpg":
        return M16;
      case "M17.jpg":
        return M17;
      case "M18.jpg":
        return M18;
      case "L1.jpeg":
        return L1;
      case "L2.jpeg":
        return L2;
      case "L3.jpeg":
        return L3;
      case "R1.jpg":
        return R1;
      case "R2.jpg":
        return R2;
      case "R3.jpg":
        return R3;
      case "R4.jpg":
        return R4;
      case "R5.jpg":
        return R5;
      case "R6.jpg":
        return R6;
      case "R7.jpg":
        return R7;
      case "R8.jpg":
        return R8;
      case "R9.jpg":
        return R9;
      case "R10.jpg":
        return R10;
      case "R11.jpg":
        return R11;
      case "R12.jpg":
        return R12;
      case "R13.jpg":
        return R13;
      case "R14.jpg":
        return R14;
      case "u1.jpg":
        return U1;
      case "u2.jpg":
        return U2;
      case "u3.jpg":
        return U3;
      case "u4.jpg":
        return U4;
      case "u5.jpg":
        return U5;
      case "u6.jpg":
        return U6;
      case "u7.jpg":
        return U7;
      case "u8.jpg":
        return U8;
      case "u9.jpg":
        return U9;
      case "u10.jpg":
        return U10;
      case "u11.jpg":
        return U11;
      case "u12.jpg":
        return U12;
      case "u13.jpg":
        return U13;
      case "u14.jpg":
        return U14;
      case "u15.jpg":
        return U15;
      case "u16.jpg":
        return U16;
      case "u17.jpg":
        return U17;
      case "u18.jpg":
        return U18;
      case "u19.jpg":
        return U19;
      case "u20.jpg":
        return U20;
      case "u21.jpg":
        return U21;
      case "u22.jpg":
        return U22;
      case "u23.jpg":
        return U23;
      case "u24.jpg":
        return U24;
      case "u25.jpg":
        return U25;
      case "u26.jpg":
        return U26;
      case "u27.jpg":
        return U27;
      case "u28.jpg":
        return U28;
      case "u29.jpg":
        return U29;
      case "u30.jpg":
        return U30;
      case "u31.jpg":
        return U31;
      case "u32.jpg":
        return U32;
        case "u33.jpg":
        return U33;

      default:
        return JOURNAL_3;
    }
  };

  return (
    <>
      {/* Foto Cover */}
      <BooksCover>
        <Container>
          <Title>Katalogu i Librave</Title>
        </Container>
      </BooksCover>

      {/* Filtër */}
      <Container>
        <FilterSection>
          <Form>
            <FormRow>
              <Col md={6}>
                <Form.Group controlId="search">
                  <Form.Label>Kërko sipas titullit:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Kërko libër..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="category">
                  <Form.Label>Kategoria: </Form.Label>
                  <Form.Select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Të gjitha</option>
                    <option value="Botime për të vegjël">
                      Botime për të vegjël
                    </option>
                    <option value="Botime për fëmijë">Botime për fëmijë</option>
                    <option value="Botime për të rinjtë">
                      Botime për të rinjtë
                    </option>
                    <option value="Botime shkollore">Botime shkollore</option>
                    <option value="Botime për të rritur">
                      Botime për të rritur
                    </option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </FormRow>
          </Form>
        </FilterSection>
      </Container>

      {/* Lista e Librave */}
      <Container>
        <Row>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <Col key={book.id} md={4} className="mb-4">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={getBookImage(book.coverImage)}
                    style={{ height: "500px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.description}</Card.Text>
                    <Button variant="primary" onClick={() => openModal(book)}>
                      Shiko më shumë
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center">
              Nuk ka libra që përputhen me filtrat tuaj.
            </p>
          )}
        </Row>
      </Container>

      {/* Modal për librin */}
      {selectedBook && (
        <Modal show={showModal} onHide={closeModal} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedBook.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex">
            <img
              src={getBookImage(selectedBook.coverImage)}
              alt={selectedBook.title}
              style={{ width: "50%", height: "auto", marginRight: "20px" }}
            />
            <div>
              <h4>{selectedBook.title}</h4>
              <p>{selectedBook.fullDescription}</p> {/* Përshkrimi i plotë */}
              <p>
                <strong>Çmimi: </strong>
                {selectedBook.price} {/* Çmimi */}
              </p>
              <p>
                <strong>Autori: </strong>
                {selectedBook.author} {/* Autori */}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Mbyll
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Books;
