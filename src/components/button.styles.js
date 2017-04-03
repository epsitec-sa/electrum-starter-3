export default function (theme) {
  return {
    base: {
      'fontFamily':     '\'Open Sans\', Helvetica, Arial, Verdana, sans-serif',
      'cursor':         'pointer',
      'fontWeight':     700,
      'textTransform':  'uppercase',
      'textDecoration': 'none',
      'color':          '#999',
      'border':         '2px solid #999',
      'padding':        '10 10 10 10',
      'margin':         '20 2 2 2',
      'position':       'relative',
      'display':        'block',
      'textAlign':      'center',
      'boxSizing':      'border-box',
      'width':          '300px',
      'background':     'transparent',
      ':hover':         {
        background: '#3f3f3f',
        opacity:    0.9
      }
    }
  };
}
