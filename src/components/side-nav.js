import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../images/profile-pic.jpg'

function SideNav() {
    return <nav className="side-nav">
        <FontAwesomeIcon icon={faBars} color="white" />
        <div className="user-section">
            <img src={profilePic} className="profile-pic" />
            <span className="user-name">Mekha</span>
        </div>
    </nav>
}

export default SideNav;