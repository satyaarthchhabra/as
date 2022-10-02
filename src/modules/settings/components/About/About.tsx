import { Container, Item } from "./about.style";

const About = () => {
  return (
    <Container>
      <Item>
        <p className="item-heading">Version</p>
        <div className="item-body">
          <p className="item-body__text">1.0.0 </p>
        </div>
      </Item>
      <Item>
        <p className="item-heading">Source code</p>
        <div className="item-body">
          <a
            href="https://github.com/satyaarthchhabra/kingscreen/"
            className="item-body__link"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/satyaarthchhabra/kingscreen/
          </a>
        </div>
      </Item>
      <Item>
        <p className="item-heading">Developer</p>
        <div className="item-body">
          <a
            href="https://linkedin.com/in/satyaarthchhabra"
            className="item-body__link"
            target="_blank"
            rel="noreferrer"
          >
            satyaarth chhabra
          </a>
        </div>
      </Item>
    </Container>
  );
};

export default About;
