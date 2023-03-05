import { Button, Div, A } from "../components/styles/MyProject.styled";

const MyProject = () => {
  return (
    <Div>
      <Button>
        <A href="https://react-nba-legends.netlify.app/" target="_blank">
          NBA Legends
        </A>
      </Button>
      <Button>
        <A href="https://gorkem1986.github.io/Parallax-2/" target="_blank">
          Parallax
        </A>
      </Button>
      <Button>
        <A
          href="https://gorkem1986.github.io/Bootsrap5-proje2/"
          target="_blank"
        >
          Bootstrap
        </A>
      </Button>
      <Button>
        <A href="https://react-language-cards-fg.netlify.app/" target="_blank">
          Language Cards
        </A>
      </Button>
    </Div>
  );
};

export default MyProject;