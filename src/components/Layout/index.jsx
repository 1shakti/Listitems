import { Container, Header, Main } from './styles/style';

export default function Layout({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Layout.Header = function LayoutHeader({
  ...props
}) {
  return (
    <Header {...props}>
      <button>
        New Stories
      </button>
      <button>
        Job Stories
      </button>
    </Header>
  );
};

Layout.Main = function LayoutMain({ children, ...props }) {
  return <Main {...props}>{children}</Main>;
};
