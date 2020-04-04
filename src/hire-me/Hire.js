import * as React from 'react';
import Page from '../PageWrapper/Page';
import content from '../content/pages/hi';
import './Hire.css';
import {Link} from "react-router-dom";
import socials from "../content/socials";
import melookingprod from "../assets/me-prof.jpg";


export default () =>
    <div className="WidePage">
      <img src={melookingprod} className="pictureCenter" alt="logo"/>
      <p>
        I'm looking for work.
      </p>
      <p style={{ 'font-style': 'italic' }}>
        TLDR: I'm open to freelancing in exciting and/or challenging projects. Feel free to contact me!
      </p>
      <p>
        I'm looking for work just like I've been looking for before and I'll probably be looking for a very long time.
      </p>
      <p>
        However, this does not necessarily mean that I am looking for a position in the classic sense of the word.
        If you read this and would like to potentially work with me one day,
        I think it's crucial that you understand my philosophy of working and developing software.
      </p>
      <p>
        For the last two years, I have been working at a software house agency.
        It was an incredibly exciting experience for me and the key values I gained were programming
        experience and knowledge that I didn't have before. The opportunity to work among extremely
        talented people was a wonderful opportunity for me to broaden my scope of competence and engage in
        thrilling projects, including those used by hundreds of thousands of other programmers. I am grateful for that.
      </p>
      <p>
        I have recently started a new phase in my life. I realized that
        I am able to work on advanced code, make difficult design decisions
        create working projects, but in fact, none of it was "mine" and I stopped
        feeling the emotional connection with the project. It seems to me that these words aren't very expressive,
        because the work of a programmer can be similar in many ways to the work of an artist whose work is, after all,
        not disconnected from the artist's feelings. What does it actually mean? Very good work can be created
        on order as a result of respecting the client's requirements and consistently following the
        established methodology. However, the best work becomes a manifestation of passion and
        emotional commitment, which cannot be reduced to following the guidelines without real
        fascination with the object of work.
      </p>
      <p>
        My work at the agency has been like that at times.
        I didn't do overtime, I didn't care about smaller crises after my working hours.
        I almost never sat after nights or weekends. I don't encourage you to do that unless
        it's because of your heart's need and true passion. But for me, writing code is not just a way
        to make the money that all programmers have in abundance anyway. After my hours I am still myself with
        my creative potential and often no idea what I can do. The blatantly proclaimed "work-life balance"
        does not necessarily have to be interpreted as shutting down a computer after eight hours of work,
        but as liberating the soul of an artist who becomes open to working as he or she wishes. Only then do
        the limitations cease to be true - the day becomes longer, the sleep becomes less important, and lack
        of knowledge is something that can be made up for on the move. I remember a few years ago I was sitting
        up at night finishing my projects in the student scientific group and how much I want this to happen today.
      </p>
      <p>
        I have a burning desire to work.
        Not necessarily a job because I already have one and it is relatively satisfying for me as a way of earning
        money and providing myself and my loved ones with a prosperous future. I am looking for something more.
        I have a passion for solving technical problems and creating products that are good for people as a form of
        service I can give to the world with the skills I have been given, and I have a strong desire to serve.
        From this perspective, I see the{' '}
        <a href="https://rainbow.me">
          Rainbow
        </a>
        {' '} and {' '}
        <a href="https://reactnavigation.org">
          React Navigation
        </a>
        {' '}work as extremely valuable to me
      </p>
      <p>
        So if you have a project that you value and need help with a scope that can match my skills,
        write to me. If you are looking for someone who will work on your product with passion and faith, I invite you.
        If you have a great open-source project whose potential you see, I also recommend myself.
        Money is not the most important thing here, although of course, I will not agree to volunteer or
        almost volunteer work if the project will be a source of income for someone - then it is exploitation.
        You can read my message as a freelance offer, but what I want to emphasize is that I'm not just looking for
        additional sources of funding, but additional spaces to fulfill myself as a programmer and creator.
        I'll be happy to take nights off because of your project, if only I'm in love with it.
      </p>

      <p>
        If you're interested about my experience{" "}
      <a href='https://github.com/osdnk/osdnk.github.io/raw/develop/public/CV-prof.pdf'>
        here
      </a>
        {" "} is my resume.
      </p>
      <div id="social-row" className="socials-hire">
        {socials.map((i, ind) =>
          <a href={i.link} key={`sm${ind}`} id="soc">
            <img src={i.logo} className="Header-socialLink" alt={i.alt}/>
          </a>
        )}
      </div>
    </div>


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
