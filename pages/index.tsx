import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import Subscribe from '../components/Subscribe';
import VideoCard from '../components/VideoCard';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-32   pb-24">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Marzouq Mohammed
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Frontend Engineer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Hi there, My name is Marzouq. I'm a Software enginner and a
              creative from Lagos, I'm a sucker for process Automations and
              making things Interactive.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Marzouq Mohammed"
              height={176}
              width={176}
              src="/avatar.jpg"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>

        {/* <Subscribe /> */}
      </div>
    </Container>
  );
}
