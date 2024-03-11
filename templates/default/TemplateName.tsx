import styles from './TemplateName.module.scss';
import { FC } from "react";

interface TemplateNameProps { }

export const TemplateName:FC<TemplateNameProps> = ({ }) => (
  <div className={styles.templateName}>
    TemplateName Component
  </div>
);
