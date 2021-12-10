import TopBar from "../../components/topbar/TopBar.jsx"
import LeftBar from '../../components/leftbar/LeftBar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'
import './home.css'

export default function Home() {
    return (
        <>
            <TopBar/>
            <div className="home-container">
                <LeftBar/>
                <Feed/>
                <RightBar/>
            </div>
        </>
    )
}
