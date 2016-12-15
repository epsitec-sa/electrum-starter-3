'use strict';

import React from 'react';
import {Unit} from 'electrum-theme';

import {
  Container,
  Button,
  TextField,
  TextFieldCombo,
  Label,
  Trip,
  TicketsTray,
  MessengerTicket,
  Splitter,
  DragCab,
  Roadbook,
  DispatchBacklog,
  DispatchDesk
} from 'electrum-arc';

export default class DispatchMessengers extends React.Component {

  constructor (props) {
    super (props);
    window.document.dispatch = this;
    this.data = window.document.data;
  }

  renderMessenger (roadbook) {
    return (
      <MessengerTicket data={roadbook} {...this.link ()} />
    );
  }

  renderTicket (ticket, kind, index) {
    return (
      <Trip key={index} kind={kind} data={ticket} {...this.link ()} />
    );
  }

  renderTrayTickets (tickets) {
    const result = [];
    let index = 0;
    for (var ticket of tickets) {
      const kind = (ticket.Type === 'pair') ? 'trip-tickets' : 'trip-ticket';
      result.push (this.renderTicket (ticket, kind, index++));
    }
    return result;
  }

  renderTray (tray, index) {
    const x = tray.Position.split (',')[0];  // split '1650px,50px' by example
    const y = tray.Position.split (',')[1];
    return (
      <TicketsTray key={index} left={x} top={y} rotate={tray.Rotation} title={tray.Name}
        data={tray} {...this.link ()} >
        {this.renderTrayTickets (tray.Tickets)}
      </TicketsTray>
    );
  }

  renderDesk (ticketsTrays) {
    const result = [];
    let index = 0;
    for (var tray of ticketsTrays) {
      result.push (this.renderTray (tray, index++));
    }
    return result;
  }

  renderTickets (tickets, kind) {
    const result = [];
    let index = 0;
    for (var ticket of tickets) {
      result.push (this.renderTicket (ticket, kind, index++));
    }
    return result;
  }

  renderRoadbook (roadbook, index) {
    const maxWidth = Unit.add (this.props.theme.shapes.tripTicketWidth, '20px');
    return (
      <DragCab key={index} drag-handle='messengers' direction='horizontal'
        color={this.props.theme.palette.roadbookDragAndDropHover}
        thickness={this.props.theme.shapes.dragAndDropThickness}
        radius='0px'
        id={roadbook.id} owner-id='messengers' {...this.link ()}>
        <Roadbook key={index} {...this.link ()} >
          {this.renderMessenger (roadbook)}
          <Container kind='tickets-trips' drag-controller='tickets' drag-source='roadbooks'
            id={roadbook.id} max-width={maxWidth} {...this.link ()} >
            {this.renderTickets (roadbook.Tickets, 'trip-ticket')}
          </Container>
        </Roadbook>
      </DragCab>
    );
  }

  renderRoadbooks (roadbooks) {
    const result = [];
    let index = 0;
    for (var roadbook of roadbooks) {
      result.push (this.renderRoadbook (roadbook, index++));
    }
    return result;
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

  // <Backlog {...this.link ()} />
  // <Desk {...this.link ()} />

  //  <Container kind='view-stretch' {...this.link ()} >
  //    <Container kind='pane-top' {...this.link ()} >
  //      <TextFieldCombo hint-text='Date' combo-glyph='calendar'
  //        grow='1' spacing='large' combo-type='calendar'
  //        combo-direction='right' flying-balloon-anchor='bottom'
  //        {...this.link ('exp-date')} />
  //      <TextFieldCombo hint-text='Période' combo-glyph='clock-o'
  //        grow='1' spacing='large' combo-type='clock'
  //        flying-balloon-anchor='right' {...this.link ('exp-time')} />
  //      <TextFieldCombo shape='rounded' hint-text='Chercher'
  //        grow='2' combo-glyph='Search' {...this.link ()} />
  //    </Container>
  //    <Container kind='panes' {...this.link ()} >
  //      <Container kind='column' drag-controller='tickets' drag-source='backlog'
  //        view-parent-id='view-backlog' {...this.link ()} >
  //        {this.renderTickets (this.data.Backlog.Tickets, 'trip-box')}
  //      </Container>
  //    </Container>
  //  </Container>
  //  <Container kind='tickets-desk' {...this.link ()} >
  //    {this.renderDesk (this.data.TicketsTrays)}
  //  </Container>

  render () {
    return (
      <Container kind='tickets-root' {...this.link ()} >
        <Splitter kind='horizontal' default-size={this.splitterRoadbooksHeight ()}
          onSizeChanged={size => this.onSplitterRoadbooksChanged (size)}
          first-view-id='view-roadbook' {...this.link ()} >
          <Container kind='tickets-messengers' drag-controller='messengers' drag-source='messengers' {...this.link ()} >
            {this.renderRoadbooks (this.data.Roadbooks)}
          </Container>
          <Splitter kind='vertical' default-size={this.splitterBacklogWidth ()} min-size='0px'
            onSizeChanged={size => this.onSplitterBacklogChanged (size)}
            first-view-id='view-backlog' last-view-id='view-desk' {...this.link ()} >
            <Container kind='view-stretch' {...this.link ()} >
              <Container kind='pane-top' {...this.link ()} >
                <TextFieldCombo hint-text='Date' combo-glyph='calendar'
                  grow='1' spacing='large' combo-type='calendar'
                  combo-direction='right' flying-balloon-anchor='bottom'
                  {...this.link ('exp-date')} />
                <TextFieldCombo hint-text='Période' combo-glyph='clock-o'
                  grow='1' spacing='large' combo-type='clock'
                  flying-balloon-anchor='right' {...this.link ('exp-time')} />
                <TextFieldCombo shape='rounded' hint-text='Chercher'
                  grow='2' combo-glyph='Search' {...this.link ()} />
              </Container>
              <Container kind='panes' {...this.link ()} >
                <Container kind='column' drag-controller='tickets' drag-source='backlog'
                  view-parent-id='view-backlog' {...this.link ()} >
                  {this.renderTickets (this.data.Backlog.Tickets, 'trip-box')}
                </Container>
              </Container>
            </Container>
            <Container kind='tickets-desk' {...this.link ()} >
              {this.renderDesk (this.data.TicketsTrays)}
            </Container>
          </Splitter>
        </Splitter>
      </Container>
    );
  }
}
