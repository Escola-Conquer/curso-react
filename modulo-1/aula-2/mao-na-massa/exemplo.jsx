function MyComponent({ name }) {
  return (
    <h1 className="my-class">Hello, {name} !</h1>
  );
}

ReactDOM.render(
  <MyComponent name="Ana" />,
  document.getElementById('root')
)
