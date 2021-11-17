import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle";
const Footer = () => {
  return (
    <Box style={{ marginTop: "30%" }}>
      <h1
        style={{
          color: "rgb(82, 23, 47)",
          textAlign: "center",
          marginTop: "-50px",
          marginBottom: "30px",
        }}
      >
        kHEDMA.TN votre ami pour créer votre carière professionnel
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Espace candidat</Heading>
            <FooterLink href="#">Tous les offres</FooterLink>
            <FooterLink href="#">Conseils carrère</FooterLink>
            <FooterLink href="#">Profils d'entreprise</FooterLink>
            <FooterLink href="#">Aide</FooterLink>
          </Column>
          <Column>
            <Heading>Espace recruteurs</Heading>
            <FooterLink href="#">Nos produits</FooterLink>
            <FooterLink href="#">Nos tarifs</FooterLink>
            <FooterLink href="#">Info RH</FooterLink>
            <FooterLink href="#">Aide</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
