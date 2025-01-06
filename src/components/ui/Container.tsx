import React from "react";

interface ContainerProps {
  hasColumnsView?: boolean;
  id?: string;
  contClass?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  hasColumnsView = false,
  id,
  contClass = "",
  children,
}) => {
  const view = hasColumnsView ? "col-view" : "";
  return (
    <div id={id} className={`container ${contClass}`}>
      <div className={`container-body ${view}`}>{children}</div>
    </div>
  );
};

export default Container;
