import Resizer from "react-image-file-resizer";

export const getAddress = async (lat, lng) => {
  const key = "pk.463c606657acae1bc8f276a073302727"; //https://es.locationiq.com/ //sign in with Google Sabri
  const response = await fetch(
    `https://us1.locationiq.com/v1/reverse.php?key=${key}&format=json&lon=${lng}&lat=${lat}`
  );
  const data = await response.json();
  if (data) return data.address;
};

export const getDateString = (date) => {
  const _date = new Date(date);
  return `${_date.getDate()}/${_date.getMonth() + 1}/${_date.getFullYear()}`;
};

export const getDateFromDB = (date) => {
  return new Date(1000 * date.seconds).toDateString();
};

export const initialDate = new Date("2022-08-10");

export const getDateFormat = (date) => {
  const dateArray = date.split("-");
  const _year = dateArray[0];
  const _month = parseInt(dateArray[1], 10) - 1;
  const _date = dateArray[2];
  const _entryDate = new Date(_year, _month, _date);
  return _entryDate;
};

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      800,
      800,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

export const uploadPhoto = async (files, id, folder) => {
  const url = `https://api.Cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`;

  var timestamp = Math.round(new Date().getTime() / 1000);

  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    if (typeof file !== "string") {
      file = await resizeFile(file);
      formData.append("file", file);
      formData.append("timestamp", timestamp);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      );
      formData.append("folder", process.env.REACT_APP_CLOUDINARY_FOLDER);
      formData.append("public_id", `/${folder}/${id}_${i + 1}`);

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          const str = JSON.stringify(JSON.parse(data), null, 4);
          console.log("Upload Photo cloudinary", str)
        })
        .catch((err) => console.log("Error: ", err));
    }
  }
};

const getBase64FromUrl = async (urls) => {
  const images = await Promise.all(
    urls.map(async (url) => {
      const data = await fetch(url);
      const blob = await data.blob();

      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
      });
    })
  );
  return images;
};

export const uploadPhotosToCloudinary = (images, id, prefix) => {
  let _images = [];
  if (images.length > 0) {
    uploadPhoto(images, id, prefix);
    for (let i = 1; i <= images.length; i++) {
      if (typeof images[i - 1] === "string") {
        let img = images[i - 1].split("/");
        img = img[img.length - 1];

        _images.push(img);
      } else {
        const extension = images[i - 1].type?.split("/")[1];
        _images.push(`${id}_${i}.${extension}`);
      }
    }
  }
  return _images;
};

export const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
