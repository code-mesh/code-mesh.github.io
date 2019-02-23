import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container ,Heading  } from 'react-bulma-components';

export default () => (
    <div>
<Section size="medium">
<Container>
  <Heading>Section</Heading>
  <Heading subtitle>
    A simple container to divide your page into <strong>sections</strong>, like the one you are currently
    reading
  </Heading>
</Container>
</Section>
    </div>
)
