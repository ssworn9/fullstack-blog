import styled, { CSSObject } from 'styled-components';
import { device } from '../../styles/global';

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: auto;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and ${device.tablet} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export type FlexProps = Pick<
  CSSObject,
  'justifyContent' | 'alignContent' | 'alignItems' | 'flexWrap' | 'flexDirection' | 'flexFlow' | 'columnGap' | 'rowGap'
>;

export interface FlexContainerProps {
  flexProps?: FlexProps;
}

export const FlexContainer = styled.div<FlexContainerProps>(({ flexProps = {} }) => ({
  display: 'flex',
  ...flexProps,
}));

export const PageSection = styled.section`
  padding: 40px 0;
`;
