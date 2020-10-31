import React from 'react';
import { useDispatch, connect, useSelector } from 'react-redux'
import { loadFlockProfiles } from '../../actions/flockListActions'

function Friends() {
  const dispatch = useDispatch();
  dispatch(loadFlockProfiles());
  const isLogged = useSelector(state => state.isLogged);
  const username = useSelector(state => state.user.info.username);
  return (
    <div >
      <h1>hi</h1>
    </div>
  );
}

export default connect(null, { loadFlockProfiles })(Friends);