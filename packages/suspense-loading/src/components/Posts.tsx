import { Post } from '../lib/api/types';

interface Props {
  data: {
    read(): Post[];
  };
}

function Posts({ data }: Props) {
  const posts = data.read();

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          {post.id}. {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
