---
to: src/components/<%= h.changeCase.camel(group)  %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---
import React from 'react';

interface Props {

}

// TODO: Dont forget to remove this line.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function <%= h.changeCase.pascal(name) %>(props: Props) {
  return (
    <div />
  );
};

export default <%= h.changeCase.pascal(name) %>;