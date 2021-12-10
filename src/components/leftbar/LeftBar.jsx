import "./leftbar.css";
import RssFeed from "@mui/icons-material/RssFeed";
import Chat from "@mui/icons-material/Chat";
import PlayCircleFilledOutlined from "@mui/icons-material/PlayCircleFilledOutlined";
import Bookmark from "@mui/icons-material/Bookmark";
import Group from "@mui/icons-material/Group";
import HelpOutline from "@mui/icons-material/HelpOutline";
import School from "@mui/icons-material/School";
import WorkOutline from "@mui/icons-material/WorkOutline";
import Event from "@mui/icons-material/Event";


export default function LeftBar() {
  return (
    <div className="leftbar">
      <div className="leftbar-wrapper">
        <ul className="leftbar-list">
          <li className="leftbar-list-item">
            <RssFeed className="leftbar-icon" />
            <span className="leftbar-list-item-text">Feed</span>
          </li>
          <li className="leftbar-list-item">
            <Chat className="leftbar-icon" />
            <span className="sidebar-list-item-text">Chats</span>
          </li>
          <li className="leftbar-list-item">
            <PlayCircleFilledOutlined className="leftbar-icon" />
            <span className="sidebar-list-item-text">Videos</span>
          </li>
          <li className="leftbar-list-item">
            <Group className="leftbar-icon" />
            <span className="sidebar-list-item-text">Groups</span>
          </li>
          <li className="leftbar-list-item">
            <Bookmark className="leftbar-icon" />
            <span className="sidebar-list-item-text">Bookmarks</span>
          </li>
          <li className="leftbar-list-item">
            <HelpOutline className="leftbar-icon" />
            <span className="leftbar-list-item-text">Questions</span>
          </li>
          <li className="leftbar-list-item">
            <WorkOutline className="leftbar-icon" />
            <span className="leftbar-list-item-text">Jobs</span>
          </li>
          <li className="leftbar-list-item">
            <Event className="leftbar-icon" />
            <span className="leftbar-list-itemText">Events</span>
          </li>
          <li className="leftbar-list-item">
            <School className="leftbar-icon" />
            <span className="leftbar-list-itemText">Courses</span>
          </li>
        </ul>
        <button className="left-bar-button">Show More</button>
        <hr className="left-bar-hr" />
        {/* <ul className="left-bar-friend-list">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul> */}
      </div>
    </div>
  );
}
