import { t, Trans } from "@lingui/macro";
import React, { Suspense, useEffect } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "react-scroll-to-top";
import HtmlContainer from "../components/generic/HtmlContainer";
import TitleComp from "../components/generic/Title";
import Wave from "../components/Wave";
import {
  fetchProjects,
  selectAllProjects,
  selectStatusProject,
} from "../slices/projectSlice";
import "./Project.scss";

const ProjectItem = React.lazy(() => import("../components/ProjectItem"));

function ProjectForm() {
  const dispatch = useDispatch();
  const projects = useSelector(selectAllProjects);
  const statusProject = useSelector(selectStatusProject);

  useEffect(() => {
    if (statusProject === "initial") {
      dispatch(fetchProjects());
    }
  }, [statusProject, dispatch]);

  const onClick = (prop) => {
    const selectedPlaceElem = document.getElementById(prop);
    selectedPlaceElem.scrollIntoView({
      block: "center",
      inline: "center",
      behavior: "smooth",
    });
  };

  const sections = [
    { title: <Trans>project.design</Trans>, action: "design" },
    { title: <Trans>project.isolation</Trans>, action: "isolation" },
    { title: <Trans>project.electric</Trans>, action: "electric" },
    { title: <Trans>project.coating</Trans>, action: "coating" },
    { title: <Trans>project.bathroom</Trans>, action: "bathroom" },
    { title: <Trans>project.bed</Trans>, action: "bed" },
    { title: <Trans>project.storage</Trans>, action: "storage" },
    { title: <Trans>project.white-water</Trans>, action: "white-water" },
    { title: <Trans>project.gray</Trans>, action: "gray" },
    { title: <Trans>project.black-water</Trans>, action: "black-water" },
    { title: <Trans>project.kitchen</Trans>, action: "kitchen" },
    { title: <Trans>project.solar</Trans>, action: "solar" },
    { title: <Trans>project.hot-cool</Trans>, action: "hot-cool" },
  ];
  const info = (
    <section className="cards">
      {sections.map((section) => (
        <article className="card " key={section.action}>
          <Button
            variant="outline-light"
            onClick={() => onClick(section.action)}
          >
            {section.title}
          </Button>
        </article>
      ))}
    </section>
  );

  return (
    <Container className="project-container">
      <TitleComp title1="Construccion" title2="" />
      <ScrollToTop smooth color="rgba(116, 169, 219, 1)" />
      <HtmlContainer text={t`project.intro`} />

      <Image
        className="full-image"
        src="https://res.cloudinary.com/djbmfd9y6/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673556330/Camiontito/IMG_20220514_150555_ed0ev6.jpg"
      />
      <Wave className="wave-project" children={info} />

      {projects?.map((item) => (
        <Suspense key={item.id} fallback={<div></div>}>
          <ProjectItem key={item.id} item={item} />
        </Suspense>
      ))}
    </Container>
  );
}
export default ProjectForm;
