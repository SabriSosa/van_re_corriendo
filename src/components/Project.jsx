import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import TitleComp from "./Title";
import { Image } from "react-bootstrap";
import "./Project.scss";
import Wave from "./Wave";

function ProjectForm() {

  const onClick = (prop) => {
    window.location.href = prop;
  };

  const info = (
    <Container fluid>
      <Row className="information">
        <Col>
          <ListGroup className="list">
            <ListGroupItem onClick={() => onClick("#design")}>
              Diseño
            </ListGroupItem>
            <ListGroupItem onClick={() => onClick("#isolation")}>
              Aislamiento 
            </ListGroupItem>
            <ListGroupItem onClick={() => onClick("#electric")}>
              Instalacion Electrica 
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup className="list">
            <ListGroupItem onClick={() => onClick("#coating")}>
              Revestimiento 
            </ListGroupItem>
            <ListGroupItem onClick={() => onClick("#bathroom")}>
              Baño 
            </ListGroupItem>
            <ListGroupItem onClick={() => onClick("#bed")}>
              Sofa Cama 
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup className="list">
            <ListGroupItem onClick={() => onClick("#wite-water")}>
              Aguas Blancas 
            </ListGroupItem>
            <ListGroupItem onClick={() => onClick("#gray-water")}>
              Aguas Grises 
            </ListGroupItem>
            <ListGroupItem onClick={() => onClick("#black-water")}>
              Aguas Negras 
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );

  return (
    <Container className="title-content">
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
      de ese momento. Cuando tomamos la decisión de salir a recorrer América y
      luego de conseguir el vehículo que queríamos, llego el momento de ver cómo
      armarlo por dentro. Averiguamos precios en distintas empresas que se
      dedicaban a hacerlo y con todas teníamos el mismo problema, no llegábamos
      de ninguna manera a pagar lo que nos pedían. Esto hizo que tomáramos la
      decisión de hacerlo por nuestra cuenta. Empezamos a buscar distintos
      tutoriales e información en internet pero nunca logramos dar con una guía
      paso a paso de cómo hacerlo. De ahí surge la idea de hacer este tutorial
      para poder simplificar las cosas a aquellos que están por pasar por
      nuestra situación de ese momento.
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
    </Container>
  );
}
export default ProjectForm;
