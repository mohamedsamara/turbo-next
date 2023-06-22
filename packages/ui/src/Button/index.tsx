import { PropsWithChildren, ReactNode, MouseEvent } from "react";
import classNames from "classnames";

import {
  ButtonVariant,
  ButtonSize,
  ButtonVariants,
  ButtonSizes,
} from "../theme";
import Spinner from "../Spinner";

export interface ButtonProps extends PropsWithChildren {
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  className?: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
  const {
    icon,
    iconRight,
    iconLeft,
    type = "button",
    disabled = false,
    loading = false,
    children,
    variant = "basic",
    size = "md",
    className,
    onClick,
  } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames(
        ButtonVariant[variant],
        ButtonSize[size],
        className
      )}
      onClick={onClick}
    >
      {icon ? (
        icon
      ) : (
        <>
          <div className="inline-flex items-center justify-center">
            {loading && <Spinner size="sm" className="mr-2" />}
            {iconLeft && <span className="mr-2">{iconLeft}</span>}
            {children && children}
            {iconRight && <span className="ml-2">{iconRight}</span>}
          </div>
        </>
      )}
    </button>
  );
};

export default Button;
