import React from 'react';
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react';
import Todo from '../components/Todo';

const mockTodo = {
  id: 1,
  task: 'run tests',
  description: 'figure out how to test react components',
  done: false,
  date: '27/06/2021, 18:00',
};

describe('Todo component', () => {
  it('renders task correctly', () => {
    render(<Todo todo={mockTodo} />);
    expect(screen.getByText(mockTodo.task)).toBeInTheDocument();
  });

  it('renders description correctly', () => {
    render(<Todo todo={mockTodo} />);
    expect(screen.getByText(mockTodo.description)).toBeInTheDocument();
  });

  it('renders date correctly', () => {
    render(<Todo todo={mockTodo} />);
    expect(screen.getByText(mockTodo.date)).toBeInTheDocument();
  });
});