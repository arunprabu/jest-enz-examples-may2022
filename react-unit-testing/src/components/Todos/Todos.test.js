import { render, screen } from "@testing-library/react"
import Todos from "./Todos"

describe('Todos', () => { 
  it('fetches todos via api call', async() => {
    render(<Todos />);
    expect(await screen.findByText('delectus aut autem')).toBeInTheDocument();
  })
})