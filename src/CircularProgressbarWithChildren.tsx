// @ts-ignore
import * as SolidJS from 'solid-js';

import CircularProgressbar from './CircularProgressbar';
import { CircularProgressbarWrapperProps } from './types';
import { JSX } from 'solid-js/jsx-runtime';

type CircularProgressbarWithChildrenProps = CircularProgressbarWrapperProps & {
  children?: JSX.Element;
};

// This is a wrapper around CircularProgressbar that allows passing children,
// which will be vertically and horizontally centered inside the progressbar automatically.
function CircularProgressbarWithChildren(props: CircularProgressbarWithChildrenProps) {
  const { children, ...circularProgressbarProps } = props;

  return (
    <div data-test-id="CircularProgressbarWithChildren">
      {/* Has an extra div wrapper because otherwise, adding content after
      this progressbar is spaced weirdly. */}
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {/* Progressbar is not positioned absolutely, so that it can establish
      intrinsic size for props.children's content. */}
        <CircularProgressbar {...circularProgressbarProps} />

        {/* Children are positioned absolutely, and height adapts to the
      progressbar's intrinsic size. It appears below the progressbar,
      but negative margin moves it back up. */}
        {props.children ? (
          <div
            data-test-id="CircularProgressbarWithChildren__children"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              'margin-top': '-100%',
              display: 'flex',
              'flex-direction': 'column',
              'justify-content': 'center',
              'align-items': 'center',
            }}
          >
            {props.children}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CircularProgressbarWithChildren;
