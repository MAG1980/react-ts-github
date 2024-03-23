import styles from './UserInfo.module.scss';
import { FC } from "react";
import { LocalGithubUser } from "@/types";
import { InfoItem, InfoItemProps } from "@/components/InfoItem/InfoItem.tsx";
import { ReactComponent as LocationIcon } from '@/assets/icon-location.svg';
import { ReactComponent as BlogIcon } from '@/assets/icon-website.svg';
import { ReactComponent as TwitterIcon } from '@/assets/icon-twitter.svg';
import { ReactComponent as CompanyIcon } from '@/assets/icon-company.svg';


interface UserInfoProps extends Pick<
  LocalGithubUser,
  'blog' | 'company' | 'location' | 'twitter'> {
}

export const UserInfo: FC<UserInfoProps> = ({ blog, company, location, twitter }) => {
  const items: InfoItemProps[] = [
    { icon: <LocationIcon/>, text: location, },
    { icon: <BlogIcon/>, text: blog, isLink: true },
    { icon: <TwitterIcon/>, text: twitter, isLink: true },
    { icon: <CompanyIcon/>, text: company, isLink: true },
  ]
  return (
    <div className={ styles.userInfo }>
      { items.map((item, index) => <InfoItem key={ index } { ...item }/>) }
    </div>
  )
};
