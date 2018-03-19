import React, { Component } from 'react';
import FaCircleO from 'react-icons/lib/fa/circle-o';
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o';
import FaCheckCircleO from 'react-icons/lib/fa/check-circle-o';

class StarListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
    };
  }

  render() {
    return (
      <li>
        <FaCircleO />
      </li>
    )

  //   {*/ if (this.props.star.date) {
  //     let starDate = new Date(this.props.star.date.to_f * 1000).getDate();
  //     let now = new Date();
  //     now.setHours(0, 0, 0, 0);
  //
  //     if (starDate < now.getDate()) {
  //       if (this.props.star.completed) {
  //         return (<li><FaCheckCircleO /></li>)
  //       } else {
  //         return (<li><FaTimesCircleO /></li>)
  //       }
  //     } else if (starDate === now.getDate()) {
  //       return (
  //         <li onClick={() => this.state.completed === true ? null : this.setState({ completed: true })}>
  //           {this.state.completed ? <FaCheckCircleO /> : <FaCircleO />}>
  //         </li>
  //       )
  //     }
  //   } else {
  //     return (<li><FaCircleO /></li>)
  //   }
    // return null; */}
  }
}

export default StarListItem;
