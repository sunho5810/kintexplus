import React from 'react'

import * as EgovNet from 'api/egovFetch';

import URL from 'constants/url';
import CODE from 'constants/code';
import { Container, Nav, NavDropdown, Navbar, Offcanvas, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AdminHeader = () => {

  console.group("AdminHeader");
  console.log("[Start] AdminHeader ------------------------------");

  console.log("------------------------------AdminHeader [End]");
  console.groupEnd("AdminHeader");
  return (
    <>
      <Navbar key={false} bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">kintex+</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
          >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
              kintex+
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href={URL.ADMIN_EMPLOYEE}>임직원 관리</Nav.Link>
              <NavDropdown
                title="게시판/문의"
                id={`offcanvasNavbarDropdown-expand-${false}`}
              >
                <NavDropdown.Item href="#action3">킨플 공지사항</NavDropdown.Item>
                <NavDropdown.Item href="#action4">제휴 및 문의</NavDropdown.Item>
                <NavDropdown.Item href="#action5">고객민원</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action6">메인 관리</Nav.Link>
              <Nav.Link href="#action7">로그인 현황</Nav.Link>
            </Nav>
            <div className='d-flex gap-2'>
              <Button variant="outline-dark">홈페이지</Button>
              <Button variant="outline-primary">로그아웃</Button>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
</>
  )
}

export default AdminHeader