import styled from '@emotion/styled'
import {
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export const useInfiniteQueries = <T,>(
  queryKey: QueryKey,
  apiFunction: (payload: any) => Promise<InfiniteResponse<T>>,
  ListItem: (props: any) => JSX.Element,
  options?: UseInfiniteQueryOptions<
    InfiniteResponse<T>,
    any,
    any,
    any,
    QueryKey
  >,
) => {
  const [ref, inView] = useInView()
  const { data, fetchNextPage } = useInfiniteQuery<
    InfiniteResponse<T>,
    unknown
  >(queryKey, apiFunction, {
    getNextPageParam: (lastPage) => lastPage.page + 1,
    ...options,
  })

  useEffect(() => {
    if (!data) return

    const lastPageIdx = data.pages.length - 1
    const hasNext = data.pages[lastPageIdx].hasNext
    if (hasNext && inView) fetchNextPage()
  }, [inView])

  const listElement = data?.pages.map(({ content }) =>
    content.map((item, idx) => (
      <ListItem {...item} className={`item-${idx}`} key={`item-${idx}`} />
    )),
  )
  const observer = (
    <div
      className="observer"
      ref={ref}
      style={{ width: '100%', height: '2px' }}
    />
  )

  const isEmpty = data?.pages[0].content.length === 1

  return {
    infiniteListElement: (
      <ListElementContainer>
        {listElement}
        {observer}
      </ListElementContainer>
    ),
    isEmpty,
  }
}

const ListElementContainer = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes movetoY {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0px);
    }
  }
  &:nth-child(1) {
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: movetoY, fadeIn;
    animation-duration: 0.8s, 0.5s;
    animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1),
      cubic-bezier(0.61, 1, 0.88, 1);
    animation-delay: 0.8s;
  }
  &:nth-child(2) {
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: movetoY, fadeIn;
    animation-duration: 0.8s, 0.4s;
    animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1),
      cubic-bezier(0.61, 1, 0.88, 1);
    animation-delay: 1.2s;
  }
  &:nth-child(3) {
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: movetoY, fadeIn;
    animation-duration: 0.8s, 0.4s;
    animation-timing-function: cubic-bezier(0.37, 0, 0.63, 1),
      cubic-bezier(0.65, 0, 0.35, 1);
    animation-delay: 1.6s;
  }
`

export interface InfiniteResponse<T> {
  content: T[]
  page: number
  size: number
  hasNext: boolean
}

export interface InfiniteRequest {
  questionId: number
  pageParam?: number
  size?: number
  sort?: 'asc' | 'desc'
}
