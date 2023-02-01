import {
  ButtonGroup,
  Container,
  Row,
} from "react-bootstrap";

import { Image, Button } from "react-bootstrap";
import "./Project.scss";
import TitleComp from "../components/Title";
import Wave from "../components/Wave";

function ProjectForm() {
  const onClick = (prop) => {
    window.location.href = prop;
  };

  const info = (
    <Container fluid>
      <Row className="information">
        <ButtonGroup className="list">
          <Button variant="outline-light" onClick={() => onClick("#design")}>Diseño</Button>{" "}
          <Button variant="outline-light" onClick={() => onClick("#isolation")}>Aislamiento</Button>{" "}
          <Button variant="outline-light" onClick={() => onClick("#electric")}>Instalacion Electrica</Button>{" "}
          <Button variant="outline-light" onClick={() => onClick("#coating")}>Revestimiento</Button>{" "}
        </ButtonGroup>
        <ButtonGroup className="list">
          <Button variant="outline-light" onClick={() => onClick("#bathroom")}>Baño</Button>{" "}
          <Button variant="outline-light" onClick={() => onClick("#bed")}>Sofa Cama</Button>{" "}
          <Button variant="outline-light" onClick={() => onClick("#wite-water")}>Aguas Blancas</Button>{" "}
          <Button variant="outline-light" onClick={() => onClick("#gray-water")}>Aguas Grises</Button>{" "}
        </ButtonGroup>
        <ButtonGroup className="list">
          <Button variant="outline-light" onClick={() => onClick("#black-water")}>Aguas Negras</Button>{" "}
          <Button variant="outline-light" onClick={() => onClick("#kitchen")}>Cocina</Button>{" "}
          <Button variant="outline-light" onClick={() => onClick("#solar")}>Energia Solar</Button>{" "}
          <Button variant="outline-light" onClick={() => onClick("#hot-cool")}>Calefacion</Button>{" "}
        </ButtonGroup>
      </Row>
    </Container>
  );

  return (
    <Container className="content">
      <TitleComp title1="Proyecto" title2="Motorhome" />
      Si tenes el sueño de viajar, conocer muchos lugares, países, culturas o
      simplemente vacacionar de una forma distinta y económica, la mejor manera
      de hacerlo es llevando tu propia casa a cuestas. Cuando tomamos la
      decisión de salir a recorrer América y luego de conseguir el vehículo que
      queríamos, llego el momento de ver cómo armarlo por dentro. Averiguamos
      precios en distintas empresas que se dedicaban a hacerlo y con todas
      teníamos el mismo problema, no llegábamos de ninguna manera a pagar lo que
      nos pedían. Esto hizo que tomáramos la decisión de hacerlo por nuestra
      cuenta. Empezamos a buscar distintos tutoriales e información en internet
      pero nunca logramos dar con una guía paso a paso de cómo hacerlo. De ahí
      surge la idea de hacer este tutorial para poder simplificar las cosas a
      aquellos que están por pasar por nuestra situación de ese momento.
      <Image
        className="full-image"
        src="https://res.cloudinary.com/djbmfd9y6/image/upload/c_scale,h_1736,w_2320/v1673556330/Camiontito/IMG_20220514_150555_ed0ev6.jpg"
      />
      <Wave children={info} />
      <h3 id="isolation">Aislamiento</h3>
      Manos a la obra! 👷🏽‍♀️🛠️👷🏼‍♂️
      Llegó el momento del desarme para empezar de cero. Quitar todo el revestimiento interior de la camio que alguna vez la hizo 
      ambulancia y empezar con una etapa que es fundamental: aislación. Tanto para el frío como para el calor es muy importante la 
      aislación térmica, luego de muchas muchas horas de investigación decidimos utilizar poliuretano expandido y lana PET. Además,
       para evitar la condensación y futuros problemas de óxido era necesaria una barrera de vapor y para eso usamos polipropileno
        aluminizado. 🤓
      <h3 id="electric">Electronica</h3>
      Si tenes el sueño de viajar, conocer muchos lugares, países, culturas o
      simplemente vacacionar de una forma distinta y económica, la mejor manera
      de hacerlo es llevando tu propia casa a cuestas. Cuando tomamos la
      decisión de salir a recorrer América y luego de conseguir el vehículo que
      queríamos, llego el momento de ver cómo armarlo por dentro. Averiguamos
      precios en distintas empresas que se dedicaban a hacerlo y con todas
      teníamos el mismo problema, no llegábamos de ninguna manera a pagar lo que
      nos pedían. Esto hizo que tomáramos la decisión de hacerlo por nuestra
      cuenta. Empezamos a buscar distintos tutoriales e información en internet
      pero nunca logramos dar con una guía paso a paso de cómo hacerlo. De ahí
      surge la idea de hacer este tutorial para poder simplificar las cosas a
      aquellos que están por pasar por nuestra situación de ese momento. Cuando
      tomamos la decisión de salir a recorrer América y luego de conseguir el
      vehículo que queríamos, llego el momento de ver cómo armarlo por dentro.
      Averiguamos precios en distintas empresas que se dedicaban a hacerlo y con
      todas teníamos el mismo problema, no llegábamos de ninguna manera a pagar
      lo que nos pedían. Esto hizo que tomáramos la decisión de hacerlo por
      nuestra cuenta. Empezamos a buscar distintos tutoriales e información en
      internet pero nunca logramos dar con una guía paso a paso de cómo hacerlo.
      De ahí surge la idea de hacer este tutorial para poder simplificar las
      cosas a aquellos que están por pasar por nuestra situación de ese momento.
      Cuando tomamos la decisión de salir a recorrer América y luego de
      conseguir el vehículo que queríamos, llego el momento de ver cómo armarlo
      por dentro. Averiguamos precios en distintas empresas que se dedicaban a
      hacerlo y con todas teníamos el mismo problema, no llegábamos de ninguna
      manera a pagar lo que nos pedían. Esto hizo que tomáramos la decisión de
      hacerlo por nuestra cuenta. Empezamos a buscar distintos tutoriales e
      información en internet pero nunca logramos dar con una guía paso a paso
      de cómo hacerlo. De ahí surge la idea de hacer este tutorial para poder
      simplificar las cosas a aquellos que están por pasar por nuestra situación
      de ese momento.
      <h3 id="coating">Revestimiento</h3>
      Si tenes el sueño de viajar, conocer muchos lugares, países, culturas o
      simplemente vacacionar de una forma distinta y económica, la mejor manera
      de hacerlo es llevando tu propia casa a cuestas. Cuando tomamos la
      decisión de salir a recorrer América y luego de conseguir el vehículo que
      queríamos, llego el momento de ver cómo armarlo por dentro. Averiguamos
      precios en distintas empresas que se dedicaban a hacerlo y con todas
      teníamos el mismo problema, no llegábamos de ninguna manera a pagar lo que
      nos pedían. Esto hizo que tomáramos Cuando tomamos la decisión de salir a
      recorrer América y luego de conseguir el vehículo que queríamos, llego el
      momento de ver cómo armarlo por dentro. Averiguamos precios en distintas
      empresas que se dedicaban a hacerlo y con todas teníamos el mismo
      problema, no llegábamos de ninguna manera a pagar lo que nos pedían. Esto
      hizo que tomáramos la decisión de hacerlo por nuestra cuenta. Empezamos a
      buscar distintos tutoriales e información en internet pero nunca logramos
      dar con una guía paso a paso de cómo hacerlo. De ahí surge la idea de
      hacer este tutorial para poder simplificar las cosas a aquellos que están
      por pasar por nuestra situación de ese momento. Cuando tomamos la decisión
      de salir a recorrer América y luego de conseguir el vehículo que
      queríamos, llego el momento de ver cómo armarlo por dentro. Averiguamos
      precios en distintas empresas que se dedicaban a hacerlo y con todas
      teníamos el mismo problema, no llegábamos de ninguna manera a pagar lo que
      nos pedían. Esto hizo que tomáramos la decisión de hacerlo por nuestra
      cuenta. Empezamos a buscar distintos tutoriales e información en internet
      pero nunca logramos dar con una guía paso a paso de cómo hacerlo. De ahí
      surge la idea de hacer este tutorial para poder simplificar las cosas a
      aquellos que están por pasar por nuestra situación de ese momento. Cuando
      tomamos la decisión de salir a recorrer América y luego de conseguir el
      vehículo que queríamos, llego el momento de ver cómo armarlo por dentro.
      Averiguamos precios en distintas empresas que se dedicaban a hacerlo y con
      todas teníamos el mismo problema, no llegábamos de ninguna manera a pagar
      lo que nos pedían. Esto hizo que tomáramos la decisión de hacerlo por
      nuestra cuenta. Empezamos a buscar distintos tutoriales e información en
      internet pero nunca logramos dar con una guía paso a paso de cómo hacerlo.
      De ahí surge la idea de hacer este tutorial para poder simplificar las
      cosas a aquellos que están por pasar por nuestra situación de ese momento.
      Cuando tomamos la decisión de salir a recorrer América y luego de
      conseguir el vehículo que queríamos, llego el momento de ver cómo armarlo
      por dentro. Averiguamos precios en distintas empresas que se dedicaban a
      hacerlo y con todas teníamos el mismo problema, no llegábamos de ninguna
      manera a pagar lo que nos pedían. Esto hizo que tomáramos la decisión de
      hacerlo por nuestra cuenta. Empezamos a buscar distintos tutoriales e
      información en internet pero nunca logramos dar con una guía paso a paso
      de cómo hacerlo. De ahí surge la idea de hacer este tutorial para poder
      simplificar las cosas a aquellos que están por pasar por nuestra situación
      de ese momento. Cuando tomamos la decisión de salir a recorrer América y
      luego de conseguir el vehículo que queríamos, llego el momento de ver cómo
      armarlo por dentro. Averiguamos precios en distintas empresas que se
      dedicaban a hacerlo y con todas teníamos el mismo problema, no llegábamos
      de ninguna manera a pagar lo que nos pedían. Esto hizo que tomáramos la
      decisión de hacerlo por nuestra cuenta. Empezamos a buscar distintos
      tutoriales e información en internet pero nunca logramos dar con una guía
      paso a paso de cómo hacerlo. De ahí surge la idea de hacer este tutorial
      para poder simplificar las cosas a aquellos que están por pasar por
      nuestra situación de ese momento. Cuando tomamos la decisión de salir a
      recorrer América y luego de conseguir el vehículo que queríamos, llego el
      momento de ver cómo armarlo por dentro. Averiguamos precios en distintas
      empresas que se dedicaban a hacerlo y con todas teníamos el mismo
      problema, no llegábamos de ninguna manera a pagar lo que nos pedían. Esto
      hizo que tomáramos la decisión de hacerlo por nuestra cuenta. Empezamos a
      buscar distintos tutoriales e información en internet pero nunca logramos
      dar con una guía paso a paso de cómo hacerlo. De ahí surge la idea de
      hacer este tutorial para poder simplificar las cosas a aquellos que están
      por pasar por nuestra situación de ese momento. la decisión de hacerlo por
      nuestra cuenta. Empezamos a buscar distintos tutoriales e información en
      internet pero nunca logramos dar con una guía paso a paso de cómo hacerlo.
      De ahí surge la idea de hacer este tutorial para poder simplificar las
      cosas a aquellos que están por pasar por nuestra situación de ese momento.
<h3 id="bano"> Bano </h3>
Baño 🚿 para la construcción de la estructura del baño utilizamos madera fenólica con varias manos de protector para la humedad. 
Para el plato de la ducha colocamos varias capas de fibra de vidrio y resina. Tanto las paredes como en el techo decidimos revestirlo de pvc expandido, es un material impermeable, 
con una linda terminación y bastante sencillo de manipular. Además colocamos una claraboya que aporta luz y ventilación. 😉

    </Container>
  );
}
export default ProjectForm;
