import React, { Component } from 'react';
import Titlebar from './Titlebar';
import './window.css';
import Draggable from 'react-draggable';

const styleWin = {
    position: 'absolute',
    border: '2px solid',
    height: 300,
    width: 500,
    paddingTop: 30,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
}

class Window extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        //Place in middle
        const totalWidth = styleWin.width + (styleWin.paddingLeft * 2);
        const totalHeight = styleWin.height + styleWin.paddingTop;
        styleWin.left = (window.innerWidth - totalWidth) / 2;
        styleWin.top = (window.innerHeight - totalHeight) / 2;
    }

    render() {


        return (

            <Draggable handle="span" bounds="parent">

                <div style={styleWin}>
                    <span>
                        <Titlebar
                            styleFromWin={styleWin}
                            title={this.props.title}
                            icon={this.props.icon}
                            closeWin={this.props.closeWin.bind(this, this.props.id)}
                            focus={this.props.focus.bind(this, this.props.id)}
                        />
                    </span>
                    {this.props.content}
                </div>

            </Draggable>

        );
    }
}

export default Window;