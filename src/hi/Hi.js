import * as React from 'react';
import Page from '../PageWrapper/Page';
import content from '../content/pages/hi'

export default () =>
  <Page>
    <div>
      {content.map((c, i) =>
      <p> {c}</p>
      )}
    </div>
  </Page>
