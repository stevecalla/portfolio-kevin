import backgroundImage from '../../assets/images/star-wars-5277570_1280.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <div className='flex-list'>
      <h1>Kevin&#39;s Trove</h1>
      
      {props.children}
      </div>
      <img src={backgroundImage} alt="use the force"></img>
    </header>
  );
}

export default Header;
