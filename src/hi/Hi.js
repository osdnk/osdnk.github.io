import * as React from 'react';
import Page from '../PageWrapper/Page';
import content from '../content/pages/hi';
import './Hi.css';
import {Link} from "react-router-dom";
import socials from "../content/socials";

export default () =>
  <Page>
    <div>
      {content.map((c, i) =>
      <p key={`hi${i}`}> {c}</p>
      )}
      <p>
        If you are working with computers or phones you may want to hire me and to save your time, {" "}
        <a href='https://github.com/osdnk/osdnk.github.io/raw/develop/public/CV-prof.pdf'>
          here
        </a>
        {" "}is my resume. You can skip the last pages, where I'm talking about my universities. Probably you do not care.
      </p>
      <p>
        However, if you want to meet my thoughts you can go <Link to='/arts'>here</Link> and read my short personal essay. Maybe I will add some more content later.
      </p>
      <p>
        You can also find me on some socials, but please, just be nice and respectful.
        If you want to be a friend of mine, use Facebook.
        If you want to hire me, do not use Facebook. If you want to talk about coding, use Twitter.
        Sometimes I am not answering immediately, but if you are just gentle be sure I will be back to you.
        I am often not reading notifications on GitHub regularly and I am sorry.

      </p>
      <div id="social-row">
        {socials.map((i, ind) =>
          <a href={i.link} key={`sm${ind}`} id="soc">
            <img src={i.logo} className="Header-socialLink" alt={i.alt}/>
          </a>
        )}
      </div>

      <p>
        Thanks for this small trip. Hope to see you someday in a real world. Always mind that at the end of the day on the other side of screens all we are humans at last.
      </p>

      {/*<IG/>*/}
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
      <div className="Hi-igWrapper">
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
