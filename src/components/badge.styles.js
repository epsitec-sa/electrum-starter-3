'use strict';

export default function (theme) {
  return {
    base: {
      minWidth: '16px',
      height: '16px',
      lineHeight: '16px',
      textAlign: 'center',
      backgroundColor: '#f00',
      color: '#fff',
      borderRadius: '2em',
      fontSize: '60%',
      fontWeight: 'bold',
      padding: '0.4em'
    },
    float: {
      position: 'absolute',
      bottom: 0,
      right: 0
    }
  };
}
