import React from 'react';
import { withRouter } from 'react-router-dom';

class Route extends React.Component {
  render() {
    const { layout: Layout, component: Com } = this.props;
    if (Layout) {
      return (
        <Layout>
          <Com {...this.props} />
        </Layout>
      );
    } else {
      return <Com {...this.props} />;
    }
  }
}

export default withRouter(Route);
