import Container from 'components/Container';
import Tweet from 'components/Tweet';
import { getTweets } from 'lib/twitter';

export default function Tweets({ tweets }) {
  return (
    <Container
      title="Tweets – Marzouq Mohammed"
      description="A collection of tweets that inspire me, make me laugh, and make me think."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Tweets
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-7">
          This is a collection of tweets that I've found interesting. I often
          use Twitter, so I wanted a site where I could openly share what
          inspires me, makes me laugh, and makes me think.
        </p>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const tweets = await getTweets([
    '1381258966475345922',
    '1438964546732019720',
    '1524855054632730634',
    '1488475390209310721',
    '1564698837117198341',
    '1562802001678704641',
    '1556646315639160832',
    '1341962177272537089',
    '1561645124379185153',
    '1513198829100683266',
    '1496252264171941888',
    '1561078525280542721',
    '1545866324441800704',
    '1378505455127912450',
    '1516729403853705216',
    '1562759336996511745',
    '1564685375884464129',
    '1492227328386154509'
  ]);
  console.log(tweets, 'twerets');

  return { props: { tweets } };
}
