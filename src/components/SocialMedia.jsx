import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

import { RiInstagramLine } from "react-icons/ri";

import "./SocialMedia.scss";
import { getDateString } from "./auxiliary";

export default function SocialMedia({ post }) {
  return (
    <section className="shape-section-social-media">
      <div className="container diamond-shape">
        <div className="item-date">{getDateString(post?.date)}</div>
      </div>

      <div className="vertical-line"></div>
      <TwitterShareButton
        className="social-media"
        title={post.title}
        hashtags={["vanrecorriendo", "newpost"]}
        url={`${"https://vanrecorriendo.com/home"}/${post.id}`}
      >
        <TwitterIcon className="social-media-icon tw" size={25} round={true} />
      </TwitterShareButton>
      <FacebookShareButton
        className="social-media"
        url={`${"https://vanrecorriendo.com/home"}/${post.id}`}
      >
        <FacebookIcon
          className="social-media-icon face"
          size={25}
          round={true}
        />
      </FacebookShareButton>
      <a className="social-media"
      href={`https://api.whatsapp.com/send?text=Nuevo post de @vanrecorriendo "${post.title}"%0ahttps://vanrecorriendo.com/home/${post.id}`}
      >
        <WhatsappIcon className="social-media-icon wp" size={25} round={true} />
      </a>
      <LinkedinShareButton
        className="social-media"
        url={`${"https://vanrecorriendo.com/home"}/${post.id}`}
      >
        <LinkedinIcon
          className="social-media-icon link"
          size={25}
          round={true}
        />
      </LinkedinShareButton>

      <a href="https://msng.link/o/?vanrecorriendo=ig">
        <RiInstagramLine className="social-media insta" />
      </a>
      
    </section>
  );
}
