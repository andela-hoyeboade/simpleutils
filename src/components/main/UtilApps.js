import React, {Component} from 'react';
import {Grid, Row} from "react-bootstrap";
import UtilApp from "./UtilApp";

import '../../styles/components/main/UtilApps.css';

export default class UtilApps extends Component {

  constructor(props) {
    super(props);
    this.state = UtilApps.getInitialState();
  }

  static getInitialState() {
    return {
      apps: [],
      loading: false
    }
  }

  componentWillMount() {
    this.fetchApps();
  }

  fetchApps() {
    this.setState({
      apps: [{
        title: 'ahgkjnjgugfnufbngfbnghubgubuihbiughbuihbu',
        description: 'decgdngufduuigbuiguifuigfhuihguifgiuuighiughuiggiuiu',
        logo: 'g',
        slug: 'se'
      }]
    })
  }

  render() {
    return (
      <Grid className="UtilApps">
        <Row>
        {
          this.state.apps.map((app, index) => {
            return <UtilApp key={index} {...app}/>
          })
        }
        </Row>
      </Grid>
    );
  }
}
