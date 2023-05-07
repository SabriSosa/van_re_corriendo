import { Cloudinary as CoreCloudinary, Util } from "cloudinary-core";
import { randomNumberInRange } from "../components/auxiliary";

export const url = (publicId, options) => {
  try {
    const scOptions = Util.withSnakeCaseKeys(options);
    const cl = CoreCloudinary.new();
    return cl.url(publicId, scOptions);
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const createUploadWidget = (options, callback) => {
  window.upw = window.cloudinary.createUploadWidget(options, callback);
};

export const createMediaLibrary = (config, handlers) => {
  window.ml = window.cloudinary.createMediaLibrary(config, {
    handlers,
  });

  window.ml.on("upload", (data) => {
    console.log("data event test? ", data.event);

    if (data.event == "display-changed") {
      console.log("estoy aca?");

      window.ml.hide();
      openUploadWidget();
    }
  });
};

export const openMediaLibrary = (options) => {
  window.ml.show(options);
};
export const openUploadWidget = (prefix, idItem, loadingFalse) => {
  window.cloudinary.openUploadWidget(
    {
      cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
      uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
      showCompletedButton: true,
      clientAllowedFormats: ["jpg", "png", "jpeg", "gif", "tiff", "svg", "bpm"],
      croppingValidateDimensions: true,
      maxImageHeight: 800,
      maxImageWidth: 800,
      prepareUploadParams: function (cb, params, data) {
        const reply = [];
        data.map((data, idx) =>
          reply.push({
            public_id: `${prefix}/${idItem}_${randomNumberInRange(1, 9999)}`,
            tags: `${prefix}/${idItem}`,
          })
        );

        cb(reply);
      },
    },
    (error, result) => {
      if (result.info === "shown") {
        loadingFalse();
      }
      if (!error && result.event === "show-completed") {
        result.info.items.forEach((item) => {
          console.log(`show completed for item with id:
      ${item.uploadInfo.public_id}`); //uploadInfo is the data returned in the upload response
        });
      }
    }
  );
};
