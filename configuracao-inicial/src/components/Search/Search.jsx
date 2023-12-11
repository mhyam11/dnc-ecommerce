import "./index.scss"
import searchLogo from "../../assets/searchmini.svg";
import profileLogo from "../../assets/perfil.svg";
import favoriteLogo from "../../assets/lovelike.svg";

const Search = () => {
    return (
      <div className="search">
        <div className="search__input-container">
          <img
            src={searchLogo}
            alt="search logo"
            className="search__search-logo"
          />
          <input type="text" placeholder="Search" />
        </div>
        <img src={profileLogo} alt="profile logo" />
        <img src={favoriteLogo} alt="favorite logo" />
      </div>
    );
  };
  
  export default Search;
