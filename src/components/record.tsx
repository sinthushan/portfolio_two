import React from "react";

export type recordObj = {
  title: string;
  picture: string;
};

export const Record = (props: recordObj) => {
  return <div className={"record " + "record-" + props.picture}></div>;
};
