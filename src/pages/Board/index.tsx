import BoardChild from '../../components/BoardChild';
import React, { Props, useCallback, useState, VFC } from 'react';
import { BoardInputContainer, BoardInputModal, ModalFooter, ModalHeader } from './styles';
import useInput from '../../hooks/useInput';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { PrimaryBtn, ErrorBtn, ModalForm } from 'common/styles';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import { get, post } from '../../utils/axiosUtil';
import { API_GET_BOARD, API_POST_BOARD } from 'const/api';

const Board = () => {
  const [boardInputToggle, setBoardInputToggle] = useState(false);
  const [content, onChangeContent, setContent] = useInput('');
  const [title, onChangeTitle, setTitle] = useInput('');
  const { data, error, revalidate, mutate } = useSWR(API_GET_BOARD, get, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  console.log(data);
  const boards = data?.response;

  const onClickBoardInputToggle = useCallback(() => {
    setBoardInputToggle(!boardInputToggle);
  }, [boardInputToggle]);

  const onSubmitBoard = useCallback(
    (e) => {
      e.preventDefault();
      console.log(content);
      const param = {
        author: 'sub',
        title: title,
        content: content,
      };
      post(API_POST_BOARD, param).then((response) => {
        setBoardInputToggle(false);
        setTitle('');
        setContent('');
        revalidate();
      });
    },
    [content, title],
  );

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
      {boards?.map((e: any) => (
        <BoardChild key={e.id} title={e.title} author={e.author} body={e.content} totalComments={e.totalComments} createdAt={e.createdAt} />
      ))}
    </div>
  );
};

export default Board;
