import React, { useEffect, useRef } from 'react';
import Layout from '../components/layout';
import Grid from '../components/grid/grid';
import { Link } from 'gatsby';

import './index.css';

const data = [
  [1, 0, 1, 0, 0, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 1, 0],
  [1, 1, 1, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 0, 1, 1, 1]
];

export default () => (
  <Layout>
    <Link to={`/resume`}>Resume</Link>
    <Grid data={data}></Grid>
  </Layout>
);
