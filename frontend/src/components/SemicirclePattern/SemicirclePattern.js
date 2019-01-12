import React from 'react';

import { d1, d2, d3 } from './d';

import Svg from '../Svg';

const SemicirclePattern = () => (
  <Svg viewBox="0 0 723 98">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-279.000000, -702.000000)">
        <g>
          <g transform="translate(279.000000, 702.000000)">
            <path d={d1} fill="#d8d8d8" opacity="0.31" />
            <path d={d2} fill="#d8d8d8" opacity="0.31" />
            <path d={d3} fill="#f44f4f" />
          </g>
        </g>
      </g>
    </g>
  </Svg>
);

export default SemicirclePattern;
