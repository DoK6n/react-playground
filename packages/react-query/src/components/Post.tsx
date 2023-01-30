import { useQueryPosts } from '../hooks/useQueryPosts';
import { css } from '@emotion/react';

const blockStyle = css`
  display: flex;
  flex-direction: column;
`;

const boxStyle = css`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 6px;
  text-align: left;
  padding: 1rem;
  list-style-type: none;
  margin-left: 1rem;
  margin-right: 1rem;
`;

interface Props {
  userId: number;
}

function Post({ userId }: Props) {
  const { data } = useQueryPosts(userId);
  data && console.log('post =>', data);

  return (
    <div css={blockStyle}>
      {data?.map((post) => (
        <ul key={post.id} css={boxStyle}>
          <li>작성자: {userId}</li>
          <li>글 제목: {post.title}</li>
          <li>본문: {post.body}</li>
        </ul>
      ))}
    </div>
  );
}

export default Post;
