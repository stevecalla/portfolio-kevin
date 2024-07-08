

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      
      <h1>Kevin&#39;s Trove</h1>
      <div>
        {props.children}
      </div>
      
    </header>
  );
}

export default Header;
