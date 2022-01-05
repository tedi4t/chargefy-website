import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

import { Wrapper, InsideWrapper, Title, Column, LogoWrapper, LinkWrapper, FooterText, Highlight, HighlightGrid } from './Footer.styles';

import Logo from '../../media/logo.png';

interface Social {
  icon: JSX.Element;
  text: string;
  href: string;
}

export default function() {
  const socials = [
    {
      icon: <FacebookIcon />,
      text: 'Facebook',
      href: 'https://facebook.com',
    },
    {
      icon: <InstagramIcon />,
      text: 'Instagram',
      href: 'https://instagram.com',
    },
    {
      icon: <TelegramIcon />,
      text: 'Telegram',
      href: 'https://telegram.com',
    },
  ];

  const pages: Array<{ name: string, href: string }> = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Products',
      href: '/products'
    },
    {
      name: 'About Us',
      href: '/about'
    },
    {
      name: 'Contacts',
      href: '/contacts'
    },
  ];

  const helpPages: Array<{ name: string, href: string }> = [
    {
      name: 'Delivery',
      href: '/delivery'
    },
    {
      name: 'Return',
      href: '/return'
    },
    {
      name: 'FAQ',
      href: '/faq'
    },
  ];

  return (
    <footer>
      <Wrapper>
        <Container>
          <InsideWrapper>
            <Grid container>
              <Grid item xs={4}>
                <Title>
                  <LogoWrapper>
                    <Image src={Logo} />
                  </LogoWrapper>
                </Title>
              </Grid>
              <Grid item xs={4}>
                <Title>
                  links
                </Title>
              </Grid>
              <Grid item xs={4}>
                <Title>
                  help
                </Title>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <Column>
                  {
                    socials.map((social: Social) => (
                      <HighlightGrid container alignItems={'center'} sx={{ my: '1rem' }}>
                        {social.icon}
                        <Box sx={{ ml: '1rem' }}>
                          <Link href={social.href}>
                            <a>
                              {social.text}
                            </a>
                          </Link>
                        </Box>
                      </HighlightGrid>
                    ))
                  }
                </Column>
              </Grid>
              <Grid item xs={4}>
                <Column>
                  {
                    pages.map(page => (
                      <LinkWrapper>
                        <Highlight>
                          <Link href={page.href}>
                            <a>
                              {page.name}
                            </a>
                          </Link>
                        </Highlight>
                      </LinkWrapper>
                    ))
                  }
                </Column>
              </Grid>
              <Grid item xs={4}>
                <Column>
                  {
                    helpPages.map(page => (
                      <LinkWrapper>
                        <Highlight>
                          <Link href={page.href}>
                            <a>
                              {page.name}
                            </a>
                          </Link>
                        </Highlight>
                      </LinkWrapper>
                    ))
                  }
                </Column>
              </Grid>
            </Grid>
          </InsideWrapper>
          <FooterText>
            ©Copyright. Designed And Developed By Chargefy
          </FooterText>
        </Container>
      </Wrapper>
    </footer>
  )
}