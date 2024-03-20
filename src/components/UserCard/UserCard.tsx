import styles from './UserCard.module.scss';
import { FC } from "react";
import { UserStat } from "@/components/UserStat/UserStat";
import { LocalGithubUser } from "@/types";

interface UserCardProps extends LocalGithubUser {}

export const UserCard: FC<UserCardProps> = (props) => (
  <div className={styles.userCard}>
    <UserStat repos={props.repos} followers={props.followers} following={props.following}/>
  </div>
);
