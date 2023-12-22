import React from "react";

const FormContext = React.createContext({
  imageFile: "",
  videoFile: { videoProvider: "", videoUrl: "" },
  socialFile: { socialNetwork: "", socialLink: "", iFrame: "" },
  addImage: (image) => "",
  removeImage: (image) => {},
  addVideoDetails: (video) => {},
  removeVideoDetails: (video) => {},
  addSocial: (social) => {},
  removeSocial: (social) => {},
});

export default FormContext;
