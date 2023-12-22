import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "../Modal";
import styles from "../../../styles/SocialModal.module.css";
import { IoMdClose } from "react-icons/io";
import DropDown from "../../global/DropDown";
import Input from "../../global/Input";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import FormContext from "../../../store/context-store/form-context";

const socials = [
  { label: "Facebook", value: "fb" },
  { label: "Youtube", value: "yt" },
  { label: "Linkedin", value: "ld" },
];

function SocialModal({ open, close }) {
  const [switchOn, setSwitchOn] = useState(false);
  const formCtx = useContext(FormContext);

  const formik = useFormik({
    initialValues: {
      socialNetwork: "",
      socialLink: "",
      iFrame: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: () => {
      const iFrame = `<iframe
      className="z-20"
      src=${formik.values.socialLink}
      width={parseInt("20%")}
      height={parseInt("800px")}
      frameBorder={parseInt("0")}
      marginHeight={parseInt("0")}
      marginWidth={parseInt("0")}
    />`;

      const payload = {
        socialNetwork: formik.values.socialNetwork,
        socialLink: formik.values.socialLink,
        iFrame,
      };
      formCtx.addSocial(payload);
      formik.resetForm();
      close();
    },
  });

  const cancel = () => {
    formik.resetForm({
      errors: null,
      touched: { message: false },
    });
    close();
  };

  const toggleSwitch = () => {
    setSwitchOn(!switchOn);
  };

  return (
    <Modal
      appElement={document.getElementById("app")}
      open={open}
      close={close}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.container}>
          <div className={styles.header}>
            <label>Embed</label>
            <IoMdClose className={styles.closeIcon} onClick={close} />
          </div>
          <div style={{ width: "100%", marginTop: "16px" }}>
            <DropDown
              optionsSelect={socials}
              selectHeight="34px"
              selectLabel="SOCIAL MEDIA PLATFORM"
              labelColor="#333333"
              labelFontSize="10px"
              selectBorder="1px solid #E7F1E9"
              selectBorderRadius="4px"
              iconMargin="630px"
              selectText="Facebook"
              selectColor="#333333"
              selectFontSize="10px"
              selectPaddingLeft="20px"
              selectBackground="#f2f2f2"
              selected={true}
              value={formik.values.socialNetwork}
              onChangeSelect={(e) => {
                formik.setFieldValue("socialNetwork", e.target.value);
              }}
            />
          </div>
          <div style={{ width: "100%", marginTop: "16px" }}>
            <Input
              inputLabel="Link"
              labelColor="#333333"
              labelFontSize="10px"
              inputBorder="1px solid #E7F1E9"
              inputHeight="34px"
              inputBorderRadius="4px"
              inputBackground="#f2f2f2"
              inputName="socialLink"
              inputValue={formik.values.socialLink}
              onChangeInput={formik.handleChange}
            />
          </div>
          <div style={{ width: "100%", marginTop: "16px" }}>
            <Input
              inputLabel="CODE"
              labelColor="#333333"
              labelFontSize="10px"
              inputBorder="1px solid #E7F1E9"
              inputHeight="34px"
              inputBorderRadius="4px"
              inputBackground="#f2f2f2"
              inputName="iFrame"
              inputValue={`<iframe
              className="z-20"
              src=${formik.values.socialLink}
              width={parseInt("50%")}
              height={parseInt("800px")}
              frameBorder={parseInt("0")}
              marginHeight={parseInt("0")}
              marginWidth={parseInt("0")}
            />`}
              onChangeInput={formik.handleChange}
            />
          </div>
          <div className={styles.captionDiv}>
            <span>Disable Caption</span>
            {switchOn ? (
              <FaToggleOn
                onClick={toggleSwitch}
                className={styles.switchIcon}
              />
            ) : (
              <FaToggleOff
                onClick={toggleSwitch}
                className={styles.switchIconOff}
              />
            )}
          </div>
          <div className={styles.buttonRow}>
            <div className={styles.embedButton}>
              <button>Embed</button>
            </div>
            <div className={styles.cancelButton}>
              <button onClick={cancel}>Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default SocialModal;
