import React, {Component} from 'react';

class Links extends Component {
  constructor() {
    super();
    this.state = {
      links: []
    };
  }
  componentWillMount() {
    this.setState({
      links: [
        'Home',
        'About',
        'Services',
        'Support',
        'Contact'
      ]
    });
  }
  render() {
    let links = this.state.links.map((page, key) => {
      return (
        <li key={key}><a href="/" style={styles.a}>{page}</a></li>
      )
    });
    return (
      <ul style={styles.ul}>
        {links}
      </ul>
    );
  }
}

const styles = {
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0
  },
  a: {
    textDecoration: 'none',
    color: '#000'
  }
}

export { Links };
