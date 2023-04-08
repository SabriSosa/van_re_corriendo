import { Container } from "react-bootstrap";
import { Image, Button } from "react-bootstrap";
import "./Project.scss";
import TitleComp from "../components/Title";
import Wave from "../components/Wave";
import ProjectItem from "../components/ProjectItem";

function ProjectForm() {
  const onClick = (prop) => {
    window.location.href = prop;
  };

  const sections = [
    { title: "Diseño", action: "design" },
    { title: "Aislamiento", action: "isolation" },
    { title: "Electricidad", action: "electric" },
    { title: "Revestimiento", action: "coating" },
    { title: "Baño", action: "bathroom" },
    { title: "Sofa Cama", action: "bed" },
    { title: "Almacenamiento", action: "storage"},
    { title: "Aguas Blancas", action: "white-water" },
    { title: "Aguas Grises", action: "gray-water" },
    { title: "Aguas Negras", action: "black-water" },
    { title: "Cocina", action: "kitchen" },
    { title: "Energia Solar", action: "solar" },
    { title: "Calefacion", action: "hot-cool" },
  ];

  const info = (
    <section class="cards">
      {sections.map((section) => (
        <article class="card">
          <Button
            variant="outline-light"
            onClick={() => onClick(`#${section.action}`)}
          >
            {section.title}
          </Button>
        </article>
      ))}
    </section>
  );

  return (
    <Container className="project">
      <TitleComp title1="Construccion" title2="" />
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
      <ProjectItem
        count={1}
        title="Diseño"
        id="design"
        description="Una vez que nos decidimos a construir un motorhome nos pusimos a investigar al respecto, 
        y lo primero que nos preguntamos es: que hacemos? Empezamos a seguir a muchos viajeros que habían 
        construido su propio motorhome para sacar ideas, mucho YouTube y mucho Instagram, y luego de dibujar
        muchos bocetos llegamos a una idea de lo que sería nuestro diseño. Una de las conclusiones fue que 
        por distribución lo ideal era hacer la cama a lo ancho, también queríamos un baño cómodo porque era
        uno de los problemas más comunes en otros viajeros. En cuanto al estilo nos interesaba que tuviera
        un estilo cálido y artesanal por eso elegimos el color blanco mate de color base y detalles en un azul pastel.
        Algo que nos ayudó mucho a visualizar el diseño fue la página sketchup, con esta herramienta online
        es posible realizar los planos en 3D con las medidas exactas, objetos ya predefinidos, de forma muy 
        simple es posible generar renders muy realistas."
        video = {true}
      />
      <ProjectItem
        count={4}
        title="Aislacion"
        id="isolation"
        description="Manos a la obra! 👷🏽‍♀️🛠️👷🏼‍♂️ Llegó el momento del desarme para empezar de
            cero. Quitar todo el revestimiento interior de la camio que alguna
            vez la hizo ambulancia y empezar con una etapa que es fundamental:
            aislación. Tanto para el frío como para el calor es muy importante
            la aislación térmica, luego de muchas muchas horas de investigación
            decidimos utilizar poliuretano expandido y lana PET. Además, para
            evitar la condensación y futuros problemas de óxido era necesaria
            una barrera de vapor y para eso usamos polipropileno aluminizado. 🤓"
      />
      <ProjectItem
        count={2}
        title="Electricidad"
        id="electric"
        description=" Luego de decidir la ubicación final de cada uno de los espacios que
            conforman el motorhome, definimos donde iban a estar ubicados los
            diferentes componentes electrónicos: luces, puertos usb, bomba de
            agua, el panel de control, la batería y el sistema de energía solar.
            En cuanto a las luces para el techo utilizamos plafones led de 12mm
            de espesor que permiten ser empotrados en el revestimiento de
            machimbre, quedando 3 sectores de luces de techo: baño, pasillo,
            dormitorio. Además, en el dormitorio, en la cabecera de la cama
            colocamos dos luces flexibles de lectura que cuentan también con
            interruptor y un puerto usb cada una. En la cocina colocamos una
            pequeña tira led que ilumina la mesada para cocinar y en el piso
            alrededor del pasillo una tira led cálida. El panel de control con
            todos los interruptores están a la entrada sobre la cabina y detrás,
            una fusilera para los diferentes circuitos, fusible de luces (10A),
            fusible de carga (15A), bomba de agua (20A) La batería que
            utilizamos es una AGM de 200Ah ciclo profundo, estas permiten
            utilizar hasta un 75% de su carga, son más eficientes que las
            tradicionales de plomo/acido y son mucho mas baratas que las de
            litio. En cuanto al sistema de energía solar decidimos colocar un
            panel de 380W y un controlador de carga tecnología MPPT de 30A"
      />
      <ProjectItem
        count={5}
        title="Revestimiento"
        id="coating"
        description="Para el revestimiento utilizamos machimbre de pino de 10mm para
            revestir paredes y techo amurados a los parantes con muuuchos
            tornillos autoperforantes. Luego de colocado el revestimiento lo
            pintamos con hidroesmalte sintético mate color blanco, que le dio
            mucha calidez y un toque rustico artesanal que nos interesaba
            remarcar. En el piso colocamos fenólico de 18mm que tratamos con un
            protector para madera para darle una protección hidrofuga, y luego
            sobre éste colocar el piso flotante vinílico con sistema click."
      />
      <ProjectItem
        count={12}
        title="Baño"
        id="bathroom"
        description=" Baño 🚿: para la construcción de la estructura del baño utilizamos
            madera fenólica con varias manos de protector para la humedad. Para
            el plato de la ducha colocamos varias capas de fibra de vidrio y
            resina. Tanto las paredes como en el techo decidimos revestirlo de
            pvc expandido, es un material impermeable, con una linda terminación
            y bastante sencillo de manipular. Además colocamos una claraboya que
            aporta luz y ventilación. 😉."
      />
      <ProjectItem
        count={3}
        title="Sofa Cama"
        id="bed"
        description="Luego de analizar muchos ejemplos de camas, definimos realizar un espacio que fuera útil
        para dormir y para ser utilizado como sillón. A su vez una de los motivos de elegir la Peugeot Boxer 
        fue que es muy ancha (casi 2 mts) con respecto a otras marcas y eso nos permitiría hacer la cama a lo ancho.
        Por lo tanto nos decidimos por hacer un sofá cama que debería ser lo suficientemente práctico
        para desarmar/armar diariamente, así que lo hicimos con dos parrillas una fija y otra retráctil que corre por un riel,
        con dos planchas de espuma de 20cm de alta densidad que cuando se hace sofá una funciona de respaldo.
        Hicimos la cama tan alta como pudimos ya que debajo de ésta sería nuestro espacio de guardado y dónde
        iría el tanque de aguas blancas. De ancho tiene 130cm solo 10cm menos que una tradicional de 2 plazas, 
        cómo resultado tenemos una cama súper cómoda y fácil de armar a diario."
      />
       <ProjectItem
        count={5}
        title="Almacenamiento"
        id="storage"
        description="Como nuestro objetivo era vivir en el motorhome, nuestro espacio de guardado tendría que ser importante.  

        Uno de los aspectos más complicados a nuestro entender a la hora de hacer un cambio tan radical en tu forma de vida es acostumbrarte a vivir con menos, es evidente que no vas a poder viajar con todas tus pertenencias, ni toda tu ropa, ni todos tus accesorios, ni todos tus artículos de cocina. Muchas veces asociamos calidad de vida con acumulación de objetos realmente innecesarios o sustituibles por uno más genérico. 
        
        De todas formas, necesitábamos un almacenamiento considerable, y decidimos repartirlo en secciones, una para la ropa (ropero), uno para las cosas de la cocina (aéreo grande) y otro para el resto de las cosas (aéreo pequeño), y un montón de recovecos más donde se pueden guardar cositas 😊  
        
        El ropero tiene 3 estantes con rieles para acceder a la parte posterior y a su vez el primer estante, en la parte inferior tiene dos percheros. Como resultado (y un tanto exagerado) tenemos un ropero de casi 1,90m de altura por 0,80m de ancho y 0,6m de profundidad. 
        
        Los aéreos al igual que el ropero, usamos estructura de madera con alfajías de 2x1 y fenólico para paredes y puertas. El pequeño del lado del ropero es de 1,20 y el grande de casi 2,00 de largo siendo de 30 x 30 (alto, profundo)"
      />
    
    </Container>
  );
}
export default ProjectForm;
