import { collection, query, where } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Post.scss";
import { FaShuttleVan } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";


import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TwitterIcon,
  FacebookIcon,
  PinterestIcon,
  WhatsappIcon,
  LinkedinIcon
} from "react-share";
import TitleComp from "./Title";

export default function BlogPost() {
  // const postRef = collection(useFirestore(), "post");

  // const populationQuery = query(postRef, where("title", "==", "Mendozas"));

  // const { status, data } = useFirestoreCollectionData(postRef);

  // if (status === "loading") {
  //   return <p>Fetching posts...</p>;
  // }

  // const test = [
  //   {
  //     title: "Mendoza",
  //     description:
  //       "Mendoza es muy lindo.Mendoza es muy lindo.Mendoza es muy lindo.Mendoza es muy lindo.Mendoza es muy lindo.Mendoza es muy lindo.",
  //   },
  //   {
  //     title: "Neuquen",
  //     description:
  //       "Neuquen es muy lindo.Neuquen es muy lindo.Neuquen es muy lindo.Neuquen es muy lindo.Mendoza es muy lindo.Mendoza es muy lindo.",
  //   },
  // ];
  // return (
  //   <div>
  //     <ul>
  //       {data?.map((post) => (
  //         <Paper>
  //           <Card>
  //             {post.title}- {post.description}
  //           </Card>
  //         </Paper>
  //       ))}
  //     </ul>
  //   </div>
  // );\

  const images = [
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  ];

  //   return (
  //     <Container className="container-posts">
  //       {images.map((image) => (
  //         <Card>
  //           <Card.Img variant="top" href={image} />
  //         </Card>
  //       ))}
  //     </Container>
  //   );
  // }

  return (
    <Container className="container-posts">
     <TitleComp title1="Post"/>
      <Row xs={1} md={3} className="g-4 posts">
        {images.map((image, idx) => (
          <Col>
            <Card className="card-post">
              <section class="shape-section">
                <div class="container diamond-shape">
                  <div class="item-date">12 abril</div>
                </div>

                <div class="vertical-line"></div>
                <TwitterShareButton className="social-media" url={"http://localhost:3000/home"}><TwitterIcon className="social-media-icon tw" size={25} round={true} /></TwitterShareButton>
                <FacebookShareButton className="social-media" url={"http://localhost:3000/home"}><FacebookIcon className="social-media-icon face" size={25} round={true} /></FacebookShareButton>
                <PinterestShareButton className="social-media" url={"http://localhost:3000/home"}><PinterestIcon className="social-media-icon pint" size={25} round={true} /></PinterestShareButton>
                <WhatsappShareButton className="social-media" url={"http://localhost:3000/home"}><WhatsappIcon className="social-media-icon wp" size={25} round={true} /></WhatsappShareButton>
                <LinkedinShareButton className="social-media" url={"http://localhost:3000/home"}><LinkedinIcon className="social-media-icon link" size={25} round={true} /></LinkedinShareButton>

        
                <RiInstagramLine className="social-media insta" />
              </section>
              <div>
              <div className="img-hover-zoom img-hover-zoom--basic">
                <Card.Img className="" variant="top" src={image} />
                </div>
                <Card.Body>
                  <Card.Title className="title-post">Post {idx}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <div class="read-more-btn-div">
                    <Button className="read-more-btn">Leer mas</Button>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
