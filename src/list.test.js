import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('<List />', () => {
    it('renders without crashing', () => {
        const div= document.createElement('div');
        ReactDOM.render(<List />, div);
        
        ReactDOM.unmountComponentAtNode(div);
});
    it('renders UI as expected', () => {
        const tree= renderer.create(<List title='test' content='test two' />).toJSON();
        
        expect(tree).toMatchSnapshot(); 
    });
});