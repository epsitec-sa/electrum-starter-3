'use strict';

import React from 'react';

import {
  Container,
  Splitter,
  DispatchRoadbooks,
  DispatchBacklog,
  DispatchDesk
} from 'electrum-arc';

export default class DispatchMessengers extends React.Component {

  constructor (props) {
    super (props);
    this.data = window.document.data;
  }

  componentDidMount () {
    if (window.document.mock) {
      window.document.toUpdate.push (this);
    }
  }

  componentWillUnmount () {
    if (window.document.mock) {
      const index = window.document.toUpdate.indexOf (this);
      if (index !== -1) {
        window.document.toUpdate.splice (index, 1);
      }
    }
  }

  onSplitterRoadbooksChanged (size) {
    this.data.SplitterRoadbooksHeight = size;
  }

  onSplitterBacklogChanged (size) {
    this.data.SplitterBacklogWidth = size;
  }

  splitterRoadbooksHeight () {
    if (this.data.SplitterRoadbooksHeight) {
      return this.data.SplitterRoadbooksHeight;
    } else {
      return '60%';  // default value
    }
  }

  splitterBacklogWidth () {
    if (this.data.SplitterBacklogWidth) {
      return this.data.SplitterBacklogWidth;
    } else {
      return '750px';  // default value
    }
  }

  render () {
    return (
      <Container kind='tickets-root' {...this.link ()} >
        <Splitter kind='horizontal' default-size={this.splitterRoadbooksHeight ()}
          onSizeChanged={size => this.onSplitterRoadbooksChanged (size)}
          first-view-id='view-roadbook' {...this.link ()} >
          <DispatchRoadbooks {...this.link ()} />
          <Splitter kind='vertical' default-size={this.splitterBacklogWidth ()} min-size='0px'
            onSizeChanged={size => this.onSplitterBacklogChanged (size)}
            first-view-id='view-backlog' last-view-id='view-desk' {...this.link ()} >
            <DispatchBacklog {...this.link ()} />
            <DispatchDesk {...this.link ()} />
          </Splitter>
        </Splitter>
      </Container>
    );
  }
}
