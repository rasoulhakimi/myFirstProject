import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Enzyme,{mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FC from './Component/Fc'  
Enzyme.configure({
  adapter :new adapter
})
const w=mount(<Fc/>)
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
it('this is a test',()=>{
  expect(w.find('div').length)
})