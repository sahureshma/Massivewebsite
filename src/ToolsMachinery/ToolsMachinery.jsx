import React from "react";
import "./ToolsMachinery.css";
import bgImage from "../assest/excavator.jpg"; 
import { Container, Row, Col } from "react-bootstrap";

function ToolsMachinery() {
      const equipmentData = [
    {
      title: "250 TPH TWO STAGE NW RAPID SERIES CRUSHING - 1 NOS.",
      desc: "MAKE/ MODEL : METSO INDIA PVT.LTD.(2017)",
    },
    {
      title: "SLIPFORM PAVER FINISHER SF 1700 - 1 NOS.",
      desc: "MAKE/ MODEL : 2017",
    },
    {
      title: "AJAX TRANSIT MIXER - 5 NOS.",
      desc: "MAKE/ MODEL : AJAX 2013,2016 COPY OF TAX INVOICE ENCLOSED",
    },
    {
      title: "TRANSIT MIXTURE - 6 NOS.",
      desc: "MAKE/ MODEL : SHWING STETTER",
    },
    {
      title: "BATCHING PLANT - 3 NOS.",
      desc: "MAKE/ MODEL : 2013,2017 SHWING STETTER",
    },
    {
      title: "HYWA - 50 NOS.",
      desc: "MAKE/ MODEL : TATA LPK2518/2014 TATA LPK2523/2015/ BHARATBENZ2016/2017/2018",
    },
    {
      title: "MOTOR GRADER - 6 NOS.",
      desc: "MAKE/ MODEL : VOLVO GRADER G930(2015),LIUGONG(2016) CAT (2017),2018",
    },
    {
      title: "APOLLO PAVER FINISHER - 4 NOS.",
      desc: "MAKE/ MODEL : APOLLO",
    },
    {
      title: "HOT MIX PLANT - 2 NOS.",
      desc: "MAKE/ MODEL : SIDHARTH EQUIPMENT",
    },
  ];
  return (
    <div>
    <div
      className="tools-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container className="tools-content text-center">

        <div className="yellow-border-box">

          <div className="title-badge">
            Tools And Machinary
          </div>

          <div className="description-card">
            Comprehensive Infrastructure And Construction Solutions
            Tailored To Meet The Demanding Requirements Of Power
            Plants, Industrial Facilities, And Large-Scale Projects.
          </div>

        </div>

      </Container>
    </div>
        <section className="equipment-section">
      <Container>
        <h2 className="equipment-heading text-center">
          LIST OF <span>EQUIPMENT/MACHINES</span>
        </h2>

        <Row>
          {equipmentData.map((item, index) => (
            <Col lg={4} md={6} sm={12} key={index} className="mb-4">
              <div className="equipment-card">
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Pagination */}
        <div className="pagination-box text-center">
          <button className="page-btn">‹</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">›</button>
        </div>
      </Container>
    </section>
    </div>
  );
}

export default ToolsMachinery;
