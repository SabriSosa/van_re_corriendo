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
    { title: "Aislación", action: "isolation" },
    { title: "Electricidad", action: "electric" },
    { title: "Revestimiento", action: "coating" },
    { title: "Baño", action: "bathroom" },
    { title: "Sofa Cama", action: "bed" },
    { title: "Almacenamiento", action: "storage"},
    { title: "Aguas Blancas", action: "white-water" },
    { title: "Aguas Grises", action: "gray" },
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

      <p>
      Si sos de las personas que les encanta viajar, te imaginas levantándote todos los días en un lugar diferente? 
      Conocer distintas personas y costumbres nuevas? O simplemente te gusta escaparte los fines de semana o en tus vacaciones 
      y no estar dependiendo de la disponibilidad y los horarios de hoteles costosos, sin dudas el motorhome es una excelente opción.
      Si a eso le sumas la experiencia de construirlo vos mismo/a, como resultado es un proyecto hermoso y satisfactorio que cuando 
      salís a la ruta sin dudas es único.
      </p>
      <p>
      Hoy por hoy, ya habiendo experimentado por un tiempo la sensación de libertad que te da un motorhome, 
      queremos compartirlo con todos como fue nuestro proceso de construcción.
      </p>
      <p>
      Sin dudas, el hacerlo uno mismo conlleva que no todo sea perfecto ni mucho menos (aunque el objetivo principal debería ser que sea funcional)
       pero si una gran satisfacción y además te da la certeza de que ante cualquier reparación/modificación sabes exactamente como está todo construido. 
      </p>
      <p>
      Intentamos que la explicación sea lo más clara posible, dividiéndolo en diferentes secciones y tratando de especificar que materiales utilizamos y que fue lo que intentamos hacer.
      </p>
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
        title="Aislación"
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
        count={4}
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
        Uno de los aspectos más complicados a nuestro entender a la hora de hacer un cambio tan radical en tu forma de vida es acostumbrarte a vivir con menos, es evidente que no vas a poder viajar con todas tus pertenencias, ni toda tu ropa, ni todos tus accesorios, ni todos tus artículos de cocina. 
        Muchas veces asociamos calidad de vida con acumulación de objetos realmente innecesarios o sustituibles por uno más genérico.         
        De todas formas, necesitábamos un almacenamiento considerable, y decidimos repartirlo en secciones, una para la ropa (ropero), uno para las cosas de la cocina (aéreo grande) y otro para el resto de las cosas (aéreo pequeño), y un montón de recovecos más donde se pueden guardar cositas 😊          
        El ropero tiene 3 estantes con rieles para acceder a la parte posterior y a su vez el primer estante, en la parte inferior tiene dos percheros. Como resultado (y un tanto exagerado) tenemos un ropero de casi 1,90m de altura por 0,80m de ancho y 0,6m de profundidad.         
        Los aéreos al igual que el ropero, usamos estructura de madera con alfajías de 2x1 y fenólico para paredes y puertas. El pequeño del lado del ropero es de 1,20 y el grande de casi 2,00 de largo siendo de 30 x 30 (alto, profundo)"
      />

      <ProjectItem
        count={4}
        title="Aguas Grises"
        id="gray"
        description="El depósito de aguas grises es aquel que contiene las aguas ya utilizadas tanto de la cocina como de la ducha y que por supuesto no se pueden tirar en cualquier parte donde estaciones.
        Debajo del chasis de la camioneta había casi un único lugar posible donde colocarlo de unos 30cm de ancho por 120cm de largo, 
        así que luego de pedir cotizaciones por trabajos en fibra de vidrio y en acero, decidimos fabricarlo nosotros mismos porque nos resultaba un tanto costoso un accesorio que en definitiva solo contenía agua sucia. 
        Con 3 tarrinas de 30 litros conectadas entre sí, formando un único deposito, logramos un tanque de unos 70/80 litros que resultan suficientes para varios días de uso."
      />

      <ProjectItem
        count={3}
        title="Aguas Negras "
        id="black-water"
        description="En cuanto al depósito de aguas negras analizamos las diferentes opciones que se acostumbra a usar entre los viajeros y las opciones son 4. 
        Por un lado, los inodoros fijos con depósito de descarga directa. No consumen casi nada de agua y nada de electricidad, pero se necesita más espacio tanto dentro del baño como fuera del motorhome para su respectivo deposito.         
        El también fijo inodoro triturador, estos consumen más agua y más electricidad, son más similares a los domésticos, pero también requieren depósito y son costosos         
        Los inodoros secos, estos son los más económicos en costo y mantenimiento, y son portátiles, aunque pueden ser menos higiénicos y con mal olor         
        Finalmente, la opción que elegimos fue la del químico, estos no consumen electricidad y muy poca agua, a su vez se puede mover de lugar, por ejemplo, para ducharte y utilizando el producto químico adecuado los desechos son prácticamente inoloros. 
        Nosotros además construimos una parrilla de madera que permite que no se mueva sobre todo cuando está vacío y que sirve para no mojarse los pies luego de la ducha. "
      />
       <ProjectItem
        count={3}
        title="Cocina"
        id="kitchen"
        description="Si bien la gran mayoría de los rodanteros utiliza anafe de una y/o dos hornallas nos pareció que poder tener además un horno sería un aliciente muy importante. 
        Por este motivo fue que optamos por una cocina de dos hornallas con horno integrado que si bien es pequeño nos resultó sumamente útil.         
        La desventaja de esta decisión es que perderíamos un potencial espacio de guardado, pero encontramos una cocina realmente muy compacta, ya que le sacamos las patas que trae de origen y nos permitió incluso tener igual un espacio de guardado debajo de ella. "
      />
    
    </Container>
  );
}
export default ProjectForm;
