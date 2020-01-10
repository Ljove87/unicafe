import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Note from './Note'

test('renders content', () => {
    const note = {
      content: 'Component testing is done with react-testing-library',
      important: true
    }
  
    const component = render(
      <Note note={note} />
    )

    const li = component.container.querySelector('li')
  
    console.log(prettyDOM(li))
  })