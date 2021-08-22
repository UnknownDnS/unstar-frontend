import React, { useCallback, useState, VFC } from 'react';
import { BoardChildBody, BoardChildContainer, BoardChildFooter, BoardChildHeader, CommentsWrapper } from './styles';
import Comment from 'components/Comment';
import useInput from 'hooks/useInput';
import { Button, Input } from 'common/styles';

interface Props {
  title: string;
  author: string;
  body: string;
  totalComments: number;
  createdAt: string;
}

const BoardChild: VFC<Props> = ({ title, author, body, totalComments, createdAt }) => {
  const [commentToggle, setCommentToggle] = useState(false);
  const [comment, onChangeComment, setComment] = useInput('');
  const testComments = [
    { author: 'sub1', body: 'hello!', createdAt: '2021.08.17' },
    { author: 'sub2', body: 'hello!!', createdAt: '2021.08.16' },
    { author: 'sub3', body: 'hello!!!', createdAt: '2021.08.15' },
  ];

  const onClickCommentContainerToggle = useCallback(() => {
    setCommentToggle(!commentToggle);
  }, [commentToggle]);

  const onSubmitComment = useCallback(
    (e) => {
      e.preventDefault();
      console.log(comment);
      setComment('');
    },
    [comment],
  );

  return (
    <BoardChildContainer>
      <BoardChildHeader>
        <div>{title}</div>
        <div>{author}</div>
      </BoardChildHeader>
      <BoardChildBody>{body}</BoardChildBody>
      <BoardChildFooter>
        <Button onClick={onClickCommentContainerToggle}>댓글 ({totalComments}) 개</Button>
        <p>작성일 : {createdAt}</p>
      </BoardChildFooter>
      {commentToggle && (
        <CommentsWrapper>
          {testComments.map((t, index) => (
            <Comment author={t.author} body={t.body} createdAt={t.createdAt} key={index} />
          ))}

          <form onSubmit={onSubmitComment}>
            <Input
              type="text"
              id="comment"
              name="comment"
              placeholder="댓글을 입력하세요."
              autoComplete="off"
              value={comment}
              onChange={onChangeComment}
            />
            <Button style={{ width: '100px', margin: '15px auto' }}>등록</Button>
          </form>
        </CommentsWrapper>
      )}
    </BoardChildContainer>
  );
};

export default BoardChild;
