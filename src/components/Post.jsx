import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./Post.scss";
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
  LinkedinIcon,
} from "react-share";

import ReadMore from "./ReadMore";
import SimpleCarrousel from "./SimpleCarrousel";

export default function Post({post}) {
  return (
    <Col>
      <Card className="card-post">
        <section class="shape-section">
          <div class="container diamond-shape">
            <div class="item-date">
              {`${new Date(1000 * post.date.seconds).getDate()}/${
                new Date(1000 * post.date.seconds).getMonth() + 1
              }`}
            </div>
          </div>

          <div class="vertical-line"></div>
          <TwitterShareButton
            className="social-media"
            url={"http://localhost:3000/home"}
          >
            <TwitterIcon
              className="social-media-icon tw"
              size={25}
              round={true}
            />
          </TwitterShareButton>
          <FacebookShareButton
            className="social-media"
            url={"http://localhost:3000/home"}
          >
            <FacebookIcon
              className="social-media-icon face"
              size={25}
              round={true}
            />
          </FacebookShareButton>
          <PinterestShareButton
            className="social-media"
            url={"http://localhost:3000/home"}
          >
            <PinterestIcon
              className="social-media-icon pint"
              size={25}
              round={true}
            />
          </PinterestShareButton>
          <WhatsappShareButton
            className="social-media"
            url={"http://localhost:3000/home"}
          >
            <WhatsappIcon
              className="social-media-icon wp"
              size={25}
              round={true}
            />
          </WhatsappShareButton>
          <LinkedinShareButton
            className="social-media"
            url={"http://localhost:3000/home"}
          >
            <LinkedinIcon
              className="social-media-icon link"
              size={25}
              round={true}
            />
          </LinkedinShareButton>

          <RiInstagramLine className="social-media insta" />
        </section>
        <div>
          <div className="img-hover-zoom img-hover-zoom--basic">
            <SimpleCarrousel prefix="Camiontito/Posts" images={post.images} />
          </div>
          <Card.Body>
            <Card.Title className="title-destination">{post.title}</Card.Title>
            <Card.Text>
              <ReadMore text={post.description} />
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
}
