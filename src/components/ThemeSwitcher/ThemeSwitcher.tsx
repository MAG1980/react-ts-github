import { FC, useEffect, useState } from "react";
import styles from './ThemeSwitcher.module.scss';
import { ReactComponent as MoonIcon } from '@/assets/icon-moon.svg';
import { ReactComponent as SunIcon } from '@/assets/icon-sun.svg';
export const ThemeSwitcher: FC = () => {
  const [isDark, setDark] = useState(false);
  const themeText = isDark ? 'Light Mode' : 'Dark Mode';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    return () => { };
  }, [isDark]);
  

  return (
    <div className={styles.switcher}
         onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon}/>
    </div>
  )
};
