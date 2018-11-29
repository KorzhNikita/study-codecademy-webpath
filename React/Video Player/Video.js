import React from 'react';

export class Video extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div>
        <video controls autostart autoplay src={src}/>
      </div>
    );
  }
}