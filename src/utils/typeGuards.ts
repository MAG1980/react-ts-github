import { GithubUser } from "@/types";

export const isGithubUser = (user:any):user is GithubUser =>  {
  // return (user as GithubUser).login !== undefined
  return 'id' in user
}