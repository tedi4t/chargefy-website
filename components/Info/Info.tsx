import Button from '@mui/material/Button';
import Link from 'next/link';
import Typography from '@mui/material/Typography';

import { Wrapper, Title, Description, Subtitle, WButton, TextWrapper } from './Info.styles';

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
        <Link href={props.link}>
          <a>
            <TextWrapper>
              Перейти
            </TextWrapper>
          </a>
        </Link>
      </WButton>
    </Wrapper>
  )
}