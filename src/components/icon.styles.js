'use strict';

export default function (theme) {
  return {
    base: {
      display: 'table-cell',
      width: '32px',
      height: '32px',
      textAlign: 'center',
      verticalAlign: 'middle',
      backgroundColor: '#bbb',
      ':hover': {
        color: '#777'
      }
    },
    small: {
      width: '32px',
      height: '32px',
    },
    normal: {
      width: '48px',
      height: '48px',
    },
    large: {
      width: '64px',
      height: '64px',
    },
  };
}
