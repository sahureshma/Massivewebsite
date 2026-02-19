import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaFileAlt,
  FaUniversity,
  FaIdCard
} from "react-icons/fa";
import doc1 from "../assest/img1.png";
import doc2 from "../assest/img2.png";
import doc3 from "../assest/img3.png";
import doc4 from "../assest/img4.png";
import "./Certifications.css";

function Certifications() {
  return (
    <div className="certifications-section">

      {/* Header */}
      <div className="cert-header">
        <Container>
          <h1>
            CERTIFICATIONS <br />
            <span>& REGISTRATIONS</span>
          </h1>
        </Container>
      </div>

      {/* Yellow Info Bar */}
      <Container>
        <div className="info-pill">
          <span><FaCheckCircle /> Incorporated Since 2015</span>
          <span><FaCheckCircle /> GST Registered</span>
          <span><FaShieldAlt /> MCA Approved</span>
        </div>
      </Container>

      {/* Cards */}
      <Container className="mt-5">
        <Row className="g-4">
          <Col xs={12} md={6}>
            <Card className="cert-card">
              <Card.Body>
                <div className="card-title">
                  <FaFileAlt size={24} />
                  <div>
                    <h5>CERTIFICATE OF</h5>
                    <h6>INCORPORATION</h6>
                  </div>
                </div>
                <hr />
                <p>
                  CIN: U45400UP2015PTC070554 <br />
                  Incorporation Date: 07 May 2015 <br />
                  Issued by: Ministry of Corporate Affairs, Government of India
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card className="cert-card">
              <Card.Body>
                <div className="card-title">
                  <FaIdCard size={24} />
                  <div>
                    <h5>GST</h5>
                    <h6>REGISTRATION</h6>
                  </div>
                </div>
                <hr />
                <p>
                  GSTIN: 09AAJCM7566R2ZA <br />
                  Type: Regular <br />
                  Valid From: 03/03/2015
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card className="cert-card">
              <Card.Body>
                <div className="card-title">
                  <FaIdCard size={24} />
                  <div>
                    <h5>PAN</h5>
                    <h6>REGISTRATION</h6>
                  </div>
                </div>
                <hr />
                <p>
                  PAN NO: AAJCM7566R <br />
                  Income Tax Department <br />
                  Government of India
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card className="cert-card">
              <Card.Body>
                <div className="card-title">
                  <FaUniversity size={24} />
                  <div>
                    <h5>MCA</h5>
                    <h6>COMPLIANCE</h6>
                  </div>
                </div>
                <hr />
                <p>
                  ROC: Uttar Pradesh <br />
                  Stamp Duty Paid (AOA & MOA) <br />
                  Corporate identity Verified
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    <div className="official-section">
      <Container>

        {/* Heading */}
        <div className="official-heading">
          <span className="line"></span>
          <h2>OFFICIAL DOCUMENTS</h2>
          <span className="line"></span>
        </div>

        {/* Documents */}
        <Row className="justify-content-center g-4 mt-4">
          <Col xs={6} md={3}>
            <Card className="doc-card">
              <Card.Img variant="top" src={doc1} />
            </Card>
          </Col>

          <Col xs={6} md={3}>
            <Card className="doc-card">
              <Card.Img variant="top" src={doc2} />
            </Card>
          </Col>

          <Col xs={6} md={3}>
            <Card className="doc-card">
              <Card.Img variant="top" src={doc3} />
            </Card>
          </Col>

          <Col xs={6} md={3}>
            <Card className="doc-card">
              <Card.Img variant="top" src={doc4} />
            </Card>
          </Col>
        </Row>

        {/* Bottom Text */}
        <div className="official-text">
          <p>
            All statutory registrations and legal compliances are up-to-date
            and maintained as per Government of India regulations.
          </p>
        </div>

      </Container>
    </div>
    </div>
  );
}

export default Certifications;
