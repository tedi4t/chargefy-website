import { useState } from 'react';
import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';

import { Wrapper, Line, Title, Content, RadioCategory, PriceSlider, ColorCheckbox } from './Sidebar.styles';

export default function() {
  const [value, setValue] = useState([30, 40]);
  const categories = ['category 1', 'category 2', 'category 3', 'category 4'];
  const priceMarks = [
    {
      value: 0,
      label: '₴130'
    },
    {
      value: 100,
      label: '₴980'
    },
  ]

  return (
    <Wrapper>
      <Title>
        Categories
      </Title>
      <Content>
        <RadioGroup aria-label="gender" name="customized-radios">
          <FormControlLabel value="female" control={<RadioCategory />} label="Female" />
          <FormControlLabel value="male" control={<RadioCategory />} label="Male" />
          <FormControlLabel value="other" control={<RadioCategory />} label="Other" />
        </RadioGroup>
      </Content>

      <Title>
        Price
      </Title>
      <Content>
        <PriceSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          value={value}
          marks={priceMarks}
          valueLabelFormat={(a) => `950`}
        />
      </Content>

      <Title>
        Color
      </Title>
      <Content>
        <FormGroup>
          <FormControlLabel control={<ColorCheckbox defaultChecked />} label="Label" />
          <FormControlLabel control={<ColorCheckbox />} label="Color" />
          <FormControlLabel control={<ColorCheckbox />} label="Something" />
          <FormControlLabel control={<ColorCheckbox />} label="Observer" />
        </FormGroup>
      </Content>
    </Wrapper>
  )
}