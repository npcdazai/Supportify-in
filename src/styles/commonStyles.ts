// src/styles/commonStyles.ts
export const commonStyles: {
  transition: string;
  position: string;
  display: string;
  _hover: {
    _before: { width: string };
    _after: { transform: string; transformOrigin: string };
  };
  _before: {
    content: string;
    position: string;
    top: string;
    right: string;
    width: number | string;
    height: string;
    transition: string;
  };
  _after: {
    content: string;
    position: string;
    bottom: string;
    left: string;
    borderBottom: string;
    borderRadius: string;
    width: string;
    transition: string;
    transform: string;
    transformOrigin: string;
    height: string;
  };
} = {
  transition: "all 0.5s",
  position: "relative",
  display: "inline-flex",
  _hover: {
    _before: { width: "7px" },
    _after: {
      transform: "scaleX(1)",
      transformOrigin: "left",
    },
  },
  _before: {
    content: "''",
    position: "absolute",
    top: "7px",
    right: "-7px",
    width: 0,
    height: "100%",
    transition: "all 0.5s",
  },
  _after: {
    content: "''",
    position: "absolute",
    bottom: "0px",
    left: "1px",
    borderBottom: "3px solid #e5195e",
    borderRadius: "9px",
    width: "100%",
    transition: "all 0.5s",
    transform: "scaleX(0)",
    transformOrigin: "left",
    height: "12px",
  },
};
