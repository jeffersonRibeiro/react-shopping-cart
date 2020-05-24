import React, { useState } from 'react';

import { Container, Label, Input, Checkmark } from './styles';

function Checkbox({ label }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <Label>
        <Input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <Checkmark>{label}</Checkmark>
      </Label>
    </Container>
  );
}

export default Checkbox;
