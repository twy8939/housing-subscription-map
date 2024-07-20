"use client";

import ApplyHomeListItem from "@/app/_entities/applyhome-list-item";
import useApplyHomeInfo from "@/app/_hooks/useApplyHomeInfo";
import React, { useEffect, useRef, useState } from "react";
import Loading from "../loading";

export default function ApplyHomeList() {
  const ref = useRef<HTMLDivElement>(null);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useApplyHomeInfo();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const useObserver = ({
    target,
    rootMargin = "0px",
    threshold = 1.0,
    onIntersect,
  }: any) => {
    useEffect(() => {
      let observer: IntersectionObserver | undefined;

      if (target && target.current) {
        observer = new IntersectionObserver(onIntersect, {
          root: null,
          rootMargin,
          threshold,
        });

        observer.observe(target.current);
      }
      return () => observer && observer.disconnect();
    }, [target, rootMargin, threshold, onIntersect]);
  };

  const onIntersect = ([entry]: IntersectionObserverEntry[]) =>
    entry.isIntersecting && fetchNextPage();

  useObserver({
    target: ref,
    onIntersect,
  });

  if (!isClient) return <Loading />;

  return (
    <div className="flex-1 overflow-hidden overflow-y-auto border-t scrollbar-thin">
      <ul className="list-none">
        {data?.pages.map((page) =>
          page.data?.map((item: IApplyHomeItem) => {
            return <ApplyHomeListItem key={item.HOUSE_MANAGE_NO} item={item} />;
          })
        )}
      </ul>
      {hasNextPage && (
        <div ref={ref} className="py-2">
          <Loading />
        </div>
      )}
    </div>
  );
}
