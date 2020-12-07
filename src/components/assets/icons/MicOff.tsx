import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgMicOff(props: SvgProps) {
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
        d="M8.1 3.187C8.5 1.295 10.1 0 12 0c1.1 0 2.1.398 2.8 1.195.8.697 1.2 1.693 1.2 2.788v5.278c0 .598-.4.996-1 .996s-1-.398-1-.996V3.983c0-.498-.2-.995-.6-1.394-.4-.398-.9-.597-1.4-.597-.9 0-1.8.697-2 1.593-.1.498-.6.896-1.1.797-.6-.1-.9-.697-.8-1.195zm9.7 13.145l5.9 5.875c.4.399.4.996 0 1.494-.2.2-.5.299-.7.299-.2 0-.5-.1-.7-.299l-5.4-5.377c-1.1.896-2.5 1.394-3.9 1.593v1.992h3c.6 0 1 .398 1 .996 0 .597-.4.995-1 .995H8c-.6 0-1-.398-1-.995 0-.598.4-.996 1-.996h3v-1.992c-1.7-.2-3.3-.896-4.6-2.19A8.2 8.2 0 014 11.95V9.96c0-.598.4-.996 1-.996s1 .398 1 .996v1.991c0 1.594.6 3.187 1.8 4.282 1.1 1.096 2.5 1.693 4 1.693h.4c1.2 0 2.3-.398 3.3-1.095L14 15.336c-.6.398-1.3.598-2 .598-1.1 0-2.1-.399-2.8-1.195C8.4 14.04 8 13.046 8 11.95V9.361L.3 1.693A.96.96 0 01.3.299a.97.97 0 011.4 0l8 7.967 7.9 7.767.1.1c0 .05.025.075.05.1.025.024.05.05.05.099zm-7.2-2.988c.4.399.9.598 1.4.598.2 0 .3 0 .5-.1l-2.5-2.49v.598c0 .498.2.996.6 1.394zM18 11.95c0 .399 0 .697-.1 1.096-.1.498.3.995.8 1.095h.2c.5 0 .9-.299 1-.797.1-.497.1-.896.1-1.394V9.96c0-.598-.4-.996-1-.996s-1 .398-1 .996v1.991z"
        clipRule="evenodd"
      />
      <Mask id="mic-off_svg__a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M8.1 3.187C8.5 1.295 10.1 0 12 0c1.1 0 2.1.398 2.8 1.195.8.697 1.2 1.693 1.2 2.788v5.278c0 .598-.4.996-1 .996s-1-.398-1-.996V3.983c0-.498-.2-.995-.6-1.394-.4-.398-.9-.597-1.4-.597-.9 0-1.8.697-2 1.593-.1.498-.6.896-1.1.797-.6-.1-.9-.697-.8-1.195zm9.7 13.145l5.9 5.875c.4.399.4.996 0 1.494-.2.2-.5.299-.7.299-.2 0-.5-.1-.7-.299l-5.4-5.377c-1.1.896-2.5 1.394-3.9 1.593v1.992h3c.6 0 1 .398 1 .996 0 .597-.4.995-1 .995H8c-.6 0-1-.398-1-.995 0-.598.4-.996 1-.996h3v-1.992c-1.7-.2-3.3-.896-4.6-2.19A8.2 8.2 0 014 11.95V9.96c0-.598.4-.996 1-.996s1 .398 1 .996v1.991c0 1.594.6 3.187 1.8 4.282 1.1 1.096 2.5 1.693 4 1.693h.4c1.2 0 2.3-.398 3.3-1.095L14 15.336c-.6.398-1.3.598-2 .598-1.1 0-2.1-.399-2.8-1.195C8.4 14.04 8 13.046 8 11.95V9.361L.3 1.693A.96.96 0 01.3.299a.97.97 0 011.4 0l8 7.967 7.9 7.767.1.1c0 .05.025.075.05.1.025.024.05.05.05.099zm-7.2-2.988c.4.399.9.598 1.4.598.2 0 .3 0 .5-.1l-2.5-2.49v.598c0 .498.2.996.6 1.394zM18 11.95c0 .399 0 .697-.1 1.096-.1.498.3.995.8 1.095h.2c.5 0 .9-.299 1-.797.1-.497.1-.896.1-1.394V9.96c0-.598-.4-.996-1-.996s-1 .398-1 .996v1.991z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#mic-off_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgMicOff;