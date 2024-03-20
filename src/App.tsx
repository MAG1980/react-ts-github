import { Container } from "@/components/Container";
import { TheHeader } from "@/components/TheHeader";
import { Search } from "@/components/Search";
import { UserCard } from "@/components/UserCard";
import { defaultUser } from "@/mock/index";

function App() {
  return (
    <Container>
      <TheHeader/>
      <Search hasError onSubmitHandler={(text) => console.log(text)}/>
      <UserCard {...defaultUser}/>
    </Container>
  );
}

export default App;
