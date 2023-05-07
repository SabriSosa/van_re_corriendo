import { t } from "@lingui/macro";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import format from "date-fns/format";
import { useNavigate, useParams } from "react-router";
import {
  getDateFormat,
  uploadPhotosToCloudinary,
} from "../components/auxiliary";
import {
  addNewPost,
  getPostById,
  selectPostById,
  selectStatusPosts,
  updatePost,
} from "../slices/postSlice";
import { AddEdit } from "./AddEdit";
import "./NewItem.scss";

function AddEditPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const isAddMode = !id;

  const statusPosts = useSelector(selectStatusPosts);
  const selectedPost = useSelector((state) => selectPostById(state, id));
  const errorPost = useSelector((state) => state.posts.errors);

  useEffect(() => {
    if (id && !selectedPost) {
      dispatch(getPostById(id));
    }
  }, [dispatch, id, selectedPost]);

  // form validation rules
  const validationSchema = Yup.object().shape({
    id: Yup.string().required(t`id.required`),
    title: Yup.string().required(t`title.required`),
    date: Yup.string().required(t`date.required`),
    description: Yup.string().required(t`description.required`),
    latitude: Yup.string().required(t`latitude.required`),
    longitude: Yup.string().required(t`longitude.required`),
    city: Yup.string().required(t`city.required`),
    state: Yup.string().required(t`state.required`),
    country: Yup.string().required(t`country.required`),
    images: Yup.array().required(t`images.required`),
  });

  const fields = [
    { name: "id", value: selectedPost?.id },
    {
      name: "date",
      value: selectedPost
        ? format(new Date(selectedPost?.date), "yyyy-MM-dd")
        : null,
    },
    { name: "title", value: selectedPost?.title },
    { name: "description", value: selectedPost?.description },
    { name: "latitude", value: selectedPost?.latitude },
    { name: "longitude", value: selectedPost?.longitude },
    { name: "country", value: selectedPost?.country },
    { name: "state", value: selectedPost?.state },
    { name: "city", value: selectedPost?.city },
    {
      name: "images",
      value: selectedPost?.images.map(
        (img) =>
          `https://res.cloudinary.com/djbmfd9y6/image/upload/ar_3:4,c_fill/Camiontito/Posts/${img}`
      ),
    },
  ];

  async function createItem(data) {
    const { images, date, id, ...rest } = data;
    const _date = getDateFormat(date);
    const _images = uploadPhotosToCloudinary(images, date, "Posts");

    dispatch(
      addNewPost({ images: _images, date: _date, id: parseInt(id), ...rest })
    ).then(() => {
      navigate("/list-posts");
    });
  }

  function updateItem(data) {
    const { images, date, ...rest } = data;

    const _date = getDateFormat(date);

    // deleteImagesCloudinary(selectedPost.images);
    const _images = uploadPhotosToCloudinary(images, date, "Posts");


    dispatch(
      updatePost({ images: _images, date: _date, id: parseInt(id), ...rest })
    ).then(() => {
      navigate("/list-posts");
    });
  }

  return (
    <AddEdit
    prefix = "Posts"
      validationSchema={validationSchema}
      selectedItem={selectedPost}
      status={statusPosts}
      errors={errorPost}
      fields={fields}
      isAddMode={isAddMode}
      id={id}
      onSubmitItem={isAddMode ? createItem : updateItem}
    />
  );
}

export default AddEditPost;
