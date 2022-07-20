import { render } from '@testing-library/react';
import { Button } from './Button'

it('render a button primary', () => {
    render(<Button />)
  })

it('render a button children', () => {
    render(<Button>
        Hello World
    </Button>)
  })

it('render a button success solid', () => {
    render(<Button
        buttonStyleSolid="button--success--solid" >
    </Button>)
  })

it('render a button sizes large', () => {
    render(<Button
        buttonSize="button--large">
    </Button>)
  })