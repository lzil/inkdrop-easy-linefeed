'use babel';

import * as React from 'react';
import { CompositeDisposable } from 'event-kit';

export default class EasyLinefeed extends React.Component {

  componentWillMount () {
    // Events subscribed to in Inkdrop's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(inkdrop.commands.add(document.body, {
      'easy-linefeed:act': () => this.act()
    }));

  }

  componentWillUnmount () {
    this.subscriptions.dispose();
  }

  render() {
    return null;
  }


  act() {
    console.log('hi')
    const mde = inkdrop.getActiveEditorOrThrowError()
    mde.cm.doc.replaceSelection("  ")
    mde.cm.execCommand("newlineAndIndent")

  }
}
