import BoardChild from '../../components/BoardChild';
import React, { Props, useCallback, useState, VFC } from 'react';
import { BoardInputContainer, BoardInputModal, ModalFooter, ModalHeader } from './styles';
import useInput from '../../hooks/useInput';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { PrimaryBtn, ErrorBtn, ModalForm } from 'common/styles';
import useSWR from 'swr';
import { get, getWithAuth, post } from '../../utils/axiosUtil';
import { API_GET_BOARD, API_GET_USER, API_POST_BOARD } from 'const/api';
import { Redirect } from 'react-router-dom';

const Board = () => {
  const { data: userInfo, error, revalidate, mutate } = useSWR(API_GET_USER, getWithAuth);
  const [boardInputToggle, setBoardInputToggle] = useState(false);
  const [content, onChangeContent, setContent] = useInput('');
  const [title, onChangeTitle, setTitle] = useInput('');
  const {
    data: boards,
    error: boardError,
    revalidate: boardRevalidate,
  } = useSWR(API_GET_BOARD, get, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60 * 1000,
  });

  const onClickBoardInputToggle = useCallback(() => {
    setBoardInputToggle(!boardInputToggle);
  }, [boardInputToggle]);

  const onSubmitBoard = useCallback(
    (e) => {
      e.preventDefault();
      const param = {
        author: userInfo.nickName,
        title: title,
        content: content,
      };
      post(API_POST_BOARD, param).then((response) => {
        setBoardInputToggle(false);
        setTitle('');
        setContent('');
        boardRevalidate();
      });
    },
    [content, title],
  );
  if (!userInfo) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      {boardInputToggle && (
        <ModalForm onSubmit={onSubmitBoard}>
          <BoardInputModal>
            <ModalHeader>
              <span>게시글 쓰기</span>
              <AiOutlineCloseCircle />
            </ModalHeader>
            <input type="text" id="title" name="title" placeholder="제목" autoComplete="off" value={title} onChange={onChangeTitle} />
            <textarea
              id="textArea"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <ModalFooter>
              <PrimaryBtn>등록</PrimaryBtn>
              <ErrorBtn onClick={onClickBoardInputToggle}>취소</ErrorBtn>
            </ModalFooter>
          </BoardInputModal>
        </ModalForm>
      )}

      <BoardInputContainer>
        <PrimaryBtn onClick={onClickBoardInputToggle}>글쓰기</PrimaryBtn>
      </BoardInputContainer>
      {boards?.map((b: any) => (
        <BoardChild
          key={b.id}
          id={b.id}
          title={b.title}
          author={b.author}
          body={b.content}
          totalComments={b.totalComments}
          createdAt={b.createdAt}
        />
      ))}
    </div>
  );
};

export default Board;
