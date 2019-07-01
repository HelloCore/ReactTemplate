---
to: src/components/<%= h.changeCase.camel(group) %>/<%= h.changeCase.pascal(name) %>/__stories__/<%= h.changeCase.pascal(name) %>.story.tsx
---
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import <%= h.changeCase.pascal(name) %> from '../<%= h.changeCase.pascal(name) %>';

const Container = styled.div``;

storiesOf('<%= h.changeCase.camel(group)  %>/<%= h.changeCase.pascal(name) %>', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('default', () => <<%= h.changeCase.pascal(name) %> />);
