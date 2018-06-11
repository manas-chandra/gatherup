import React, { Component } from 'react';
import EventDashBoard from '../../features/events/EventDashBoard/EventDashboard'
import NavBarComponent from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div>
        <NavBarComponent />
        <Container className={'main'}>
          <EventDashBoard />
        </Container>
      </div>
    );
  }
}

export default App;
