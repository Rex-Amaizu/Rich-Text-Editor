import React from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";

const DropDown = (props) => {
  return (
    <div>
      <Container
        selectLabel={props?.selectLabel}
        labelWidth={props?.labelWidth}
        labelHeight={props?.labelHeight}
        labelColor={props?.labelColor}
        labelFontFamily={props?.labelFontFamily}
        labelFontSize={props?.labelFontSize}
        labelFontStyle={props?.labelFontStyle}
        labelFontWeight={props?.labelFontWeight}
        labelLineHeight={props?.labelLineHeight}
        divHeight={props?.divHeight}
        divWidth={props?.divWidth}
        divBackground={props?.divBackground}
      >
        <label className="">{props.selectLabel}</label>
        <SelectDiv
          selectDivHeight={props?.selectDivHeight}
          selectDivWidth={props?.selectDivWidth}
          selectDivBorder={props?.selectDivBorder}
          selectDivBorderRadius={props?.selectDivBorderRadius}
          selectWidth={props?.selectWidth}
          selectHeight={props?.selectHeight}
          selectBorder={props?.selectBorder}
          selectBorderRadius={props?.selectBorderRadius}
          selected={props?.selected}
          selectText={props?.selectText}
          optionsSelect={props?.optionsSelect}
          selectColor={props?.selectColor}
        >
          <select
            style={{
              border: `${props.selectBorder}`,
              borderRadius: `${props.selectBorderRadius}`,
              color: `${props?.selectColor}`,
              fontSize: `${props?.selectFontSize}`,
              paddingLeft: `${props?.selectPaddingLeft}`,
              background: `${props?.selectBackground}`,
            }}
            onChange={props?.onChangeSelect}
          >
            <option selected={props.selected} disabled>
              {props.selectText}
            </option>
            {props.optionsSelect.map((options) => (
              <option key={options.label} value={options.value}>
                {options.label}
              </option>
            ))}
          </select>

          <IconDiv style={{ marginLeft: `${props?.iconMargin}` }}>
            <IoMdArrowDropdown />
          </IconDiv>
        </SelectDiv>
      </Container>
    </div>
  );
};

export default DropDown;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 5px;
  width: ${({ divWidth }) => divWidth || "100%"};
  height: ${({ divHeight }) => divHeight || "auto"};
  background: ${({ divBackground }) => divBackground || "white"};

  && label {
    width: ${({ labelWidth }) => labelWidth || "auto"};
    height: ${({ labelHeight }) => labelHeight || "auto"};
    font-family: ${({ labelFontFamily }) => labelFontFamily || "Sans"};
    font-style: ${({ labelFontStyle }) => labelFontStyle || "normal"};
    font-weight: ${({ labelFontWeight }) => labelFontWeight || "500"};
    font-size: ${({ labelFontSize }) => labelFontSize || "16px"};
    line-height: ${({ labelLineHeight }) => labelLineHeight || "20px"};
    color: ${({ labelColor }) => labelColor || "black"};
  }
`;

const SelectDiv = styled.div`
  display: flex;
  flex-direction: row;
  border-sizing: border-box;
  position: relative;
  align-items: center;
  width: ${({ selectDivWidth }) => selectDivWidth || "100%"};
  height: ${({ selectDivHeight }) => selectDivHeight || "auto"};
  border: ${(selectDivBorder) => selectDivBorder || "1px soliad #000000"};
  border-radius: ${(selectDivBorderRadius) => selectDivBorderRadius || "0px"};

  && select {
    width: ${({ selectWidth }) => selectWidth || "100%"};
    height: ${({ selectHeight }) => selectHeight || "auto"};
    background: ${(selectBackground) => selectBackground || "#ffffff"};
    color: ${(selectColor) => selectColor || "#000000"};
    font-family: ${({ selectFontFamily }) => selectFontFamily || "Sans"};
    font-style: ${({ selectFontStyle }) => selectFontStyle || "normal"};
    font-weight: ${({ selectFontWeight }) => selectFontWeight || "500"};
    line-height: ${({ selectLineHeight }) => selectLineHeight || "20px"};
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  && select::-ms-expand {
    display: none; /* Hide the default arrow in Internet Explorer 10 and Internet Explorer 11 */
  }
`;

const IconDiv = styled.div`
  display: flex;
  width: ${(iconWidth) => iconWidth || "50px"};
  height: ${(iconHeight) => iconHeight || "50px"};
  position: absolute;
  pointer-events: none;
`;
