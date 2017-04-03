const data =
  {
    Header: [
      {
        Name:        'Description',
        Description: 'Description',
        Grow:        '5',
        TextAlign:   'left',
      },
      {
        Name:        'Quantity',
        Description: 'Quantité',
        Grow:        '1',
        TextAlign:   'right',
      },
      {
        Name:        'Unit',
        Description: 'Unité',
        Grow:        '1',
        TextAlign:   'left',
      },
      {
        Name:        'PricePerUnit',
        Description: 'Prix',
        Grow:        '1',
        TextAlign:   'right',
      },
      {
        Name:        'Discount',
        Description: 'Rabais',
        Grow:        '1',
        TextAlign:   'right',
      },
      {
        Name:        'FinalPrice',
        Description: 'Total',
        Grow:        '1',
        TextAlign:   'right',
      },
    ],
    Rows: [
      {
        id:           'row0',
        Description:  'Crésus Comptabilité PRO',
        Quantity:     '1',
        Unit:         'pce',
        PricePerUnit: '480.00',
        FinalPrice:   '480.00',
      },
      {
        id:           'row1',
        Description:  'Crésus Facturation PRO',
        Quantity:     '200',
        Unit:         'pce',
        PricePerUnit: '480.00',
        Discount:     '100.00',
        FinalPrice:   '95900.00',
      },
      {
        id:           'row2',
        Description:  'Formation compabilité mardi 10.02.2017',
        Quantity:     '4.5',
        Unit:         'h',
        PricePerUnit: '150.00',
        FinalPrice:   '675.00',
      },
      {
        id:           'row3',
        Description:  'Dépannage ticket #30.205',
        Quantity:     '1',
        PricePerUnit: '100.00',
        Discount:     '10%',
        FinalPrice:   '90.00',
      },
      {
        id:           'row4',
        Description:  'Vis M12',
        Quantity:     '200',
        Unit:         'pce',
        PricePerUnit: '0.30',
        FinalPrice:   '60.00',
      },
      {
        id:           'row5',
        Description:  'Description débile super longue pour tester la mise en page lorsque le texte est très long, voilà voilà...',
        Quantity:     '1',
        PricePerUnit: '5.00',
        FinalPrice:   '5.00',
      },
      {
        id:           'row6',
        Description:  'Huile de coude extra-forte',
        Quantity:     '2.5',
        Unit:         'dl',
        PricePerUnit: '10.00',
        FinalPrice:   '250.00',
      },
    ]
  };

module.exports = {data};
