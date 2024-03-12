import styles from './TheHeader.module.scss';
import { FC } from "react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";


export const TheHeader:FC = ({ }) => (
  <div className={styles.header}>
    <div className={styles.logo}>devFinder</div>
    <ThemeSwitcher />
  </div>
);
