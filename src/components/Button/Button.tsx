import styles from './Button.module.scss';
import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children?:ReactNode
  clickHandler?:  React.MouseEventHandler<HTMLButtonElement>
  type?: "button" | "submit" | "reset"
}

export const Button:FC<ButtonProps> = ({
                                         children,
                                         clickHandler,
                                         type="submit"}) => (
  <button
    className={styles.button}
    type={type}
    onClick={clickHandler}>
    {children}
  </button>
);
