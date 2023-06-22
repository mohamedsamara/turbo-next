import { PropsWithChildren } from "react";
import classnames from "classnames";

import { HeadingType, HeadingTypes } from "../theme";

export interface HeadingProps extends PropsWithChildren {
  as: HeadingTypes;
  className?: string;
}

const Heading = (props: HeadingProps) => {
  const { children, className = "", as = "h4", ...rest } = props;
  const Element = as;

  return (
    <Element className={classnames(HeadingType[as], className)} {...rest}>
      {children}
    </Element>
  );
};

export default Heading;
