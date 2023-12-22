import React from "react";
import styled from "styled-components";

const Input = (props) => {
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
        InputLabel={props?.InputLabel}
        onChangeInput={props?.onChangeInput}
        inputId={props?.inputId}
        inputValue={props?.inputValue}
        inputName={props?.inputName}
        inputPlaceholder={props?.inputPlaceholder}
        inputBackground={props?.inputBackground}
        inputType={props?.inputType}
        inputPadding={props?.inputPadding}
      >
        <label>{props.inputLabel}</label>
        <input
          onChange={props.onChangeInput}
          id={props.inputId}
          value={props.inputValue}
          type={props?.inputType}
          name={props.inputName}
          placeholder={props.inputPlaceholder}
        />
      </Container>
    </>
  );
};

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ divPadding }) => divPadding || "0px"};
  gap: ${({ divFlexGap }) => divFlexGap || "0px"};
  width: ${({ divWidth }) => divWidth || "100%"};
  height: ${({ divHeight }) => divHeight || "auto"};

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
    width: ${({ inputWidth }) => inputWidth || "100%"};
    height: ${({ inputHeight }) => inputHeight || "100%"};
    outline: ${({ inputOutline }) => inputOutline || "none"};
    border: ${({ inputBorder }) => inputBorder || "2px solid #000000"};
    border-radius: ${({ inputBorderRadius }) => inputBorderRadius || "8px"};
    background: ${({ inputBackground }) => inputBackground || "white"};
    padding: ${({ inputPadding }) => inputPadding || "20px"};

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
