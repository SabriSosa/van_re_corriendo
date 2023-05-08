import { t } from "@lingui/macro";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import useScript from "../../hooks/useScript";
import {
  createMediaLibrary,
  openMediaLibrary,
  openUploadWidget,
} from "../../services/CloudinaryService";
import { selectLoading, setLoading } from "../../slices/genericSlice";
import CustomSpinner from "./CustomSpinner";
import "./ImageUploadPreview.scss";

export const ImageUploadPreview = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { images, isAddMode, imgId, setValue, errors, idItem } = props;
  const loading = useSelector(selectLoading);
  useScript("https://media-library.cloudinary.com/global/all.js");

  useScript("https://widget.cloudinary.com/v2.0/global/all.js");

  const [files, setFiles] = useState([]);
  const [filesObj, setFilesObj] = useState([]);

  useEffect(() => {
    if (images) {
      setFiles(images);
    }
  }, [images]);

  useEffect(() => {
    if (window.cloudinary) {
      createLibraryCloudinary();
    }
  }, [window]);

  const uploadImageWithCloudinary = () => {
    dispatch(setLoading({ loading: true }));

    openUploadWidget("Posts", idItem, () => {
      dispatch(setLoading({ loading: false }));
    });
  };

  const createLibraryCloudinary = () => {
    const mediaLibraryOptions = {
      cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
    };
    createMediaLibrary(mediaLibraryOptions);
  };

  const mediaLibraryCloudinary = () => {
    const mediaLibraryOptions = {
      search: { expression: `tags=Posts/201` },
    };
    openMediaLibrary(mediaLibraryOptions);
  };

  const uploadMultipleFiles = (e) => {
    const _files = Object.assign([], files);
    const _filesObj = Object.assign([], filesObj);

    for (let i = 0; i < e.target.files.length; i++) {
      _files.push(URL.createObjectURL(e.target.files[i]));
      _filesObj.push(e.target.files[i]);
    }

    setFiles(_files);
    setFilesObj(_filesObj);
    setValue("images", _filesObj);
  };

  function deleteFile(e) {
    const s = files.filter((item, index) => index !== e);
    const o = filesObj.filter((item, index) => index !== e);
    setFiles(s);
    setFilesObj(o);
    setValue("images", o);
  }

  const open = () => {
    openUploadWidget();
  };

  if (loading) {
    return <CustomSpinner />;
  }

  const imagesFunction = isAddMode
    ? mediaLibraryCloudinary
    : mediaLibraryCloudinary;

  return (
    <div>
      {/* <Form.Group style={{ display: "flex", flexWrap: "wrap" }}>
        {(files || []).map((url, idx) => (
          <div key={idx} className="container-upload-preview">
            <AiFillDelete onClick={() => deleteFile(idx)} />
            <Image
              className="upload-preview"
              src={url}
              id={idx}
              key={idx}
              alt="..."
            />
          </div>
        ))}
      </Form.Group> */}

      <Form.Group>
        <Button onClick={imagesFunction}> {t`new.item.images`} </Button>

        {/* <input
          type="file"
          className={`form-control ${errors?.images ? "is-invalid" : ""}`}
          accept="image/*"
          onChange={uploadMultipleFiles}
          multiple
        /> */}
        <div className="invalid-feedback">{errors?.images?.message}</div>
      </Form.Group>
    </div>
  );
});
