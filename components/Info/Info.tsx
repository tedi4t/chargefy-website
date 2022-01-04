import Button from '@mui/material/Button';
import Link from 'next/link';

import { Wrapper, Title, Description, Subtitle, WButton } from './Info.styles';

interface InfoProps {
  title: string;
  description: string;
  price: number;
  link: string;
}

export default function (props: InfoProps) {
  return (
    <Wrapper>
      <Title>
        {props.title}
      </Title>
      <Description>
        {props.description}
      </Description>
      <Subtitle>
        Від <span className="highlighted">₴{props.price}</span>
      </Subtitle>
      <WButton>
        Перейти
      </WButton>
    </Wrapper>
  )
}