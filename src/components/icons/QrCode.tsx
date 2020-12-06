import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgQrcode(props: SvgProps) {
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
        fill="#347AF0"
        fillRule="evenodd"
        d="M3.354 6.738a.677.677 0 11-1.354 0V2.677C2 2.303 2.303 2 2.677 2h4.061a.677.677 0 110 1.354H3.354v3.384zm0 14.216h3.384a.677.677 0 010 1.354H2.677A.677.677 0 012 21.63v-4.062a.677.677 0 011.354 0v3.385zm18.277-4.062a.677.677 0 00-.677.677v3.385h-3.385a.677.677 0 000 1.354h4.062a.677.677 0 00.677-.677v-4.062a.677.677 0 00-.677-.677zM17.569 2h4.062c.374 0 .677.303.677.677v4.061a.677.677 0 01-1.354 0V3.354h-3.385a.677.677 0 010-1.354zm.677 16.923H6.062a.677.677 0 01-.677-.677v-4.061H4.03a.677.677 0 010-1.354h16.246a.677.677 0 110 1.354h-1.354v4.061a.677.677 0 01-.677.677zM6.738 17.57H17.57v-3.384H6.74v3.384zM6.062 5.385h12.184c.374 0 .677.303.677.677V10.8a.677.677 0 11-1.354 0V6.738H6.74V10.8a.677.677 0 11-1.354 0V6.062c0-.374.303-.677.677-.677z"
        clipRule="evenodd"
      />
      <Mask id="qr_code_svg__a" width={21} height={21} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M3.354 6.738a.677.677 0 11-1.354 0V2.677C2 2.303 2.303 2 2.677 2h4.061a.677.677 0 110 1.354H3.354v3.384zm0 14.216h3.384a.677.677 0 010 1.354H2.677A.677.677 0 012 21.63v-4.062a.677.677 0 011.354 0v3.385zm18.277-4.062a.677.677 0 00-.677.677v3.385h-3.385a.677.677 0 000 1.354h4.062a.677.677 0 00.677-.677v-4.062a.677.677 0 00-.677-.677zM17.569 2h4.062c.374 0 .677.303.677.677v4.061a.677.677 0 01-1.354 0V3.354h-3.385a.677.677 0 010-1.354zm.677 16.923H6.062a.677.677 0 01-.677-.677v-4.061H4.03a.677.677 0 010-1.354h16.246a.677.677 0 110 1.354h-1.354v4.061a.677.677 0 01-.677.677zM6.738 17.57H17.57v-3.384H6.74v3.384zM6.062 5.385h12.184c.374 0 .677.303.677.677V10.8a.677.677 0 11-1.354 0V6.738H6.74V10.8a.677.677 0 11-1.354 0V6.062c0-.374.303-.677.677-.677z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#qr_code_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgQrcode;
