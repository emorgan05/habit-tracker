import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navigation from './components/Navigation';
import HabitsList from './components/HabitsList';
import { Container, Row, Col } from 'reactstrap';
import { fetchHabits } from './actions/actionTypes';

class App extends Component {
  componentDidMount() {
    // if (this.props.habits.length === 0) {
    //   this.props.fetchHabits();
    // }
    this.props.fetchHabits();
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Container>
          <Row>
            <Col xs="6">
              <HabitsList habits={this.props.habits}/>
            </Col>
            <Col xs="6">
              <h1>Hello World</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {habits: state.habits}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchHabits: fetchHabits
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
