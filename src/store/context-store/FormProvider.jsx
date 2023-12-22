import React, { useReducer, useState, useEffect } from "react";
import FormContext from "./form-context";

const defaultFormState = {
  imageFile: "",
  videoFile: { videoProvider: "", videoUrl: "" },
  socialFile: { socialNetwork: "", socialLink: "", iFrame: "" },
};

const FormReducer = (state, action) => {
  if (action.type === "ADD_IMAGE") {
    const newState = { ...state, imageFile: action.image };
    return newState;
  }

  if (action.type === "REMOVE_IMAGE") {
    const newState = { ...state, imageFile: action.image };
    return newState;
  }

  if (action.type === "ADD_VIDEO") {
    const newState = {
      ...state,
      videoFile: {
        ...state.videoFile,
        videoProvider: action.video.videoProvider,
        videoUrl: action.video.videoUrl,
      },
    };
    return newState;
  }

  if (action.type === "REMOVE_VIDEO") {
    const newState = {
      ...state,
      videoFile: {
        ...state.videoFile,
        videoProvider: action.video.videoProvider,
        videoUrl: action.video.videoUrl,
      },
    };
    return newState;
  }

  if (action.type === "ADD_SOCIAL") {
    const newState = {
      ...state,
      socialFile: {
        ...state.videoFile,
        socialNetwork: action.social.socialNetwork,
        socialLink: action.social.socialLink,
        iFrame: action.social.iFrame,
      },
    };
    return newState;
  }

  if (action.type === "REMOVE_SOCIAL") {
    const newState = {
      ...state,
      socialFile: {
        ...state.videoFile,
        socialNetwork: action.social.socialNetwork,
        socialLink: action.social.socialLink,
        iFrame: action.social.iFrame,
      },
    };
    return newState;
  }

  return defaultFormState;
};

const FormProvider = (props) => {
  const [formState, dispatchFormAction] = useReducer(
    FormReducer,
    defaultFormState
  );

  const addImageHandler = (image) => {
    dispatchFormAction({ type: "ADD_IMAGE", image: image });
  };
  const removeImageHandler = (image) => {
    dispatchFormAction({ type: "REMOVE_IMAGE", image: image });
  };
  const addVideoHandler = (video) => {
    dispatchFormAction({ type: "ADD_VIDEO", video: video });
  };
  const removeVideoHandler = (video) => {
    dispatchFormAction({ type: "REMOVE_VIDEO", video: video });
  };

  const addSocialHandler = (social) => {
    dispatchFormAction({ type: "ADD_SOCIAL", social: social });
  };
  const removeSocialHandler = (social) => {
    dispatchFormAction({ type: "REMOVE_SOCIAL", social: social });
  };

  const formContext = {
    imageFile: formState.imageFile,
    videoFile: formState.videoFile,
    socialFile: formState.socialFile,
    addImage: addImageHandler,
    removeImage: removeImageHandler,
    addVideoDetails: addVideoHandler,
    removeVideoDetails: removeVideoHandler,
    addSocial: addSocialHandler,
    removeSocial: removeSocialHandler,
  };

  return (
    <FormContext.Provider value={formContext}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormProvider;
