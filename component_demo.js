// Components are just functions
// props (Object) -> returns JSX

const Header = () => {
  return <h1>Hello, World!</h1>
}

<Header />

// props.children

const Header = ({ children, className }) => {
  return <h1 className={className + " header"}>
    {children}
  </h1>
}

const Header = (props) => {
  return <h1 className={props.className + " header"}>
    {props.children}
  </h1>
}

<Header className="my-cool-header">
  <span>Hello, World!</span>
</Header>

React.createElement(Header, { className: 'my-cool-header' },
  React.createElement('span', null, 'Hello, World!')
)

// state

const Counter = () => {
  const [value, setValue] = useState(0)

  return (
    <div className="counter">
      <button onClick={() => setValue(value - 1)}>-</button>
      <span>{value}</span>
      <button onClick={() => setValue(value + 1)}>+</button>
    </div>
  )
}
