import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCircle(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M1 12C1 5.9 5.9 1 12 1s11 4.9 11 11-4.9 11-11 11S1 18.1 1 12zm2 0c0 5 4 9 9 9s9-4 9-9-4-9-9-9-9 4-9 9z"
        clipRule="evenodd"
      />
      <Mask id="circle_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M1 12C1 5.9 5.9 1 12 1s11 4.9 11 11-4.9 11-11 11S1 18.1 1 12zm2 0c0 5 4 9 9 9s9-4 9-9-4-9-9-9-9 4-9 9z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#circle_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCircle;
