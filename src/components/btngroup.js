import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCamera, faArrowUp } from '@fortawesome/free-solid-svg-icons';


function BtnGroup() {
    return <div className="btn-group">
        <button className="btn btn-tool">
            <FontAwesomeIcon icon={faCamera} color="red" />
            <span className="btn-text">
                Snap
            </span>
        </button>
        <button className="btn btn-tool">
            <FontAwesomeIcon icon={faPlay} color="purple" />
            <span className="btn-text">
                Record
            </span>
        </button>
        <button className="btn btn-tool">
            <FontAwesomeIcon icon={faArrowUp} color="indigo" />
            <span className="btn-text">
                Export
            </span>
        </button>
    </div>
}

export default BtnGroup;