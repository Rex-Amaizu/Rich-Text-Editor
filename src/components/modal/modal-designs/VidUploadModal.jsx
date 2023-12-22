import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "../Modal";
import styles from "../../../styles/VidUploadModal.module.css";
import { IoMdClose } from "react-icons/io";
import DropDown from "../../global/DropDown";
import Input from "../../global/Input";
import FormContext from "../../../store/context-store/form-context";

const socials = [
  { label: "Facebook", value: "Facebook" },
  { label: "Youtube", value: "Youtube" },
  { label: "Linkedin", value: "Linkedin" },
];

function VidUploadModal({ open, close }) {
  const formCtx = useContext(FormContext);

  const formik = useFormik({
    initialValues: {
      videoProvider: "",
      videoUrl: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: () => {
      formCtx.addVideoDetails(formik.values);
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
              selectLabel="VIDEO PROVIDER"
              labelColor="#333333"
              labelFontSize="10px"
              selectBorder="1px solid #E7F1E9"
              selectBorderRadius="4px"
              iconMargin="630px"
              selectColor="#333333"
              selectFontSize="10px"
              selectPaddingLeft="20px"
              selectBackground="#f2f2f2"
              selected={true}
              value={formik.values.videoProvider}
              onChangeSelect={(e) => {
                formik.setFieldValue("videoProvider", e.target.value);
              }}
            />
          </div>
          <div style={{ width: "100%", marginTop: "16px" }}>
            <Input
              inputLabel="URL"
              labelColor="#333333"
              labelFontSize="10px"
              inputBorder="1px solid #E7F1E9"
              inputHeight="34px"
              inputBorderRadius="4px"
              inputBackground="#f2f2f2"
              inputName="videoUrl"
              inputValue={formik.values.videoUrl}
              onChangeInput={formik.handleChange}
            />
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

export default VidUploadModal;
