import { RiInstagramLine } from "@react-icons/all-files/ri/RiInstagramLine";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
} from "react-share";
import { getDateString } from "./auxiliary";
import "./SocialMedia.scss";

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
      <a
        aria-label="Whatsapp link"
        className="social-media"
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

      <a
        href="https://msng.link/o/?vanrecorriendo=ig"
        aria-label="Instagram link"
      >
        <RiInstagramLine className="social-media insta" />
      </a>
    </section>
  );
}
