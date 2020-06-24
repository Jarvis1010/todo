import React from 'react';

const style = {
  margin: '0 auto',
  width: '640px',
};

function App() {
  return (
    <div style={style}>
      <header className='big-font'>
        <Title title='My TODO App' />
      </header>
    </div>
  );
}

export default App;

function Title(props) {
  return <h1>{props.title}</h1>;
}
