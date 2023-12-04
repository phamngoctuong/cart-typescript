import * as React from 'react';
interface IAppProps { [propName: string]: any }
class Notification extends React.Component<IAppProps> {
  public render() {
    var { message } = this.props;
    return (
      <h3>
        <span className="badge amber darken-2">{message}</span>
      </h3>
    );
  }
}
export default Notification;