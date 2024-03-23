import styles from './InfoItem.module.scss';
import { FC, ReactNode } from "react";

export interface InfoItemProps {
  icon: ReactNode
  text?: string | number
  isLink?: boolean
}

export const InfoItem: FC<InfoItemProps> = ({ icon, text, isLink }) => {
  const currentText = text ?? 'not Avaliable'
  let currentHref = ''
  if ( isLink ) {
    text = typeof text === 'number' ? text.toString() : text
    currentHref = text && text.startsWith('http') ? text : `https://${ text }`
  }
  return (
    <div className={ `${ styles.infoItem }${ text ? '' : styles.empty }` }>
      { icon }
      <div>
        { isLink && text ? (
          <a
            className={ styles.link }
            href={ currentHref }
            target="_blank"
            rel="noreferer"
          >
            { currentText }
          </a>
        ) : currentText }
      </div>
    </div>
  )
};
