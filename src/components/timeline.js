import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default () => (

<div class="timeline is-centered">
  <header class="timeline-header">
    <span class="tag is-medium is-primary">Start</span>
  </header>
  <div class="timeline-item is-primary">
    <div class="timeline-marker is-primary"></div>
    <div class="timeline-content">
      <p class="heading">January 2016</p>
      <p>Timeline content - Can include any HTML element</p>
    </div>
  </div>
  <div class="timeline-item is-warning">
    <div class="timeline-marker is-warning is-image is-32x32">
      <img src="http://bulma.io/images/placeholders/32x32.png"/>
    </div>
    <div class="timeline-content">
      <p class="heading">February 2016</p>
      <p>Timeline content - Can include any HTML element</p>
    </div>
  </div>
  <header class="timeline-header">
    <span class="tag is-primary">2017</span>
  </header>
  <div class="timeline-item is-danger">
    <div class="timeline-marker is-danger is-icon">
      <i class="fa fa-flag"></i>
    </div>
    <div class="timeline-content">
      <p class="heading">March 2017</p>
      <p>Timeline content - Can include any HTML element</p>
    </div>
  </div>
  <header class="timeline-header">
    <span class="tag is-medium is-primary">End</span>
  </header>
</div>
)














