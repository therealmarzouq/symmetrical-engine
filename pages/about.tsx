import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
// import avatar from 'public/avatar.jpg';
// import avatarBW from 'public/avatar-bw.jpg';

export default function About() {
  return (
    <Container title="About – Marzouq">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter:{' '}
              <a href="https://twitter.com/therealmarzouq">@therealmarzouq</a>
            </li>
            <li>
              GitHub:{' '}
              <a href="https://github.com/therealmarzouq">@therealmarzouq</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://therealmarzouq.io">
                <a>https://therealmarzouq.io</a>
              </Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/therealmarzouq/">
                https://www.linkedin.com/in/therealmarzouq
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <p>
            Well hello there! My name is Marzouq. I'm a Software Engineer and
            Creative Human from Lagos, Nigeria.{' '}
          </p>
          <p>
            I'm also a Co-founder and Software Engineer at{' '}
            <a href="https://movu.africa/">Movu.africa</a>, building solutions
            for African creatives to sell their content from everywhere around
            the globe.
          </p>
          <p>
            I also do have fun by creating and engaging in a number of open
            source contributions in my free time.
          </p>
          <p>
            I like creating great products with great people. I am very
            passionate about converting ideas from paper and the mind into
            strategically sound usable products. As a stakeholder, I take
            frequent pauses throughout the day to deliberate on my actions to
            stay resourceful and steer clear of roadblocks. As with most other
            things, small steps upwards make a compound difference in how
            excellent products are built.
          </p>
          <p>
            I love assisting and mentoring others in their journey towards
            self-discovery and I am constantly seeking out opportunities to
            adopt new mentors for my own personal learning—which is the best way
            to cut your time to success by a competitively significant amount. I
            tend to overcommunicate the obvious as I found that it is one trait
            shared by most great mentors.
          </p>
          {/* <h2>Headshots</h2> */}
          {/* <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Marzouq headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar-bw.jpg">
              <Image
                alt="Marzouq headshot"
                width={400}
                quality={100}
                src={avatarBW}
                className="rounded-md"
              />
            </a>
          </div> */}
        </div>
      </div>
    </Container>
  );
}
