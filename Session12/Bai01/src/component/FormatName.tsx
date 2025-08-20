import { Component } from 'react'

type User = {
  firstName: string;
  lastName: string;
};
export default class FormatName extends Component {
  render() {
    const user: User = {
      firstName: 'Nguyen Van',
      lastName: 'Nam',
    };

    function formatName(user: User): string {
      return `${user.firstName} ${user.lastName}`;
    }
    return (
      <>
      <h2>Ho va ten: {formatName(user)}</h2>
      </>
    )
  }
}