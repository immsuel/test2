
const Header = ({numAnswered}) => {
  document.close = () => {
    alert("If you leave now all your responses will be lost, are you sure you want to leave?")
  }
  return (
    <div>
      <div className="header">
        <label className="logoText">StellarCode</label>
        <label className="numberAnswered">{numAnswered} of 5 answered</label>
      </div>
      <div className="line">

      </div>
    </div>
  );
}

export default Header;
