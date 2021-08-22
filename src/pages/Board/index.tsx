import BoardChild from '../../components/BoardChild';
import React, { Props, useCallback, useState, VFC } from 'react';
import { BoardInputContainer, BoardInputModal, ModalFooter, ModalHeader } from './styles';
import useInput from '../../hooks/useInput';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { PrimaryBtn, ErrorBtn, ModalForm } from 'common/styles';

const Board = () => {
  const test = [
    { title: '테스트 제목', author: 'sub1', body: '테스트테스트', totalComments: 3, createdAt: '2021.08.17' },
    { title: '테스트 제목', author: 'sub1', body: '테스트테스트', totalComments: 3, createdAt: '2021.08.17' },
    { title: '테스트 제목', author: 'sub1', body: '테스트테스트', totalComments: 3, createdAt: '2021.08.17' },
    { title: '테스트 제목2', author: 'sub2', body: '테스트테스트테스트테스트', totalComments: 4, createdAt: '2021.08.16' },
    { title: '테스트 제목3', author: 'sub3', body: '테스트테스트테스트테스트테스트테스트', totalComments: 5, createdAt: '2021.08.15' },
  ];

  const [boardInputToggle, setBoardInputToggle] = useState(false);
  const [boardText, onChangeBoardText, setBoardText] = useInput('');

  const onClickBoardInputToggle = useCallback(() => {
    setBoardInputToggle(!boardInputToggle);
  }, [boardInputToggle]);

  const onSubmitBoard = useCallback(
    (e) => {
      e.preventDefault();
      console.log(boardText);
    },
    [boardText],
  );

  const children = test.map((e, index) => (
    <BoardChild title={e.title} author={e.author} body={e.body} totalComments={e.totalComments} createdAt={e.createdAt} key={index} />
  ));
  return (
    <div>
      {boardInputToggle && (
        <ModalForm onSubmit={onSubmitBoard}>
          <BoardInputModal>
            <ModalHeader>
              <span>게시글 쓰기</span>
              <AiOutlineCloseCircle />
            </ModalHeader>
            <textarea
              id="textArea"
              value={boardText}
              onChange={(e) => {
                setBoardText(e.target.value);
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
      {children}
    </div>
  );
};

export default Board;
