'use babel';

import EasyLinefeed from './easy-linefeed-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(EasyLinefeed);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'EasyLinefeed'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'EasyLinefeed'
    )
    inkdrop.components.deleteClass(EasyLinefeed);
  }

};
