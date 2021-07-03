import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faArrowDown } from '@fortawesome/free-solid-svg-icons';

function PlayerBtn() {
    useEffect(() => {
    }, []);

    const onRender = () => {
        window.api.request("runEvent", "some data");
    }

    return <div className="player-btn">
        <button className="btn play-btn run" onClick={onRender}>
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
        <button className="btn play-btn stop" onClick={stopTagui}>
            <FontAwesomeIcon icon={faStop} color="white" />
            <span className="btn-text">
                Stop
            </span>
        </button>
    </div>;
}

export default PlayerBtn;

function runTagui() {
    console.log("Yaay it works!!!");
    // ipcRenderer.send("runEvent");
}

function stopTagui() {
    console.log("Yaay it stopped!!!");
    // ipcRenderer.send("terminateProcess");
}

