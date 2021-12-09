import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Person from "@mui/icons-material/Person";
import Chat from '@mui/icons-material/Chat'
import Notifications from '@mui/icons-material/Notifications'

export default function TopBar() {
  return (
    // topbar-container
    <div className="topbar-container">
        {/* topbar-lefty */}
      <div className="topbar-left">
        <span className="logo">Zenkoders</span>
      </div>
      {/* topbar-center */}
      <div className="topbar-center">
        <div className="searchbar">
          <SearchIcon className='search-icon' />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>
      {/* topbar-right */}
      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link">Homepage</span>
          <span className="topbar-link">Timeline</span>
        </div>
        {/* topbar icons */}
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <Person />
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon-item">
            <Chat />
            <span className="topbar-icon-badge">3</span>
          </div>
          <div className="topbar-icon-item">
            <Notifications />
            <span className="topbar-icon-badge">2</span>
          </div>
        </div>
        {/* topbar img */}
        <img src="/assets/person/1.jpeg" alt="" className="topbar-img" />
      </div>
    </div>
  );
}
