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
        <div className="flex flex-col-reverse sm:flex-row items-start select-none">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Marzouq Mohammed
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Software Engineer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16 leading-7">
              Hi there, My name is Marzouq. I'm a software enginner and a
              creative from Lagos, Nigeria and I'm a sucker for process
              automations and making things interactive.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <div className="h-[120px] w-[120px] relative">
              <Image
                alt="Marzouqs Avatar"
                layout="fill"
                objectFit="cover"
                src="/marzouq.jpeg"
                className="rounded-full filter grayscale"
              />
            </div>
          </div>
        </div>

        {/* <Subscribe /> */}
      </div>
    </Container>
  );
}
