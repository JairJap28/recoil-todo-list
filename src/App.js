import React from "react";
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/material-ui/Theme';
import TodoList from './components/TodoList';
import "./style.css";

export default function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <TodoList />
      </ThemeProvider>
    </RecoilRoot>
  );
}
