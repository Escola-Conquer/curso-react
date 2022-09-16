function MyComponent({ name }) {
  const text = 'Hello,' + name + '!'
  const element = React.createElement(
    'h1',
    {className: 'my-class'},
    text
  );

  return element;
}

 ​
ReactDOM.render(
  React.createElement(MyComponent, { name: 'Ana' }, null),
  document.getElementById('root')
)
