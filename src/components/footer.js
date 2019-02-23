import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
// import Title from './title.js';

import { Footer, Columns ,Container ,Content, Hero  } from 'react-bulma-components';

export default () => (
    <div>



  <Hero size="fullheight">
    <Hero.Head renderAs="header" />
    <Hero.Body />
    <Hero.Footer>
      <Footer>
        <Container>
          <Content style={{ textAlign: 'center' }}>
            <p>
              <strong>Code Mesh</strong> by <a href="http://jgthms.com">DamnAwesome Developers</a>. The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            </p>
            <br/>
          </Content>
        </Container>
    <div>

      <Columns>
        <Columns.Column size={3}>
            
        <h3 class="title is-3"> FOLLOW US ON</h3>
        <h3 class="subtitle is-3">Subtitle 3</h3>        
        <h3 class="subtitle is-3">Subtitle 3</h3>        
        <h3 class="subtitle is-3">Subtitle 3</h3>

        </Columns.Column>
        <Columns.Column size={5}>
        <h3 class="title is-3">OUR WEBSITE</h3>
        <p>hello <br/> hello <br/> hello <br/> 
            df</p>      
        {/* <h3 class="title is-3">Title 3</h3>
        <ol >
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>     */}
    </Columns.Column> 
        <Columns.Column size={4}>
          <h3 class="title is-3">cONTACT US</h3>
          <h3 class="subtitle is-3">Subtitle 3</h3>        
        <h3 class="subtitle is-3">Subtitle 3</h3>        
        <h3 class="subtitle is-3">Subtitle 3</h3>
        </Columns.Column>
      </Columns>

    </div>
  
      </Footer>
    </Hero.Footer>
  </Hero>
    </div>
)
