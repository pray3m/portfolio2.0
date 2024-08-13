"use client";

import Image from "@/common/components/elements/Image";
import { BlogItemProps } from "@/common/utils/types";
import Icon from "supercons";
import Link from "next/link";
import { FC } from "react";
import { useWindowSize } from "usehooks-ts";

const BlogCard: FC<BlogItemProps> = ({
  title,
  image,
  views,
  date,
  content,
  slug,
}) => {
  const { width } = useWindowSize();
  const isMobile = width < 468;
  const trimmedContent =
    content.slice(0, 100) + (content.length > 100 ? "..." : "");

  return (
    <Link href={`blog/${slug}`}>
      <div className="flex items-center flex-col lg:flex-row gap-6 lg:p-5 border border-neutral-300 dark:bg-neutral-700 rounded-xl cursor-pointer transition-all duration-300 hover:scale-[103%]  hover:shadow-sm ">
        <div className="w-fit">
          <Image
            src={image}
            width={isMobile ? 400 : 160}
            height={200}
            alt={title}
            className="rounded-t-xl lg:rounded-xl"
          />
        </div>
        <div className="flex flex-col w-full lg:w-4/5 flex-grow space-y-2 px-5 lg:p-0 mb-5 lg:mb-0 ">
          <h3 className="lg:text-[17px] font-medium hover:text-sky-800 dark:hover:to-sky-400 ">
            {title}
          </h3>
          <div className="flex gap-5">
            <div className="flex gap-1 items-center dark:text-neutral-400">
              <Icon glyph="clock" size={16} />
              <span className="text-xs">{date}</span>
            </div>
            <div className="flex gap-1 items-center dark:text-neutral-400">
              <Icon glyph="view" size={16} />
              <span className="text-xs">{views}</span>
              <span className="text-xs">views</span>
            </div>
          </div>
          <p className="hidden lg:block leading-relaxed text-sm dark:text-neutral-400">
            {trimmedContent}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;