import { useState } from "react";
import { Container } from "@/components/Container";
import { TheHeader } from "@/components/TheHeader";
import { Search } from "@/components/Search";
import { UserCard } from "@/components/UserCard";
import { defaultUser } from "@/mock/index";
import { GithubError, GithubUser, LocalGithubUser } from "@/types";
import { isGithubUser } from "@/utils/typeGuards";
import { extractLocalUser } from "@/utils/extractLocalUser";

const BASE_URL = 'https://api.github.com/users/'

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser)

  const fetchUser = async (username: string) => {
    fetch(BASE_URL + username)
      .then(response => response.json() as Promise<GithubUser | GithubError>)
      .then(user => {
        if (isGithubUser(user)) {
          setUser(extractLocalUser(user))
        } else {
          setUser(null)
        }
      })
  }
  return (
    <Container>
      <TheHeader/>
      <Search hasError={!user} onSubmitHandler={fetchUser}/>
      {user && <UserCard {...user}/>}
    </Container>
  );
}

export default App;
