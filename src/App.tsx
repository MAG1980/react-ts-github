import { Container }  from "@/components/Container";
import { TheHeader } from "@/components/TheHeader";
import { Search } from "@/components/Search";



function App() {
  return (
    <Container>
      <TheHeader />
      <Search hasError onSubmitHandler={(text) => console.log(text)}/>
    </Container>
  );
}

export default App;
