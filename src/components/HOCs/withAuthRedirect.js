import React from 'react';

const withAuthRedirect = (
  Component,
  conditionPath,
  redirectDestination
) => (
  (props) => {
    if(props.location.pathname === conditionPath) {
      sessionStorage.getItem('userData') && props.history.push(redirectDestination);
    }

    return <Component {...props} />
  }
);

export default withAuthRedirect;