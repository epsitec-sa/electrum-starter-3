'use strict';

const data =
{
  Header: [
    {
      Name: 'Content',
      Description: 'Type',
      Width: '100px',
      TextAlign: 'left',
    },
    {
      Name: 'Dimensions',
      Description: 'Dimensions',
      Width: '200px',
      TextAlign: 'left',
    },
    {
      Name: 'Weight',
      Description: 'Poids',
      Width: '100px',
      TextAlign: 'right',
    },
  ],
  Rows: [
    {
      id: 'row0',
      Content: 'C6',
      Dimensions: '11.4x16.2x1',
      Weight: '150g',
    },
    {
      id: 'row1',
      Content: 'A4',
      Dimensions: '21x29.7x1',
      Weight: '100g',
    },
    {
      id: 'row2',
      Content: 'XT9',
      Dimensions: '50x50x100',
      Weight: '1kg',
    },
    {
      id: 'row3',
      Content: 'N1',
      Dimensions: '1x2x3',
      Weight: '10g',
    },
  ]
};

module.exports = {data};
