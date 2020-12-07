import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgAlertOctagon(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.1 23c.3 0 .6-.1.7-.2l5.9-5.9c.2-.2.3-.4.3-.7V7.9c0-.3-.1-.6-.2-.7l-5.9-5.9c-.2-.2-.4-.3-.7-.3H7.9c-.3 0-.6.1-.7.3L1.3 7.2c-.2.2-.3.4-.3.7v8.2c0 .3.1.6.3.7l5.9 5.9c.2.2.4.3.7.3h8.2zm-.3-2H8.3L3 15.8V8.3L8.3 3h7.4l5.4 5.3v7.4L15.8 21zM13 12V8c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1zm-.3 4.7c-.2.2-.4.3-.8.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.117.034-.2.063-.269.02-.048.037-.09.037-.131 0-.1.1-.2.2-.3.3-.3.7-.4 1.1-.2.05 0 .075.025.1.05.025.025.05.05.1.05.1 0 .2.1.2.1.05.05.075.1.1.15.025.05.05.1.1.15.1.1.1.3.1.4 0 .05-.025.125-.05.2-.025.075-.05.15-.05.2 0 .1-.1.2-.2.3z"
        clipRule="evenodd"
      />
      <Mask id="alert-octagon_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.1 23c.3 0 .6-.1.7-.2l5.9-5.9c.2-.2.3-.4.3-.7V7.9c0-.3-.1-.6-.2-.7l-5.9-5.9c-.2-.2-.4-.3-.7-.3H7.9c-.3 0-.6.1-.7.3L1.3 7.2c-.2.2-.3.4-.3.7v8.2c0 .3.1.6.3.7l5.9 5.9c.2.2.4.3.7.3h8.2zm-.3-2H8.3L3 15.8V8.3L8.3 3h7.4l5.4 5.3v7.4L15.8 21zM13 12V8c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1zm-.3 4.7c-.2.2-.4.3-.8.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.117.034-.2.063-.269.02-.048.037-.09.037-.131 0-.1.1-.2.2-.3.3-.3.7-.4 1.1-.2.05 0 .075.025.1.05.025.025.05.05.1.05.1 0 .2.1.2.1.05.05.075.1.1.15.025.05.05.1.1.15.1.1.1.3.1.4 0 .05-.025.125-.05.2-.025.075-.05.15-.05.2 0 .1-.1.2-.2.3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#alert-octagon_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgAlertOctagon;
