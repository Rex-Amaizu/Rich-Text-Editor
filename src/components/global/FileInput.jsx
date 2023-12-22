import React from "react";
import styled from "styled-components";

const FileInput = (props) => {
  return (
    <>
      <Container
        divWidth={props?.divWidth}
        divHeight={props?.divHeight}
        divFlexGap={props?.divFlexGap}
        divPadding={props?.divPadding}
        labelWidth={props?.labelWidth}
        labelHeight={props?.labelHeight}
        labelFontFamily={props?.labelFontFamily}
        labelFontSize={props?.labelFontSize}
        labelFontStyle={props?.labelFontStyle}
        labelFontWeight={props?.labelFontWeight}
        labelLineHeight={props?.labelLineHeight}
        labelColor={props?.labelColor}
        inputWidth={props?.inputWidth}
        inputHeight={props?.inputHeight}
        inputBoxSizing={props?.inputBoxSizing}
        inputOutline={props?.inputOutline}
        inputBorderRadius={props?.inputBorderRadius}
        inputBorder={props?.inputBorder}
        placeHolderWidth={props?.placeHolderWidth}
        placeHolderHeight={props?.placeHolderHeight}
        placeHolderLineHeight={props?.placeHolderLineHeight}
        placeHolderColor={props?.placeHolderColor}
        placeHolderFontFamily={props?.placeHolderFontFamily}
        placeHolderFontSize={props?.placeHolderFontSize}
        placeHolderFontStyle={props?.placeHolderFontStyle}
        placeHolderFontWeight={props?.placeHolderFontWeight}
        InputLabelFile={props?.InputLabelFile}
        onChangeInputFile={props?.onChangeInputFile}
        inputIdFile={props?.inputIdFile}
        inputValueFile={props?.inputValueFile}
        inputNameFile={props?.inputNameFile}
        inputPlaceholderFile={props?.inputPlaceholderFile}
        inputBackground={props?.inputBackground}
      >
        <label>{props.inputLabelFile}</label>
        <input
          onChange={props.onChangeInputFile}
          id={props.inputIdFile}
          value={props.inputValueFile}
          type="file"
          name={props.inputNameFile}
          placeholder={props.inputPlaceholderFile}
          style={{ display: "none" }}
        />
        <Button
          buttonDivWidth={props?.buttonDivWidth}
          buttonDivHeight={props?.buttonDivHeight}
          buttonDivBorder={props?.buttonDivBorder}
          buttonDivBorderRadius={props?.buttonDivBorderRadius}
          buttonDivBackground={props?.buttonDivBackground}
          onClick={props?.buttonOnclick}
        >
          <MainButton uploadButtonText={props?.uploadButtonText}>
            <label>{props.uploadButtonText}</label>
          </MainButton>
        </Button>
      </Container>
    </>
  );
};

export default FileInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ divPadding }) => divPadding || "0px"};
  gap: ${({ divFlexGap }) => divFlexGap || "0px"};
  width: ${({ divWidth }) => divWidth || "100%"};
  height: ${({ divHeight }) => divHeight || "100%"};

  && label {
    width: ${({ labelWidth }) => labelWidth || "auto"};
    height: ${({ labelHeight }) => labelHeight || "auto"};
    font-family: ${({ labelFontFamily }) => labelFontFamily || "Roboto"};
    font-style: ${({ labelFontStyle }) => labelFontStyle || "normal"};
    font-weight: ${({ labelFontWeight }) => labelFontWeight || "500"};
    font-size: ${({ labelFontSize }) => labelFontSize || "16px"};
    line-height: ${({ labelLineHeight }) => labelLineHeight || "20px"};
    color: ${({ labelColor }) => labelColor || "black"};
  }

  && input {
    box-sizing: ${({ inputBoxSizing }) => inputBoxSizing || "border-box"};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${({ inputWidth }) => inputWidth || "100%"};
    height: ${({ inputHeight }) => inputHeight || "100%"};
    outline: ${({ inputOutline }) => inputOutline || "none"};
    border: ${({ inputBorder }) => inputBorder || "2px solid #000000"};
    border-radius: ${({ inputBorderRadius }) => inputBorderRadius || "8px"};
    background: ${({ inputBackground }) => inputBackground || "white"}

    input::placeholder {
      width: ${({ placeHolderWidth }) => placeHolderWidth || "100%"};
      height: ${({ placeHolderHeight }) => placeHolderHeight || "100%"};
      font-family: ${({ placeHolderFontFamily }) =>
        placeHolderFontFamily || "Roboto"};
      font-style: ${({ placeHolderFontStyle }) =>
        placeHolderFontStyle || "normal"};
      font-weight: ${({ placeHolderFontWeight }) =>
        placeHolderFontWeight || "400"};
      font-size: ${({ placeHolderFontSize }) =>
        placeHolderFontSize || "16px"}16px;
      line-height: ${({ placeHolderLineHeight }) =>
        placeHolderLineHeight || "20px"};
      color: ${({ placeHolderColor }) => placeHolderColor || "#d7d2d2"};
    } /* FIREFOX */

    input:-ms-input-placeholder {
        width: ${({ placeHolderWidth }) => placeHolderWidth || "100%"};
        height: ${({ placeHolderHeight }) => placeHolderHeight || "100%"};
        font-family: ${({ placeHolderFontFamily }) =>
          placeHolderFontFamily || "Roboto"};
        font-style: ${({ placeHolderFontStyle }) =>
          placeHolderFontStyle || "normal"};
        font-weight: ${({ placeHolderFontWeight }) =>
          placeHolderFontWeight || "400"};
        font-size: ${({ placeHolderFontSize }) =>
          placeHolderFontSize || "16px"}16px;
        line-height: ${({ placeHolderLineHeight }) =>
          placeHolderLineHeight || "20px"};
        color: ${({ placeHolderColor }) => placeHolderColor || "#d7d2d2"};
      } /* IE */

      input::-ms-input-placeholder {
        width: ${({ placeHolderWidth }) => placeHolderWidth || "100%"};
        height: ${({ placeHolderHeight }) => placeHolderHeight || "100%"};
        font-family: ${({ placeHolderFontFamily }) =>
          placeHolderFontFamily || "Roboto"};
        font-style: ${({ placeHolderFontStyle }) =>
          placeHolderFontStyle || "normal"};
        font-weight: ${({ placeHolderFontWeight }) =>
          placeHolderFontWeight || "400"};
        font-size: ${({ placeHolderFontSize }) =>
          placeHolderFontSize || "16px"}16px;
        line-height: ${({ placeHolderLineHeight }) =>
          placeHolderLineHeight || "20px"};
        color: ${({ placeHolderColor }) => placeHolderColor || "#d7d2d2"};
      } /* MS EDGE */
  `;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ buttonDivWidth }) => buttonDivWidth || "100%"};
  height: ${({ buttonDivHeight }) => buttonDivHeight || "100%"};
  border: ${({ buttonDivBorder }) => buttonDivBorder || "2px solid #f2f2f2"};
  border-radius: ${({ buttonDivBorderRadius }) =>
    buttonDivBorderRadius || "4px"};
  background: ${({ buttonDivBackground }) => buttonDivBackground || "100%"};
  cursor: pointer;
`;

const MainButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 146px;
  height: 30px;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #6caa7d;
  border-radius: 4px;
  opacity: 1;
  cursor: pointer;

  && label {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) 10px/18px
      var(--unnamed-font-family-open-sans);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-343e37);
    text-align: center;
    font: normal normal normal 10px/18px Open Sans;
    letter-spacing: 0px;
    color: #343e37;
    opacity: 1;
  }
`;
