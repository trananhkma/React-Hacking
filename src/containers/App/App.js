import React from 'react';
import './App.css';

function PropsState() {
  const Desc = props => (
    <div hidden={props.a}>
      <p>{props.children}</p>
      <p>{props.abc || "default"}</p>
      <button>buttonnnn</button>
    </div>
    );

  const [hidden, setHidden] = React.useState(false);

  return (
    <span>
    <Desc abc="1">xxxxxx</Desc>
    <Desc abc="2">yyyyyy</Desc>
    <Desc>qqqqq</Desc>

    <Desc a={hidden}/>
    <button onClick={() => setHidden(!hidden)}>hidden</button>

    </span>
  );
}

export default PropsState;
