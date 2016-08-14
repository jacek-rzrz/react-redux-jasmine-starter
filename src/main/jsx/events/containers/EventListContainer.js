import {connect} from 'react-redux';
import EventList from 'events/components/EventList';

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps)(EventList);
