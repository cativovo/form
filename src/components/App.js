import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Input from './Input';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  
  label > span {
    cursor: pointer;
  }
`;

const createQuestion = (label, options = { type: 'text', required: false }) => ({
  label,
  ...options,
});

const question1 = createQuestion('sample question', { required: true });
const question2 = createQuestion('this is not required');
const question3 = createQuestion('your email', { type: 'email', required: true });
const question4 = createQuestion('test 2');
const question5 = createQuestion('ooooo');
const question6 = createQuestion('yoooo');
const question7 = createQuestion('mooo');

const questions = [question1, question2, question3, question4, question5, question6, question7];

const FormGroup = styled.div`
  > * {
    margin: 20px;
  }
`;

const App = () => {
  const [page, setPage] = useState(1);
  const questionsPerPage = 2;
  const offset = (page - 1) * questionsPerPage + 1 - 1;

  const currentQuestions = questions.slice(offset, offset + questionsPerPage);
  const hasBack = page !== 1 || offset + 1 >= questions.length;
  const hasNext = page === 1 || offset + 1 < questions.length;

  return (
    <div className="App">
      <h1>form!</h1>
      <GlobalStyle />
      <FormGroup>
        {currentQuestions.map((question) => (
          <Input {...question} key={Math.random() + question.label} />
        ))}
      </FormGroup>
      {hasBack && (
        <button type="button" onClick={() => setPage(page - 1)}>
          back
        </button>
      )}
      {hasNext && (
        <button type="button" onClick={() => setPage(page + 1)}>
          next
        </button>
      )}
    </div>
  );
};

export default App;
