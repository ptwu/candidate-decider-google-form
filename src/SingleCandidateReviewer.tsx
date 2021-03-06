import React, { ReactElement, ChangeEvent } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Rating } from './types';
import { ratingsText, ratingsColors } from './ratings-util';

type Props = {
  readonly rating: Rating | null;
  readonly onRatingChange: (rating: Rating | null) => void;
};

export default ({ rating, onRatingChange }: Props): ReactElement => {
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // eslint-disable-next-line prefer-destructuring
    const value = event.currentTarget.value;
    if (value === '') {
      onRatingChange(null);
    } else {
      onRatingChange(parseInt(value, 10) as Rating);
    }
  };
  return (
    <>
      <FormControl component="fieldset">
        <RadioGroup row value={rating ?? ''} onChange={onChange}>
          {ratingsText.map((text, id) => (
            <FormControlLabel
              key={text}
              value={id + 1}
              control={<Radio style={{ color: ratingsColors[id] }} />}
              label={text}
              labelPlacement="top"
            />
          ))}
          <FormControlLabel
            value=""
            control={<Radio color="primary" />}
            label="Undecided"
            labelPlacement="top"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};
