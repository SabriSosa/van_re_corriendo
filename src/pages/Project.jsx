import { useEffect, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import ProjectItem from "../components/ProjectItem";
import Wave from "../components/Wave";
import HtmlContainer from "../components/generic/HtmlContainer";
import TitleComp from "../components/generic/Title";
import * as FirestoreService from "../services/firestore";
import "./Project.scss";
import CustomSpinner from "../components/generic/CustomSpinner";

function ProjectForm() {
  const [projects, setProjects] = useState();
  const [text, setText] = useState("");
  const [waiting, setWaiting] = useState(true);

  const onClick = (prop) => {
    window.location.href = prop;
  };

  useEffect(() => {
    async function fetchData() {
    
    }
    fetchData();
  }, []);

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
        <article className="card " key={section.title}>
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
    const projects = await FirestoreService.getProjects();
    const response = await FirestoreService.getText("project");
    setText(response.description);
    setProjects(projects);
    setWaiting(false);
  };

  useEffect(() => {
    getProjects();
  }, []);

  if (waiting) {
    return <CustomSpinner />;
  }

  return (
    <Container className="project">
      <TitleComp title1="Construccion" title2="" />
      <ScrollToTop smooth color="rgba(116, 169, 219, 1)" />
      <HtmlContainer text={text} />

      <Image
        className="full-image"
        src="https://res.cloudinary.com/djbmfd9y6/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673556330/Camiontito/IMG_20220514_150555_ed0ev6.jpg"
      />
      <Wave className="wave-project" children={info} />

      {projects?.map((item) => (
        <ProjectItem key={item.id} item={item} />
      ))}
    </Container>
  );
}
export default ProjectForm;
