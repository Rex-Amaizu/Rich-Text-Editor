import React, { useState, useEffect, useRef, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "../Modal";
import styles from "../../../styles/PicUploadModal.module.css";
import { IoMdClose } from "react-icons/io";
import FileInput from "../../global/FileInput";
import PreviewImage from "../../previews/PreviewImage";
import FormContext from "../../../store/context-store/form-context";

function PicUploadModal({ open, close }) {
  const [isLoading, setIsLoading] = useState(false);
  const ballLoader = useRef();
  const formCtx = useContext(FormContext);

  const formik = useFormik({
    initialValues: {
      image: "",
    },
    validationSchema: Yup.object({
      image: Yup.mixed()
        .test(
          "FILE_SIZE",
          "Too big!",
          (value) => value && value.size < 1024 * 1024
        )
        .test(
          "FILE_TYPE",
          "Invalid!",
          (value) =>
            value &&
            ["imge/png", "image/jpeg", "image/jpg"].includes(value.type)
        ),
    }),
    onSubmit: () => {
      const image = formik.values.image;
      formCtx.addImage(image);
      formik.resetForm();
      close();
    },
  });

  useEffect(() => {
    if (isLoading) {
      ballLoader.current?.scrollIntoView({ block: "nearest" });
    }
  }, [isLoading]);

  const openFileUpload = () => {
    const image = document.getElementById("image-file").click();
  };

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
          {/* {imageFile && <img src={imageFile} alt="" />} */}
          <h1>Upload Image</h1>
          {formik.values.image && !formik.errors.image ? (
            <PreviewImage file={formik.values.image} />
          ) : (
            <FileInput
              inputLabelFile="FILE UPLOAD"
              labelColor="#333333"
              buttonDivBorder="1px dashed #0A7227"
              divFlexGap="10px"
              divHeight="200px"
              buttonDivBorderRadius="4px"
              uploadButtonText="Import Image from  Device"
              labelFontFamily="sans"
              labelFontSize="10px"
              buttonDivBackground="#FAFAFA"
              inputIdFile="image-file"
              inputNameFile="image"
              buttonOnclick={openFileUpload}
              onChangeInputFile={(event) => {
                formik.setFieldValue("image", event.currentTarget.files[0]);
              }}
            />
          )}
          {formik.errors.image && (
            <p style={{ color: "red" }}>{formik.errors.image}</p>
          )}
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

export default PicUploadModal;
