import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section  } from 'react-bulma-components';

export default () => (
    <div>
<Section size="small">
<div class="tile is-ancestor">
  <div class="tile is-12">
      <div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <p class="title">what ever technology you want</p>
          <p class="subtitle">we develope it by our love<br/> and use our amazing driven minds</p>
          {/* <p class="subtitle "> </p> */}
          <p class="is-3">making awesome products for world</p>
          <p class="subtitle">powered by us and driven by tech</p>
        </article>
      </div>

  </div>
</div>

</Section>
    </div>
)
