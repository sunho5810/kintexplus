import React from 'react'

import * as EgovNet from 'api/egovFetch';

import URL from 'constants/url';
import CODE from 'constants/code';
import { Container, Nav, NavDropdown, Navbar, Offcanvas, Button, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const AdminHeader = () => {

  console.group("AdminHeader");
  console.log("[Start] AdminHeader ------------------------------");

  const expand = false;

  console.log("------------------------------AdminHeader [End]");
  console.groupEnd("AdminHeader");

  return (
    <>
      <Navbar bg="light" expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href={URL.MAIN}>kintex+</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                kintex+
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to={URL.ADMIN_EMPLOYEE}>임직원 관리</Nav.Link>
                <NavDropdown
                  title="게시판/문의"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item as={Link} to={URL.ADMIN_SCHEDULE}>킨플 공지사항</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"#"}>제휴 및 문의</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"#"}>고객민원</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={"#"}>메인 관리</Nav.Link>
                <Nav.Link as={Link} to={"#"}>로그인 현황</Nav.Link>
              </Nav>
              <div className='d-flex gap-2'>
                <Button href={URL.MAIN} variant="outline-dark">홈페이지</Button>
                <Button href={URL.LOGIN} variant="outline-primary">로그아웃</Button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default AdminHeader