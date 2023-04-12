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

import { RiInstagramLine } from "react-icons/ri";


import './SocialMedia.scss';

export default function SocialMedia({ post }) {
  return (
    <section className="shape-section-social-media">
      <div className="container diamond-shape">
        <div className="item-date">
          {`${new Date(1000 * post.date.seconds).getDate()}/${
            new Date(1000 * post.date.seconds).getMonth() + 1
          }`}
        </div>
      </div>

      <div className="vertical-line"></div>
      <TwitterShareButton
        className="social-media"
        url={"http://localhost:3000/home"}
      >
        <TwitterIcon className="social-media-icon tw" size={25} round={true} />
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
        <WhatsappIcon className="social-media-icon wp" size={25} round={true} />
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
  );
}
