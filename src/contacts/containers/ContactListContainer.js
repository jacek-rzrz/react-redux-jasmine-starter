import { connect } from 'react-redux';
import ContactList from 'contacts/components/ContactList';

const mapStateToProps = state => ({
  contacts: state.contacts
});

export default connect(mapStateToProps)(ContactList);
