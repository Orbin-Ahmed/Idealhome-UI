"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextSplit from "./TestSplit";
import Link from "next/link";

interface ProjectItem {
  id: number;
  contact?: string;
  title: string;
  text: string;
  btnText?: string;
}

export const yourProject = [
  {
    id: 1,
    contact: " Contact \n Us",
    title: "How Can We \n Help You?",
    text: "Find out how you can get a landscape \n that supports your goals",
  },
  {
    id: 2,
    title: " Let's Start Your \n Project",
    text: "Make an appointment & Start \n your project today.",
    btnText: "Project",
  },
];

const YourProject: React.FC = () => {
  return (
    <section className="your-project-one">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="your-project-one__wrapper">
              <ul>
                {yourProject.map(
                  ({ id, contact, title, text, btnText }: ProjectItem) => (
                    <li key={id} className="your-project-one__single">
                      <div
                        className={`your-project-one__single-text-box${
                          btnText ? " mar-t0" : ""
                        }`}
                      >
                        <TextSplit text={title} as="h2" />
                        <TextSplit text={text} as="p" />
                      </div>
                      {btnText && (
                        <Link
                          href="/about-us"
                          className="btn shadow-primary btn-primary btn-quote-2 rounded-sm project-btn"
                        >
                          {btnText}
                        </Link>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default YourProject;
