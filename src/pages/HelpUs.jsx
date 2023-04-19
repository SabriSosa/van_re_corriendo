import React from "react";

import { Container } from "react-bootstrap";
import TitleComp from "../components/generic/Title";

import "./HelpUs.scss";

function HelpUs() {
  return (
    <Container className="helpUs">
      <TitleComp title1="Ayudanos" />
      <p>
      Si llegaste hasta acá es porque quieres ayudarnos de alguna forma con nuestro viaje, así que desde ya te lo agradecemos muchísimo.
      </p>
      <p>
        Como se menciona en la sección que habla sobre nosotros, somos profesionales de la informática, 
        así que decidimos no solo crear nuestro propio sitio web, sino que también ofrecer nuestro servicio por este medio.
        Así que si tienes algún proyecto web en mente o estás necesitando para empresa o negocio alguna solución informática, 
        no dudes en contactarnos que te podemos ayudar.
      </p>
      <p>
        Además, decidimos incluir publicidad dentro nuestro blog, por lo que, si estás interesado en publicitar dentro 
        de nuestro sitio (una empresa, marca, producto y/o servicio) y llegar a muchos viajeros y/o amantes de nuestro viaje, 
        también te podemos ayudar con eso.
      </p>
      <p>
      Puedes contactarnos directamente desde nuestro sitio web, <a href="/contact"> Envianos un mensaje!! </a>
      </p>

      <p>
      O escribirnos desde las redes sociales:
      <a className="social" href="https://www.messenger.com/t/100085509656617" target="_blank">
      <img src="https://res.cloudinary.com/djbmfd9y6/image/upload/c_scale,w_150/v1681856889/Camiontito/fb-logo.png"/>
      </a>
    
      <a className="social" href="https://www.instagram.com/direct/t/340282366841710300949128174428524375496"target="_blank">
      <img src="https://res.cloudinary.com/djbmfd9y6/image/upload/c_scale,w_150/v1681857600/Camiontito/ig-logo.png"/>
      </a>
      </p>

     

    </Container>
  );
}

export default HelpUs;
