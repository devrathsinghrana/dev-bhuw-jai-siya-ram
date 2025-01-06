import React from "react";

interface ContainerProps {
  hasColumnsView?: boolean;
  id?: string;
  contClass?: string;
  contBodyClass?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  hasColumnsView = false,
  id,
  contClass = "",
  children,
  contBodyClass = "",
}) => {
  const view = hasColumnsView ? `col-view ${contBodyClass}` : contBodyClass;
  return (
    <div id={id} className={`container ${contClass}`}>
      <div className={`container-body ${view}`}>{children}</div>
    </div>
  );
};

export default Container;
