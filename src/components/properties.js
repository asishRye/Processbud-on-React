import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';


function Properties() {
    return <div className="properties">
        <span className="arrow-toggle">
            <FontAwesomeIcon icon={faArrowLeft} color="#3aa273" />
        </span>
        <h1 className="properties-title">Properties</h1>
        <section className="single-property-container">
            <div className="single-property-title-container">
                <h2 className="single-property-container-title">Set SMTP</h2>
                <FontAwesomeIcon icon={faTrash} color="red" />
            </div>
            <div className="property">
                <h4>Server Settings</h4>
                <div class="form-group">
                    <label className="form-label">Host</label>
                    <input type="text" name="host" className="form-control" />
                </div>
                <div class="form-group">
                    <label className="form-label">Port</label>
                    <input type="text" name="port" className="form-control" />
                </div>
            </div>

            <div className="property">
                <h4>Credentials</h4>
                <div class="form-group">
                    <label className="form-label">User Id</label>
                    <input type="text" name="host" className="form-control" />
                </div>
                <div class="form-group">
                    <label className="form-label">Password</label>
                    <input type="password" name="host" className="form-control" />
                </div>
            </div>

            <div className="btn-property-group">
                <button className="btn btn-cancel">Cancel</button>
                <button className="btn btn-apply">Apply</button>
            </div>

        </section>
    </div>
}

export default Properties;