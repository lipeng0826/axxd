import React from 'react';
import './styles/index.scss';
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Button type="default" >按钮</Button>
      <Button type="danger" >按钮</Button>
      <Button type="link" >按钮</Button>
      <Button type="primary" >按钮</Button>
      <br />
      <Button type="danger" size="lg" >按钮</Button>
      <Button type="danger" size="sm" >按钮</Button>
      <br />
      <Button type="default" disabled>按钮</Button>
      <br/>
      <Button type="default" onClick={() => {alert(1)}}>按钮</Button>
    </div>
  );
}

export default App;
