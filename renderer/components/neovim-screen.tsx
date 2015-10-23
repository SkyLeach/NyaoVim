import * as React from 'react';

interface Props {
    lines?: Immutable.List<string>;
    fg_color?: string;
    bg_color?: string;
    size?: {
        lines: number;
        columns: number;
    }
    cursor?: {
        line: number;
        col: number;
    }
}

export default class NeovimScreen extends React.Component<Props, {}> {
    render() {
        const style = {
            color: this.props.fg_color,
            backgroundColor: this.props.bg_color,
        };
        return (
            <div className="neovim-screen" style={style}>
                <code>
                    Hello, world!
                </code>
            </div>
        );
    }
}
