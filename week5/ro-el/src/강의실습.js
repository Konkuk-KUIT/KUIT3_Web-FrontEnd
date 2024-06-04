import React from 'react';
import PropTypes from 'prop-types';

/*const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.name}</h1>
      {props.name === 'Judy' ? <div>{props.name}</div> : <div>false</div>}
      <div>{props.count}</div>
    </>
  );
};*/

const Header = ({ name, count, children, isChildren }) => {
  console.log(name, count);
  console.log(children);
  return (
    <>
      <h1>{name}</h1>
      {name === "Judy" ? <div>{name}</div> : <div>false</div>}
      <div>{count}</div>
      <div style={{width: "100px", height: "100px", backgroundColor: "red"} } />
      {/* {children} */}
      {isChildren ? <h2>{children}</h2> : <h2>false</h2>}
    </>
  );
};

const AppEx = () => {
  const name = "KUIT";
  const cnt = 1;
  // const isChildren = true;
  return (
    <>
      {/* <Header name={name} count={cnt} /> */}
      <Header name={name} count={cnt} isChildren/*={isChildren}*/>~
				안에 내용 있지롱<br />내가 props의 children이다!
        <div>요소 모두 반영됨</div>
			</Header>
    </>
  );
};

Header.propTypes = {
  name: PropTypes.number,
}

//컴포넌트를 내보내려면 export 해야 함
// export default App;
//or
//export {App};
