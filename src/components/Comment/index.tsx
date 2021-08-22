import React, { VFC } from 'react';
import { CommentAuthor, CommentContainer } from './styles';

interface Props {
  author: string;
  body: string;
  createdAt: string;
}
const Comment: VFC<Props> = ({ author, body, createdAt }) => {
  return (
    <CommentContainer>
      <div style={{ display: 'flex' }}>
        <CommentAuthor>{author}</CommentAuthor>
        <div>{createdAt}</div>
      </div>
      <p>{body}</p>
    </CommentContainer>
  );
};

export default Comment;
