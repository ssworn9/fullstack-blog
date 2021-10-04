import React from 'react';
import { GetServerSidePropsResult, NextPage } from 'next';
import Head from 'next/head';
import { FullPostDTO, PostCtx } from '../../core/db/interfaces/post';
import { PageSection } from '../../components/layout/shared';
import { initialQuery } from '../../core/apollo/client';
import { GET_CERTAIN_POST } from '../../core/apollo/client';
import { PostLoader } from '../../components/postPage/PostLoader';

export interface PostPageProps {}
export interface FullPostData {
  post: FullPostDTO;
}
export interface FullPostQueryVars {
  slug: string | string[] | undefined;
}

export const getServerSideProps = async ({ params }: PostCtx): Promise<GetServerSidePropsResult<PostPageProps>> => {
  const { slug } = params;

  const { data, initialApolloState } = await initialQuery<FullPostData, FullPostQueryVars>({
    query: GET_CERTAIN_POST,
    variables: { slug },
  });

  if (!data.post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      initialApolloState,
    },
  };
};

const Post: NextPage<PostPageProps> = () => {
  return (
    <>
      <Head>
        <title>Blog post</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageSection>
        <PostLoader />
      </PageSection>
    </>
  );
};

export default Post;
