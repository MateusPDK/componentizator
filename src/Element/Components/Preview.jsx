import React, { useEffect } from "react";

import { arrayCleaner } from "../../common/utils";

const Preview = ({ id, html, css }) => {
  const clearDirtyFromString = string => {
    return string.replace(/\n/g, '');
  };

  useEffect(() => {
    if (css && css != "") {
      const previewDiv = document.getElementById(id);

      if (previewDiv.firstChild && previewDiv.firstChild instanceof Element) {
        previewDiv.firstChild.style.cssText = clearDirtyFromString(css);
      }
    };
  });

  // const returnStringAsStyleHandler = () => {
  //   const splitedStyle = css.split(";");
  //   const finalStyle = splitedStyle.map(style => {
  //     const styleArr = style.split(":");
      
  //     if (!styleArr[0] || styleArr[0] === "") {
  //       return null;
  //     }

  //     return {
  //       [clearDirtyFromString(styleArr[0])]: clearDirtyFromString(styleArr[1])
  //     }
  //   });

  //   return arrayCleaner(finalStyle);
  // };

  return (
    <div
      id={id}
      className="preview element-field"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Preview;