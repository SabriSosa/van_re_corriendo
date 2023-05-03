import { useEffect, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

import "./ImageUploadPreview.scss";

function ImageUploadPreview({ item }) {
  const { images } = item;
  const [files, setFiles] = useState([]);

  useEffect(() => {

    if (images) {
      setFiles(images);
    }
  }, [images]);

  const uploadFiles = (e) => {
    e.preventDefault();
  };
  const uploadMultipleFiles = (e) => {
    const _files = Object.assign([], files);

    for (let i = 0; i < e.target.files.length; i++) {
      _files.push(URL.createObjectURL(e.target.files[i]));
    }

    setFiles(_files);
  };

  function deleteFile(e) {
    const s = files.filter((item, index) => index !== e);
    setFiles(s);
  }

  return (
    <Form>
      <Form.Group style={{ display: "flex" , flexWrap:"wrap"}}>
        {(files || []).map((url, idx) => (
          <div  key={idx} className="container-upload-preview">
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
      </Form.Group>

      <Form.Group style={{ display: "flex" }}>
        <input
          type="file"
          className="form-control"
          accept="image/*"
          onChange={uploadMultipleFiles}
          multiple
        />
        <Button
          type="button"
          className="upload-button btn btn-danger btn-block"
          onClick={uploadFiles}
        >
          Upload
        </Button>
      </Form.Group>
    </Form>
  );
}

export default ImageUploadPreview;
