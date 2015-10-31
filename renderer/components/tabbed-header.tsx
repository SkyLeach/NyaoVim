import * as React from 'react';
import * as Action from '../actions';

interface Props {
    current_id: number;
    ids: number[];
    dispatch: (action: Action.Type) => void;
}

export default class TabbedHeader extends React.Component<Props, {}> {
    renderTabs() {
        const {current_id, ids} = this.props;
        return ids.map((id, idx) => {
            const n = id === current_id ? 'tab-item active' : 'tab-item';
            return (
                <div className={n} key={idx}>
                    <span className="icon icon-cancel icon-close-tab"></span>
                    #{idx + 1}
                </div>
            );
        })
    }

    render() {
        // Note: 80px for inset buttons on OS X
        const header_style = {
            height: '30px',
            paddingLeft: '80px',
        };

        return (
            <header className="toolbar toolbar-header" style={header_style}>
                <div className="tab-group">
                    <div className="for-inset"/>
                    {this.renderTabs()}
                    <div className="tab-item tab-item-fixed" onClick={() => this.props.dispatch(Action.createNeovim())}>
                        <span className="icon icon-plus"></span>
                    </div>
                </div>
            </header>
        );
    }
}
