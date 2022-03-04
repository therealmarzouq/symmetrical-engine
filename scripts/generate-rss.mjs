import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '.contentlayer/data';

async function generate() {
  const feed = new RSS({
    title: 'Marzouq Mohammed-Ali',
    site_url: 'https://therealmarzouq.co',
    feed_url: 'https://therealmarzouq.co/feed.xml'
  });

  // allBlogs.map((post) => {
  //   feed.item({
  //     title: post.title,
  //     url: `https://therealmarzouq.co/blog/${post.slug}`,
  //     date: post.publishedAt,
  //     description: post.summary
  //   });
  // });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
