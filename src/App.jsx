import {
  Button,
  Container,
  ContainerInputs,
  Form,
  Input,
  InputLabel,
  Title,
  TopBackground,
} from "./styles";
function Home() {
  return (
    <Container>
      <TopBackground>
        <img />
      </TopBackground>
      <Form>
        <Title>Cadastrar usuário</Title>
        <ContainerInputs>
          <div>
            <div>
              <InputLabel>
                Nome<span>*</span>
              </InputLabel>
              <Input type="text" placeholder="Nome do usuário" />
            </div>
            <div>
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <Input type="number" placeholder="Idade do usuário" />
            </div>
          </div>
          <div>
            <InputLabel>
              E-mail<span>*</span>
            </InputLabel>
            <Input type="email" placeholder="E-mail do usuário" />
          </div>
        </ContainerInputs>
        <Button>Cadastrar usuário</Button>
      </Form>
    </Container>
  );
}

export default Home;

/* Exportar "Padrão" -> Uma coisa só por página (export default)
 Export-> exportar várias coisas antes da função*/
