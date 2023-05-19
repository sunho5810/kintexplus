import React, { useState } from 'react'

import * as EgovNet from 'api/egovFetch';
import URL from 'constants/url';
import CODE from 'constants/code';
import { Button, ButtonGroup, Col, Container, Form, Row, ToggleButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminEmployeeList = () => {

  console.group("AdminEmployeeList");
  console.log("[Start] AdminEmployeeList ------------------------------");

  // const [tab01Checked, setTab01Checked] = useState(false);
  const [employeeAuthValue, setEmployeeAuthValue] = useState('1');

  const employeeAuth = [
    {name: "전체회원", value: "1"},
    {name: "슈퍼관리자", value: "2"},
    {name: "관리자", value: "3"},
    {name: "직원", value: "4"}
  ]

  console.log("------------------------------AdminEmployeeList [End]");
  console.groupEnd("AdminEmployeeList");
  return (
    <Container fluid={"xl"}>
      <h2 className="fs-4 fw-bold mb-4">임직원 관리</h2>
      <p className="fs-6 mb-2">임직원 현황과 정보를 입력할 수 있는 페이지 입니다.</p>
      <Row className='mt-4'>
        <ButtonGroup>
          {
            employeeAuth.map((item, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                id={`tab01--${idx}`}
                name="tab01"
                value={item.value}
                checked={employeeAuthValue === item.value}
                variant='outline-primary'
                onChange={(e) => setEmployeeAuthValue(e.currentTarget.value)}
              >
                {item.name}
              </ToggleButton>
            ))
          }
        </ButtonGroup>
      </Row>

      <Row className='mt-4'>
        <p className="fs-6 mb-2">전체 : 10건</p>
          <Col>
            <div className="d-flex gap-2">
              <ButtonGroup aria-label="Basic outlined example">
                <Button variant="outline-primary">전체목록</Button>
                <Button variant="outline-primary">엑셀 다운로드</Button>
                <Button variant="outline-primary">선택삭제</Button>
                <Button variant="outline-primary">회원추가</Button>
              </ButtonGroup>
              <div className="d-flex gap-2 align-items-center">
                <Form.Select aria-label="Default select example" defaultValue={10}>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </Form.Select>
                <p className="fs-6 mb-0">보기</p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="d-flex gap-2 justify-content-end">
              <Button variant="dark">삭제</Button>
              <Button variant="success">등록</Button>
            </div>
          </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <table className="table text-center align-middle">
            <colgroup>
              <col width={"5%"}/>
              <col width={"5%"}/>
              <col width={"10%"}/>
              <col width={"10%"}/>
              <col width={"10%"}/>
              <col width={"10%"}/>
              <col width={"10%"}/>
              <col width={"10%"}/>
              <col width={"10%"}/>
            </colgroup>
            <thead className="table-light">
              <tr>
                <th>번호</th>
                <th><Form.Check value="" id=""/></th>
                <th>아이디</th>
                <th>실명</th>
                <th>부서</th>
                <th>권한</th>
                <th>최근로그인</th>
                <th>상태</th>
                <th>수정</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <td>1</td>
                <td><Form.Check value="" id=""/></td>
                <td>nosadmin</td>
                <td>김노스</td>
                <td>기계팀</td>
                <td>슈퍼관리자</td>
                <td>10:53</td>
                <td>사용</td>
                <td><Button as={Link} variant="outline-dark" size='sm'>수정</Button></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminEmployeeList