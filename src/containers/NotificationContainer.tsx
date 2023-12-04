import * as React from 'react';
import { connect } from 'react-redux';
import Notification from '../components/Notification';
interface IAppProps { [propName: string]: any }
class NotificationContainer extends React.Component<IAppProps> {
  public render() {
    var { message } = this.props;
    return (
      <Notification message={message} />
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    message: state.message
  }
};
const mapPropsToState = (dispatch: any, props: any) => {
  return {
  }
};
export default connect(mapStateToProps, mapPropsToState)(NotificationContainer);