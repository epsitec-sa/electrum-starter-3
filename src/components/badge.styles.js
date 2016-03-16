'use strict';

export default function (theme) {
  return {
    base: {
      backgroundColor: '#f00',
      color: '#fff',
      borderRadius: '2em',
      fontSize: '60%',
      fontWeight: 'bold',
      padding: '0.4em'
    },
    float: {
      backgroundColor: '#0f0',
      position: 'relative',
      bottom: 0,
      left: 0
    }
  };
}
