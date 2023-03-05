import { A, Button, Div } from "../components/styles/Contact.styled";

const Contact = () => {
  return (
    <Div>
      <Button>
        <A href="https://github.com/GORKEM1986" target="_blank">
          Github
        </A>
      </Button>
      <Button>
        <A
          href="https://www.linkedin.com/in/fatihgorkem/"
          target="_blank"
        >
          Linkedin
        </A>
      </Button>
    </Div>
  );
};

export default Contact;