import { FC } from "react";
import { UserStat } from "@/components/UserStat/UserStat";
import { LocalGithubUser } from "@/types";
import { UserTitle } from "@/components/UserTitle";
import styles from './UserCard.module.scss';

interface UserCardProps extends LocalGithubUser {
}

export const UserCard: FC<UserCardProps> = (props) => {

  return (
    <div className={ styles.userCard }>
      <img src={ props.avatar } alt="User avatar" className={ styles.avatar }/>
      <UserTitle login={ props.login } name={ props.name } created={ props.created }/>
      <p className={ `${ styles.bio } ${ props.bio ? '' : styles.empty }` }>
        { props.bio || "This profile has no bio" }
      </p>
      <UserStat repos={ props.repos } followers={ props.followers } following={ props.following }/>
    </div>
  )
};
