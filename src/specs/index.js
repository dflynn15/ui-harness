describe('ui-harness', function() {
  require('./ComponentHost.spec');
  require('./css-loader.spec');
  require('./OutputLog.spec');
  require('./header-footer.spec');
  require('./skipped.spec');
  require('./it-server.spec');
  require('./PropTypes.spec');
  require('./Page.spec');
});

// External libs.
require('react-atoms/specs');
require('react-object/lib/specs');
