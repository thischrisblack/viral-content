import React from 'react';

class CrashModal extends React.Component {

  render () {
    return (
      <div className="crash-modal" style={{display: this.props.display ? 'flex' : 'none'}}>
        <div>
          <h1>We're sorry.</h1>
          <p>Your interest in our products has become off-putting.</p>
          <p>We have terminated your transaction and reported your IP address.</p>
        </div>        
      </div>
    )
  }
}

export default CrashModal