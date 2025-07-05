import { Row, Col } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = () => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Title>Contacto</Title>
              <Large to="/">Cuéntanos todo</Large>
              <Para>
                ¿Tienes alguna pregunta? No dudes en contactarnos.
              </Para>
              <a href="mailto:info@craftia.com">
                <Chat>Charlemos</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>Política</Title>
              <Large to="/">Seguridad de la aplicación</Large>
              <Large to="/">Principios de software</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large to="/">Centro de Soporte</Large>
              <Large to="/">Atención al cliente</Large>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Title>Dirección</Title>
              <Para>Tu Dirección Aquí</Para>
              <Para>Ciudad, País</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>Empresa</Title>
              <Large to="/">Acerca de</Large>
              <Large to="/">Blog</Large>
              <Large to="/">Prensa</Large>
              <Large to="/">Carreras & Cultura</Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <p>Tu Logo Aquí</p>
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/asepulvedadev/template1-craftia"
                src="github.svg"
              />
              <SocialLink
                href="#"
                src="twitter.svg"
              />
              <SocialLink
                href="#"
                src="linkedin.svg"
              />
              <SocialLink
                href="#"
                src="medium.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default Footer;