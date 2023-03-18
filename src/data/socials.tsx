import { ReactNode } from 'react';
import {
  GitHubLogo,
  HashnodeLogo,
  TwitterLogo,
  LinkedinLogo,
} from '@/components/Icons';

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/RaunakGurud',
    icon: <TwitterLogo />,
  },
  {
    id: 'github',
    name: 'Github',
    url: 'https://github.com/raunakgurud09',
    icon: <GitHubLogo />,
  },
  {
    id: 'hashnode',
    name: 'Hashnode',
    url: 'https://raunakgurud.hashnode.dev',
    icon: <HashnodeLogo />,
  },
  {
    id: 'linkedin',
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/raunakgurud',
    icon: <LinkedinLogo />,
  },
];

export default socials;

// {
//   id: 'mail',
//   name: 'Mail',
//   url: 'raunakgurud2121@gmail.com',
//   icon: <MailLogo />,
// },
