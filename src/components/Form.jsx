import React, { useState, useEffect } from "react";
import styles from "../styles/Form.module.css";
import { AiFillPicture } from "react-icons/ai";
import { RiVidiconFill } from "react-icons/ri";
import { IoShareSocialSharp } from "react-icons/io5";
import PicUploadModal from "./modal/modal-designs/PicUploadModal";
import VidUploadModal from "./modal/modal-designs/VidUploadModal";
import SocialModal from "./modal/modal-designs/SocialModal";

const Form = () => {
  const [showModal, setShowModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showSocialModal, setShowSocialModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openVideoModal = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  const openSocialModal = () => {
    setShowSocialModal(true);
  };

  const closeSocialModal = () => {
    setShowSocialModal(false);
  };

  useEffect(() => {
    const el = document.getElementById("show-form");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <label>EMBEDS</label>
      <div className={styles.pictureDiv} onClick={openModal}>
        <AiFillPicture className={styles.pictureIcon} />
        <div className={styles.picLabelDiv}>
          <span>Picture</span>
          <font>Jpeg, png</font>
        </div>
      </div>
      <div className={styles.pictureDiv} onClick={openVideoModal}>
        <RiVidiconFill className={styles.pictureIcon} />
        <div className={styles.picLabelDiv}>
          <span>Video</span>
          <font>Jw Player, Youtube, Vimeo</font>
        </div>
      </div>
      <div className={styles.pictureDiv} onClick={openSocialModal}>
        <IoShareSocialSharp className={styles.pictureIcon} />
        <div className={styles.picLabelDiv}>
          <span>Social</span>
          <font>Instagram, Twitter, Tiktok, Facebook</font>
        </div>
      </div>
      <div id="show-form"></div>
      <PicUploadModal open={showModal} close={closeModal} />
      <VidUploadModal open={showVideoModal} close={closeVideoModal} />
      <SocialModal open={showSocialModal} close={closeSocialModal} />
    </div>
  );
};

export default Form;
