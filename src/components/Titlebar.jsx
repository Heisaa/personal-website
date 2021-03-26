import React, { Component } from 'react';
import { FaWindowClose } from "react-icons/fa";

const iconStyle = {
    color: 'white',
    fontSize: 19,
}

class Titlebar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleClose = (e) => {
        e.stopPropagation();
        this.props.closeWin();
    }

    render() {
        const styleTitle = {
            position: 'absolute',
            left: '0px',
            top: '0px',
            height: '22px',
            width: this.props.styleFromWin.width + this.props.styleFromWin.paddingRight * 2,
            display: 'flex',
            justifyContent: 'space-between',
            userSelect: 'none',
            cursor: 'pointer',
            backgroundColor: 'black',
            color: 'white',
        }

        const Icon = this.props.icon;

        return (

            <div style={styleTitle} onClick={this.props.focus}>
                <div>
                    <Icon style={iconStyle} />
                </div>
                <div>{this.props.title}</div>
                <div>
                    <FaWindowClose
                        style={iconStyle}
                        onClick={this.handleClose}
                    />
                </div>
            </div>

        );
    }
}

export default Titlebar;