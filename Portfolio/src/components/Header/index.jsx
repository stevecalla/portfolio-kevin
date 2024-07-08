

function Header(props) {

  return (
    <header >
      
      <h1>Kevin&#39;s Trove</h1>
      <div>
        {props.children}
      </div>
      
    </header>
  );
}

export default Header;
