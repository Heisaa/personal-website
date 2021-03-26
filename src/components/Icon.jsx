import React, { Component } from 'react';

class Icon extends Component {
    state = { }


    render() {
        const iconStyle = {
            color: 'white',
            fontSize: 30,
            marginTop: 12,
            marginLeft: 10,
            textAlign: 'center',
            cursor: 'pointer',
        }

        const lableStyle = {
            fontSize: 12,
        }

        const IconTag = this.props.icon;

        return (
            <div style={iconStyle} onClick={this.props.onClick}>
                <IconTag  />
                <div style={lableStyle}>{this.props.title}</div>
            </div>
        );
    }
}

export default Icon;