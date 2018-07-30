import * as React from 'react';
import Page from '../PageWrapper/Page';
import content from '../content/pages/hi'
import './Hi.css'

export default () =>
  <Page>
    <div>
      {content.map((c, i) =>
      <p key={`hi${i}`}> {c}</p>
      )}
      <IG/>
    </div>

  </Page>


class IG extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
    fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=302415850.5711244.252f482c937d408cb13cdfb859a572a5&count=12")
      .then(res => res.json())
      .then(x => x.data.map(i => i.images.low_resolution.url))
      .then(p => {
        this.photos = p;
        this.setState({
          loaded: true
        })
      })
  }
  render() {
    return (
      <div>
        {this.state.loaded &&
          this.photos.map(p =>
            <img src={p} className="Hi-igPhotos" alt="logo" key={p}/>
          )
        }
        <a href="https://www.instagram.com/settlerrr/">
          <p className="Hi-ig">
            See moar on Instagram...
          </p>
        </a>
      </div>
    )
  }
}