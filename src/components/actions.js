import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Actions() {
    const actions = [{
        id: 1,
        name: 'Open Browser',
        desc: 'Triggers browser open action'
    }, {
        id: 2,
        name: 'Close Browser',
        desc: 'Triggers browser close action'
    }, {
        id: 1,
        name: 'Set SMTP',
        desc: 'Triggers browser open action'
    }]
    return <div className="actions">
        <div className="actions-header">
            <h1 className="actions-title">Actions</h1>
            <span className="tag">Drag a new action</span>
        </div>
        <div className="actions-search">
            <input type="text" className="search-input" />
            <div className="search-icon">
                <FontAwesomeIcon icon={faSearch} color="grey" />
            </div>

        </div>
        <div className="actions-list">

            <div className="single-action-container">
                <h1 className="actions-list-title">Frequently Used</h1>
                {actions.map((action, i) => (
                    <div key={action.name} className="single-action">
                        <h4 className="single-action-title">{action.name}</h4>
                        <span className="single-action-desc">{action.desc}</span>
                    </div>
                ))}
            </div>

            <div className="single-action-container">
                <h1 className="actions-list-title">All Actions</h1>
                {actions.map((action, i) => (
                    <div key={action.name} className="single-action">
                        <h4 className="single-action-title">{action.name}</h4>
                        <span className="single-action-desc">{action.desc}</span>
                    </div>
                ))}

            </div>
        </div>

    </div>
}

export default Actions;