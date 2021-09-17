import React, { useCallback, useState, VFC } from 'react';
import { BoardChildBody, BoardChildContainer, BoardChildFooter, BoardChildHeader, CommentsWrapper } from './styles';
import Comment from 'components/Comment';
import useInput from 'hooks/useInput';
import { Button, Input } from 'common/styles';
import useSWR from 'swr';
import { API_GET_BOARD, API_POST_BOARD, API_POST_COMMENT } from '../../const/api';
import { get, post } from '../../utils/axiosUtil';

interface Props {
  id: number;
  title: string;
  author: string;
  body: string;
  totalComments: number;
  createdAt: string;
}

const BoardChild: VFC<Props> = ({ id, title, author, body, totalComments, createdAt }) => {
  const [commentToggle, setCommentToggle] = useState(false);
  const [content, onChangeContent, setContent] = useInput('');
  const {
    data: comments,
    error: commentError,
    revalidate: commentRevalidate,
  } = useSWR(API_GET_BOARD + '/' + id + '/comment', get, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60 * 1000,
  });

  const onClickCommentContainerToggle = useCallback(() => {
    setCommentToggle(!commentToggle);
    commentRevalidate();
  }, [commentToggle]);

  const onSubmitComment = useCallback(
    (e) => {
      e.preventDefault();
      console.log(content);
      const param = {
        boardId: id,
        author: author,
        content: content,
      };
      post(API_POST_COMMENT, param).then((response) => {
        setContent('');
        commentRevalidate();
        setContent('');
      });
    },
    [content],
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
          {comments?.map((c: any) => (
            <Comment key={c.id} author={c.author} body={c.content} createdAt={c.createdAt} />
          ))}

          <form onSubmit={onSubmitComment}>
            <Input
              type="text"
              id="comment"
              name="comment"
              placeholder="댓글을 입력하세요."
              autoComplete="off"
              value={content}
              onChange={onChangeContent}
            />
            <Button style={{ width: '100px', margin: '15px auto' }}>등록</Button>
          </form>
        </CommentsWrapper>
      )}
    </BoardChildContainer>
  );
};

export default BoardChild;
