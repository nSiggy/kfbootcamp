// @flow
import React, {Component} from 'react';
import type {State} from './state';
import PrintContacts from './PrintContacts';
import PrintDetails from './PrintDetails';
import {Container, Row, Col} from 'reactstrap';

type Props = {};

class App extends Component<Props, State> {
  state = {
    contactList: [
      {
        id: '1',
        name: 'Johan',
        phoneNumber: '123123',
        imgPath: require('./img/ninja.png'),
      },
      {
        id: '2',
        name: 'David',
        phoneNumber: '321333',
        imgPath: require('./img/default.jpg'),
      },
      {
        id: '3',
        name: 'Deandra',
        phoneNumber: '222222',
        imgPath: null,
      },
    ],
    selectedIndex: 0,
  };

  componentDidMount() {
    document.addEventListener('keyup', this._onKeyUp);
  }

  componentWillUnmount() {
    document.addEventListener('keyup', this._onKeyUp);
  }

  _onKeyUp = (event: KeyboardEvent) => {
    let {contactList, selectedIndex} = this.state;
    let maxIndex = contactList.length - 1;
    let newIndex = selectedIndex;
    let index = selectedIndex;

    if (event.key === 'ArrowUp') {
      newIndex = Math.max(0, index - 1);
    }

    if (event.key === 'ArrowDown') {
      newIndex = Math.min(maxIndex, index + 1);
    }
    index = newIndex;
    if (newIndex !== selectedIndex) {
      this.setState({selectedIndex: newIndex});
    }
  };

  render() {
    let {contactList, selectedIndex} = this.state;
    const headerStyle = {
      margin: '20px',
    };
    console.log(selectedIndex);

    return (
      <Container>
        <Row>
          <Col xs="6" sm="6">
            <h1 style={headerStyle}> Contact List </h1>
            <ul>
              {contactList.map((item, index) => (
                <PrintContacts
                  key={item.id}
                  item={item}
                  isSelected={index === selectedIndex}
                />
              ))}
            </ul>
          </Col>
          <Col xs="6" sm="6">
            <ul>
              {contactList.map((item, index) => (
                <PrintDetails
                  key={item.id}
                  item={item}
                  isSelected={index === selectedIndex}
                />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
