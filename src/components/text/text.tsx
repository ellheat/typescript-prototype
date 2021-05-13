import React, { FC } from 'react';

import { Container } from './text.styles';

export const Text: FC = ({ children }) => (
  <Container>{children}</Container>
)
