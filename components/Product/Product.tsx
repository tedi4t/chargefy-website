import Image from 'next/image';

import { Wrapper, Title, Price } from './Product.style';

export interface ProductProps {
  img: any;
  title: string;
  price: number;
  sale?: number;
}

export default function(props: ProductProps) {
  return (
    <Wrapper>
      <div className={'hover_decoration'} />

      <Image src={props.img} />

      <Title>
        {props.title}
      </Title>

      <Price>
        {
          props.sale ? (
            <>
              <span className={'crossed'}>₴{props.price}</span>
              <span className={'sale'}>₴{props.sale}</span>
            </>
          ) : (
            <>
              ₴{props.price}
            </>
          )
        }
      </Price>
    </Wrapper>
  )
}