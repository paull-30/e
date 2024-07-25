import React from 'react';

import { Tab } from '@headlessui/react';
import { type Image as ImageType } from '@/lib/types';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab className='relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white'>
      {({ selected }) => (
        <div>
          <span className='absolute inset-0 h-full w-full aspect-square overflow-hidden rounded-md'>
            <Image
              fill
              src={image.url}
              alt={image.id}
              className='object-cover object-center'
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent'
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
