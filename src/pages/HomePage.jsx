import React, { useState, useContext } from "react";
// import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Editor } from "primereact/editor";
import styles from "../styles/App.module.css";
import Form from "../components/Form";
import { FaCirclePlus } from "react-icons/fa6";
import PreviewImage from "../components/previews/PreviewImage";
import PreviewVideo from "../components/previews/PreviewVideo";
import FormProvider from "../store/context-store/form-context";
import FormContext from "../store/context-store/form-context";

function HomePage() {
  const [value1, setValue1] = useState("");
  const [fileOpener, setFileOpener] = useState(false);
  const formCtx = useContext(FormContext);

  const globalState = useContext(FormProvider);

  //All app states available
  console.log("global", globalState);

  const imageData = globalState.imageFile;
  const videoData = globalState.videoFile;
  const videoLink = videoData.videoUrl;

  const customToolBar = () => {
    return (
      <span className={styles.header}>
        <select className="ql-header" defaultValue="3" aria-label="paragraph">
          <option value="1">Heading</option>
          <option value="2">Subheading</option>
          <option value="3">Normal</option>
        </select>
        <hr className={styles.headerLine} />
        <button className="ql-link" aria-label="link"></button>
        <button className="ql-image" aria-label="Image"></button>
        <hr className={styles.headerLine} />
        <button className="ql-align" arial-label="align"></button>
        <button className="ql-align" value="right"></button>
        <button className="ql-align" value="center"></button>
        <hr className={styles.headerLine} />
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <hr className={styles.headerLine} />
        <button className="ql-list" value="bullet"></button>
        <button className="ql-list" value="ordered"></button>
        <button className="ql-indent" value="-1"></button>
      </span>
    );
  };

  const header = customToolBar();

  const toggleFileOpener = () => {
    setFileOpener(!fileOpener);
  };

  const removeVideo = () => {
    const video = {
      videoProvider: "",
      videoUrl: "",
    };
    formCtx.removeVideoDetails(video);
  };

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.editorContainer}>
          <div className={styles.emptyDiv}></div>
          <h1>This is the title</h1>
          <div className={styles.container}>
            <Editor
              value={value1}
              onTextChange={(e) => {
                setValue1(e.htmlValue);
              }}
              style={{
                height: "auto",
                border: "none",
              }}
              headerTemplate={header}
            />

            {/* PICFILE  START*/}
            <div
              style={
                imageData == ""
                  ? {
                      display: "none",
                      width: "100%",
                      height: "250px",
                      marginTop: "10px",
                    }
                  : {
                      display: "flex",
                      width: "100%",
                      height: "250px",
                      marginTop: "10px",
                    }
              }
            >
              {imageData !== "" && <PreviewImage file={imageData} />}
            </div>
            {/* PICFILE END */}
            {/* VIDFILE START*/}
            <div
              style={
                videoLink == ""
                  ? {
                      display: "none",
                      width: "100%",
                      height: "250px",
                      marginTop: "10px",
                    }
                  : {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderSizing: "border-box",
                      width: "100%",
                      height: "250px",
                      marginTop: "10px",
                    }
              }
            >
              {videoLink !== "" && <PreviewVideo url={videoData?.videoUrl} />}
            </div>
            {/* VIDFILE END */}
            {/* BUTTONSTART */}

            {videoLink !== "" && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "end",
                }}
              >
                <button
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    background: "red",
                    height: "50px !important",
                    width: "80px",
                    color: "white",
                    fontSize: "8px",
                    fontWeight: "600px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "4px",
                    marginTop: "70px",
                    marginRight: "18px",
                  }}
                  onClick={removeVideo}
                >
                  Remove Video
                </button>
              </div>
            )}

            {/* BUTTON END */}

            {/* CIRCLE START */}
            <div
              style={{
                marginTop: "50px",
                height: "auto",
                marginBottom: "20px",
              }}
            >
              <FaCirclePlus
                onClick={toggleFileOpener}
                className={styles.icon}
              />
              {fileOpener && (
                <Form
                // formImage={getFormImage}
                />
              )}
            </div>
            {/* CIRCLE END */}
          </div>
        </div>
        {/* DISPLAY DIV START */}
        <div
          style={{
            width: "50%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <div style={{ width: "100%" }}>{value1}</div>
        </div>
        {/* DISPLAY DIV END  */}
      </div>
    </div>
  );
}

export default HomePage;
