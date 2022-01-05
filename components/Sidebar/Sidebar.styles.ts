import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export const Wrapper = styled.div`
  position: relative;
  background: #efefef;
  padding: 2.5rem;
  height: 100%;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.5);
`;

export const Title = styled(Typography)`
  
`;

export const Content = styled.div`
  
`;

export const RadioCategory = styled(Radio)`
  &.Mui-checked {
    color: #e99c2e;
  }
`;

export const PriceSlider = styled(Slider)({
  color: '#e99c2e',
  height: 5,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 16,
    width: 16,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&.Mui-active': {
      width: 20,
      height: 20,
    },
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#e99c2e',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

export const ColorCheckbox = styled(Checkbox)`
  transition-duration: 0.2s;
  
  &.Mui-checked {
    color: #e99c2e;
  }
  
  &:hover {
    background: rgba(233, 156, 46, 0.07);
  }
`;

// export const WAccordion = styled(Accordion)`
//   padding: 0;
//   background: transparent;
//   box-shadow: none;
// `;
//
// export const WAccordionSummary = styled(AccordionSummary)`
//   padding-left: 0;
//   padding-right: 0;
// `;
//
// export const WAccordionDetails = styled(AccordionDetails)`
//   padding-left: 0;
//   padding-right: 0;
// `;