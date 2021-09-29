import React from 'react';
import { CreateSVG, CreateSVGProps, SVGIconProps } from '../../CreateSvg';
import styled from 'styled-components';

export interface EyeIconProps extends Pick<CreateSVGProps, 'className'> {}

const EyeIconBase: React.FC<SVGIconProps> = ({ className }) => (
  <CreateSVG x="0px" y="0px" width="168.097px" height="168.097px" viewBox="0 0 168.097 168.097" className={className}>
    <g>
      <g>
        <circle cx="84.048" cy="84.044" r="20.699" />
        <path
          d="M167.055,81.422c-1.516-1.604-37.579-39.41-83.017-39.41c-45.433,0-81.491,37.806-83.003,39.41
			c-1.379,1.473-1.379,3.77,0,5.236c1.518,1.604,37.577,39.427,83.003,39.427c45.438,0,81.512-37.823,83.017-39.427
			C168.444,85.192,168.444,82.883,167.055,81.422z M84.048,116.043c-17.639,0-31.989-14.353-31.989-32.006
			c0-17.639,14.35-32,31.989-32c17.638,0,32.008,14.356,32.008,32C116.052,101.68,101.686,116.043,84.048,116.043z M58.682,53.829
			c-8.645,7.275-14.269,18.044-14.269,30.208c0,12.159,5.624,22.929,14.269,30.217c-23.92-7.693-42.704-23.88-49.418-30.217
			C15.979,77.707,34.767,61.518,58.682,53.829z M109.426,114.242c8.639-7.28,14.27-18.052,14.27-30.205
			c0-12.153-5.626-22.917-14.277-30.197c23.919,7.693,42.689,23.86,49.407,30.197C152.107,90.368,133.337,106.538,109.426,114.242z"
        />
      </g>
    </g>
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
  </CreateSVG>
);

export const EyeIcon = styled(EyeIconBase)`
  fill: ${(props) => props.fill};
  stroke: ${(props) => props.stroke};
  color: ${(props) => props.color};
`;
