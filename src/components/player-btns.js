import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faArrowDown } from '@fortawesome/free-solid-svg-icons';

function PlayerBtn() {
    useEffect(() => {
    }, []);

    const onRender = () => {
        window.api.request("runEvent", "some data");
    }

    const stopTagui = () => {
        window.api.request("stopEvent", "some data");
}

    return <div className="player-btn">
        <button className="btn play-btn run" onClick={runMe}>
            <FontAwesomeIcon icon={faPlay} color="white" />
            <span className="btn-text">
                Run
            </span>
        </button>
        <button className="btn play-btn debug">
            <span className="btn-text">
                Debug
            </span>
            <FontAwesomeIcon icon={faArrowDown} color="grey" />
        </button>
        <button className="btn play-btn stop" onClick={stopMe}>
            <FontAwesomeIcon icon={faStop} color="white" />
            <span className="btn-text">
                Stop
            </span>
        </button>
    </div>;
}


export default PlayerBtn;

var runMe = function() {
    /*eslint-disable no-undef*/
    mySpecfificFn([11,22,33], "another me");
    /*eslint-enable no-undef*/

}

var stopMe = function() {
    /*eslint-disable no-undef*/
    mySpecfificFn([11,22,33], "another me but from stop");
    /*eslint-enable no-undef*/

}
