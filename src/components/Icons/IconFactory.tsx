import { SVGProps } from 'react';

import {
  NextJSLogo,
  TypescriptLogo,
  ReactLogo,
  FigmaLogo,
  GoLogo,
  TailwindCSSLogo,
} from '.';

interface IconFactoryProps extends SVGProps<SVGSVGElement> {
  name: string;
}

const IconFactory = ({
  name,
  ...otherProps
}: IconFactoryProps): JSX.Element => {
  switch (name) {
    case 'nextjs':
      return <NextJSLogo {...otherProps} />;
    case 'typescript':
      return <TypescriptLogo {...otherProps} />;
    case 'figma':
      return <FigmaLogo {...otherProps} />;
    case 'tailwindcss':
      return <TailwindCSSLogo {...otherProps} />;
    case 'go':
      return <GoLogo {...otherProps} />;
    case 'react':
      return <ReactLogo {...otherProps} />;
    default:
      return <FigmaLogo />;
  }
};

export default IconFactory;
