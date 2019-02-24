import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Title from './title.js';

export default () => (
    <div>
<div class="columns is-desktop">
  <div class="column is-half">
  <container>
  <figure class="image is-square is-320x320">
  <img class="is-rounded" src="./homebg.jpg" alt="we are just awesome"/>

</figure>
  </container>
  </div>
  <div class="columns is-vcentered  is-half">
    <Title/>
  </div>

</div>
    </div>
)
