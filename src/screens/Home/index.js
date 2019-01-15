import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlayerActions } from '../../store/ducks/players';

class Home extends Component {
  async componentDidMount() {
    const { getAllPlayers } = this.props;
    await getAllPlayers();
  }

  render() {
    return (
      <Text style={{ padding: 10, color: 'red', fontSize: 20 }}>
        {JSON.stringify(this.props.players)}
      </Text>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players.players,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
