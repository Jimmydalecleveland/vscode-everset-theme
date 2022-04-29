declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

interface PropsType {
  children: JSX.Element;
  name: string;
}
class Component extends React.Component<PropsType, {}> {
  render() {
    return <h2>{this.props.children}</h2>;
  }
}
