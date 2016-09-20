'use strict';

import React from 'react';
import {
  Container,
  RunBox
} from 'electrum-arc';

export default class DispatchJobs extends React.Component {

  constructor (props) {
    super (props);
  }

  getJob (data) {
    return (
      <RunBox width={this.ticketWidth} height={this.ticketHeight} data={data} {...this.link ()} />
    );
  }

  render () {
    return (
      <Container kind='views' {...this.link ()} >
        <Container kind='view' width='700px' {...this.link ()} >
          <Container kind='panes' {...this.link ()} >
            <Container kind='pane' {...this.link ()} >
              <Container kind='row-pane' {...this.link ()} >
                {this.getJob ({
                  pickTime:    '10:50',
                  pickDesc:    'Coop St. Laurent',
                  pickZone:    'Zone A',
                  pickGlyphs:  ['phone-square', 'bookmark-secondary'],
                  dropTime:    '11:20',
                  dropDesc:    'Dupond J.',
                  dropZone:    'Zone C',
                  dropGlyphs:  ['bookmark-base', 'bookmark-primary'],
                  count:       '2 pces',
                  weight:      '1.3 kg',
                  price:       '100.00',
                  priceGlyphs: 'warning'})}
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}
