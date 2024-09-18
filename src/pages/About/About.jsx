import { useEffect, useState } from "react";
import Testimonial from "./Testimonal";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description:
      "Front-End Developer using ReactJS Library and Tailwind CSS framework.",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "Learning and exploring MERN Stack Development.",
  },
  {
    icon: "/images/icon-app.svg",
    title: "Software Development",
    description: "Eager to learn Software Development.",
  },
];

const About = () => {
  // const [testimonials, setTestimonials] = useState([]);
  // useEffect(() => {
  //   fetch("testimonials.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setTestimonials(data);
  //     });
  // }, []);
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am pursuing my Bachelor of Technology in Computer Science and
          Engineering at Raj Kumar Goel Institute of Technology, Ghaziabad. I
          have completed my schooling from Uma Devi Childrens Academy, Mohammadi
          Kheri.
        </p>
        <p>
          Seeking an Entry-level Software or Web Developer position to continue
          expanding my knowledge of Programming and Development.I am a frontend
          Developer and learning Backend Development using MERN(MongoDB,
          ExpressJS, ReactJS, NodeJS) Technology.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* <!--
        - testimonials
      --> */}

      {/* <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section> */}

      {/* <!--
        - clients
      --> */}

      {/* <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section> */}
    </article>
  );
};

export default About;
