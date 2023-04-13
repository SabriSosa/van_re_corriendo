import { Container } from "react-bootstrap";
import { Image, Button } from "react-bootstrap";
import "./Project.scss";
import TitleComp from "../components/Title";
import Wave from "../components/Wave";
import ProjectItem from "../components/ProjectItem";
import * as FirestoreService from "../services/firestore";
import { useEffect, useState } from "react";

function ProjectForm() {
  const [projects, setProjects] = useState();

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
    { title: "Almacenamiento", action: "storage" },
    { title: "Aguas Blancas", action: "white-water" },
    { title: "Aguas Grises", action: "gray" },
    { title: "Aguas Negras", action: "black-water" },
    { title: "Cocina", action: "kitchen" },
    { title: "Energia Solar", action: "solar" },
    { title: "Calefacion", action: "hot-cool" },
  ];

  const info = (
    <section className="cards">
      {sections.map((section) => (
        <article className="card">
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

  const getProjects = async () => {
    const querySnapshot = await FirestoreService.getProjects();

    // reset the todo items value
    setProjects([]);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setProjects((prev) => [
        ...prev,
        {
          ...data,
        },
      ]);
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Container className="project">
      <TitleComp title1="Construccion" title2="" />

      <p>
        Si sos de las personas que les encanta viajar, te imaginas levantándote
        todos los días en un lugar diferente? Conocer distintas personas y
        costumbres nuevas? O simplemente te gusta escaparte los fines de semana
        o en tus vacaciones y no estar dependiendo de la disponibilidad y los
        horarios de hoteles costosos, sin dudas el motorhome es una excelente
        opción. Si a eso le sumas la experiencia de construirlo vos mismo/a,
        como resultado es un proyecto hermoso y satisfactorio que cuando salís a
        la ruta sin dudas es único.
      </p>
      <p>
        Hoy por hoy, ya habiendo experimentado por un tiempo la sensación de
        libertad que te da un motorhome, queremos compartirlo con todos como fue
        nuestro proceso de construcción.
      </p>
      <p>
        Sin dudas, el hacerlo uno mismo conlleva que no todo sea perfecto ni
        mucho menos (aunque el objetivo principal debería ser que sea funcional)
        pero si una gran satisfacción y además te da la certeza de que ante
        cualquier reparación/modificación sabes exactamente como está todo
        construido.
      </p>
      <p>
        Intentamos que la explicación sea lo más clara posible, dividiéndolo en
        diferentes secciones y tratando de especificar que materiales utilizamos
        y que fue lo que intentamos hacer.
      </p>
      <Image
        className="full-image"
        //src="https://res.cloudinary.com/djbmfd9y6/image/upload/c_scale,h_1736,w_2320/v1673556330/Camiontito/IMG_20220514_150555_ed0ev6.jpg"
        src="https://res.cloudinary.com/djbmfd9y6/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673556330/Camiontito/IMG_20220514_150555_ed0ev6.jpg"
      />
      <Wave children={info} />

      {projects?.map((item) => (
        <ProjectItem
          count={item.count}
          title={item.title}
          id={item.id}
          description={item.description}
          video={item.video}
        />
      ))}
    </Container>
  );
}
export default ProjectForm;
