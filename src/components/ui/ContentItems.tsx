import React from "react";
import { Styled } from "../../styles/componentStyle/ui/ContentItems.styled";

const ContentItems = (props: {
  h1?: any;
  heading?: any;
  cssClass?: any;
  id?: string | undefined;
  subHeading?: any;
  disclaimer?: any;
  children?:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const headingSetter = props.h1 ? (
    <h1
      className="h1 heading"
      dangerouslySetInnerHTML={{ __html: props.heading }}
    ></h1>
  ) : (
    <h2
      className="h2 heading"
      dangerouslySetInnerHTML={{ __html: props.heading }}
    ></h2>
  );

  return (
    <>
      <Styled.ContentBox
        className={`content-box ${props.cssClass ? props.cssClass : ""}`}
        id={props.id}
      >
        {props.heading && headingSetter}
        {props.subHeading && (
          <p
            className="p sub-heading"
            dangerouslySetInnerHTML={{ __html: props.subHeading }}
          ></p>
        )}
        {props.disclaimer && (
          <p
            className="p disclaimer"
            dangerouslySetInnerHTML={{ __html: props.disclaimer }}
          ></p>
        )}
        {props.children}
      </Styled.ContentBox>
    </>
  );
};

export default ContentItems;
