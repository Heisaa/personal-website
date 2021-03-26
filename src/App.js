import React, { Component } from 'react';
import './App.css';
import Window from './components/Window.jsx';
import Icon from './components/Icon.jsx';
import { FaInfoCircle } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaChessKnight } from "react-icons/fa";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windows: [
        {
          id: 1,
          title: 'About Me',
          icon: FaInfoCircle,
          content: 'coming soon',
        },
        {
          id: 2,
          title: 'Projects',
          icon: FaSuitcase,
          content: 'coming soon',
        },
        {
          id: 3,
          title: 'Contact',
          icon: FaComment,
          content: 'coming soon',
        },
        {
          id: 4,
          title: 'Chess',
          icon: FaChessKnight,
          content: 'coming soon',
        },
      ],

      windowsOpen: [],
    }
  }

  openWindow = (win) => {
    if (!this.state.windowsOpen.includes(win)) {
      this.setState({
        windowsOpen: [...this.state.windowsOpen, win]
      });
    }
  }

  closeWindow = (winId) => {
    const arrayOfWindow = this.state.windowsOpen.filter(win => win.id !== winId);
    this.setState({ windowsOpen: arrayOfWindow });
  }

  focus = (winId) => {
    const clickedRemoved = this.state.windowsOpen.filter(win => win.id !== winId)
    const clickedAdded = clickedRemoved.concat(this.state.windows.filter(win => win.id === winId));
    this.setState({ windowsOpen: clickedAdded });
  }

  render() {
    return (
      <div className='app'>
        <div className='iconContianer'>
          {this.state.windows.map(win => (
            <Icon
              title={win.title}
              icon={win.icon}
              key={win.id}
              onClick={() => this.openWindow(win)}
            />
          ))}
        </div>
        {this.state.windowsOpen.map(win => (
          <Window
            title={win.title}
            content={win.content}
            key={win.id}
            id={win.id}
            icon={win.icon}
            closeWin={this.closeWindow}
            focus={this.focus}
          />
        ))}
      </div>
    );
  }
}

export default App;