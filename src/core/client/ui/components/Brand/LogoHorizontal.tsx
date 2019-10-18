import { Localized } from "fluent-react/compat";
import React, { FunctionComponent } from "react";

import { withStyles } from "coral-ui/hocs";

import styles from "./LogoHorizontal.css";

interface Props {
  className?: string;
  classes: typeof styles;
  fill?: string;
}

const LogoHorizontal: FunctionComponent<Props> = ({
  className,
  classes,
  fill,
  ...rest
}) => (
  <>
    <Localized id="ui-brandName">
      <h1 aria-hidden className={styles.hiddenTitle}>
        Coral
      </h1>
    </Localized>
    <svg
      id="Layer_1"
      className={styles.base}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1011.23 388.38"
    >
      <title>Coral by Vox Media</title>
      <path
        fill={fill}
        d="M471.21,341.35l10.17,29.78L488,351.31c1.13-3.39,2.16-6.78,3.08-9.65h13.66L491.14,375c-2.16,5.45-3.5,8.63-4.73,12.33l-10.27.61-13.55-32.86c-1.65-4.11-3.7-9.24-5.55-13.25Z"
      />
      <path
        fill={fill}
        d="M534.88,340.63c-14.27,0-23.82,10.68-23.82,25.06,0,12.53,9,22.69,22.69,22.69,14.17,0,23.83-10.68,23.83-25.05C557.58,350.7,548.54,340.63,534.88,340.63Zm-.72,37.59c-6.16,0-10.57-5.34-10.57-14,0-7.39,4.21-13.55,10.78-13.55,6.16,0,10.58,5.34,10.58,14C545,372.16,540.74,378.22,534.16,378.22Z"
      />
      <path
        fill={fill}
        d="M564.66,387.15l15.71-23.31-6.16-9-8.83-13,14.28-.51L589,355.83l3.18-5.44c1.65-2.67,3.91-6.27,5.55-8.83H611.8l-15,22.49,5.54,8.11c2.57,3.9,7,10.58,9.86,14.79l-14.38.51L588.28,372l-3,4.83c-1.43,2.36-4.51,7.39-6.26,10.06H564.66Z"
      />
      <path
        fill={fill}
        d="M646.2,371.54l1.95-14.27c.62-4.11,1.64-12.32,1.85-15.71l9.86-.41c1.13,2.56,2.77,6.26,4.11,9.14L672.39,369l8.21-19c1.23-2.78,2.67-6.16,3.8-8.73H694c.41,3.8,1.44,11.81,2.06,16l2,14.27c.62,4.21,1.85,12.22,2.57,15.61l-12.74.52c-.1-1.85-.72-7.3-1.13-9.86l-1.84-14.38c-3.19,7.91-8.84,22-9.66,24.24l-6.78.3-9.75-23.92-1.54,13.86c-.31,2.57-.82,7.5-.82,9.34H643.63C644.45,383.87,645.58,375.75,646.2,371.54Z"
      />
      <path
        fill={fill}
        d="M745,387.46c-4.31-.31-9.55-.31-14.58-.31-5.65,0-11.81.1-16.64.31.31-3.08.41-11.6.41-15.81V357.27c0-4.11-.1-12.84-.41-16,4.73.2,9.86.31,15.71.31,5.34,0,10.27-.11,14.69-.31a101.86,101.86,0,0,0-.51,10.27c-3.29-.1-6.58-.1-10.58-.1-2,0-4.11,0-6,.1-.1.92-.1,2.26-.1,2.87v5l14.07-.11c-.1,2.67-.21,5.65-.21,9H727v5.85c0,.72,0,2.06.1,3,1.85,0,4,.1,6,.1,4.62,0,8.52-.1,12.32-.2C745.09,380.37,745,383.45,745,387.46Z"
      />
      <path
        fill={fill}
        d="M774.05,341.35c-7.19,0-12.94.41-15.3.41.31,3.19.41,11.4.41,15.51v14.27c0,4.21-.1,12.53-.41,15.61h17c15.2,0,24.85-9.14,25-23.72C800.75,349.57,791.2,341.35,774.05,341.35Zm1.64,35.94a28.92,28.92,0,0,1-3.38-.2,22.58,22.58,0,0,1-.11-2.67V354.29a25.92,25.92,0,0,1,.11-2.87,25.76,25.76,0,0,1,3.18-.21c7.8,0,12.53,4.62,12.53,12.73C788,371.65,784.32,377.29,775.69,377.29Z"
      />
      <path
        fill={fill}
        d="M813.69,387.15c.31-3.08.41-11.4.41-15.61V357.27c0-4.11-.1-12.53-.41-15.61,2.57,0,11.61-.1,13.76-.31-.2,1.85-.31,7.09-.31,9.55v26.91c0,2.46.11,7.49.31,9.34Z"
      />
      <path
        fill={fill}
        d="M882.39,374l-14.17-32.86-10.37.61c-1.23,3.6-2.77,7-5,12.33l-14.07,33.16H852.2c.41-.82,2.26-5.95,3.08-8.11H871.1l3.49,8.63,13.76-.52C886.5,383.25,884,378,882.39,374Zm-24.54-3L863,357,868.22,371Z"
      />
      <path
        fill={fill}
        d="M384.61,375.13c0,6.54-4.55,10-11.82,10H359.44V350.25h12.22c7.27,0,11.81,3.24,11.81,9.49,0,3.75-2,6.47-4.54,7.38A8.45,8.45,0,0,1,384.61,375.13Zm-13-10.22c4,0,6.19-1.54,6.19-4.83s-2.16-4.72-6.19-4.72h-6.42v9.55ZM365.18,380h7.5c4,0,6.13-2,6.13-5.12s-2.15-5.11-6.13-5.11h-7.5Z"
      />
      <path
        fill={fill}
        d="M415.76,350.25H422l-12.67,21v13.92h-5.85V371.21l-12.62-21h6.42l9.26,15.62Z"
      />
      <path
        fill={fill}
        d="M358.84,148.31c0-56.33,44-100.89,99.76-100.89a98.22,98.22,0,0,1,75.95,35.31,12.88,12.88,0,0,1,3.36,8.41,11.9,11.9,0,0,1-12,11.77c-3.08,0-6.44-2-9.53-4.77-13.45-16.81-33.62-28-57.73-28-42,0-75.1,34.47-75.1,78.19,0,43.43,33.07,77.9,75.1,77.9,24.11,0,44.28-11.21,57.73-27.74,3.09-3.08,6.45-4.76,9.53-4.76a11.72,11.72,0,0,1,12,11.77,12.2,12.2,0,0,1-3.36,8.12,97.56,97.56,0,0,1-75.95,35.59C402.84,249.19,358.84,204.64,358.84,148.31Z"
      />
      <path
        fill={fill}
        d="M556.69,174.93c0-41.48,31.95-74.26,74-74.26s73.71,32.78,73.71,74.26-31.67,74.26-73.71,74.26S556.69,216.41,556.69,174.93Zm125,0c0-29.71-22.14-53.53-51-53.53s-51.28,23.82-51.28,53.53c0,29.42,22.42,53.53,51.28,53.53S681.68,204.35,681.68,174.93Z"
      />
      <path
        fill={fill}
        d="M729.87,161.2c0-36.15,23-60.53,57.73-60.53A10.34,10.34,0,0,1,798,111,10.52,10.52,0,0,1,787.6,121.4c-20.73,0-35.31,13.74-35.31,39.8v75.94a11.3,11.3,0,0,1-11.21,11.49,11.13,11.13,0,0,1-11.21-11.49Z"
      />
      <path
        fill={fill}
        d="M928.84,226.77a70.75,70.75,0,0,1-52.4,22.42c-41.2,0-72.59-32.78-72.59-74.26s31.39-74.26,72.59-74.26a71.84,71.84,0,0,1,52.4,22.41V112.43a11.25,11.25,0,0,1,11.21-11.21,11.07,11.07,0,0,1,11.21,11.21V237.14a11.13,11.13,0,0,1-11.21,11.49,11.31,11.31,0,0,1-11.21-11.49Zm0-49.6v-4.48c-1.12-29.15-23.26-51.29-51-51.29-28.59,0-51.29,23.26-51.29,53.53s22.7,53.53,51.29,53.53C905.58,228.46,927.72,206.32,928.84,177.17Z"
      />
      <path
        fill={fill}
        d="M988.81,59.19A11.06,11.06,0,0,1,1000,48a11.24,11.24,0,0,1,11.21,11.21v178A11.3,11.3,0,0,1,1000,248.63a11.13,11.13,0,0,1-11.21-11.49Z"
      />
      <path
        fill={fill}
        d="M279.85,193.46a9.61,9.61,0,0,0-12.58,5.1A129,129,0,0,1,157.9,277.07V253.94a37.3,37.3,0,0,1,1.77-3.66c6-10.78,17.19-16.92,30.15-24,14.75-8.1,31.47-17.28,41.68-35.46a9.6,9.6,0,0,0-16.74-9.4c-7.52,13.39-20.47,20.51-34.18,28-7.77,4.26-15.68,8.62-22.68,14.22V209.83c0-19.74,13.07-31,29.61-45.23,20.16-17.36,43-37,43-76.47a9.6,9.6,0,0,0-19.2,0c0,19.54-7.18,32.79-17.23,44-9.82-13.55-16.64-31.08-16.64-44a9.6,9.6,0,0,0-19.2,0c0,17.84,8.74,40.29,21.9,57.45L175,150.06c-9.75,8.39-19.67,16.95-26.67,27.64-7-10.69-16.93-19.25-26.68-27.64l-5.17-4.48c13.16-17.16,21.9-39.6,21.9-57.45a9.6,9.6,0,0,0-19.2,0c0,12.94-6.82,30.46-16.63,44-10.06-11.22-17.24-24.47-17.24-44a9.6,9.6,0,0,0-19.2,0c0,39.43,22.85,59.11,43,76.47,16.53,14.24,29.6,25.49,29.6,45.23v13.82c-7-5.61-14.92-10-22.7-14.23-13.71-7.53-26.66-14.65-34.18-28a9.59,9.59,0,0,0-16.73,9.4C75.3,209,92,218.14,106.77,226.24c13,7.12,24.16,13.26,30.15,24a37,37,0,0,1,1.79,3.7v23.09A129.07,129.07,0,0,1,57,57a129.19,129.19,0,0,1,210.26,41A9.6,9.6,0,0,0,285,90.58a148.38,148.38,0,0,0-273.29,0A148.3,148.3,0,0,0,253.17,253.17,147.66,147.66,0,0,0,285,206,9.59,9.59,0,0,0,279.85,193.46Z"
      />
    </svg>
  </>
);
LogoHorizontal.defaultProps = {
  fill: "#f77160",
};

export default withStyles(styles)(LogoHorizontal);