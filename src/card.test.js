import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('<Card />', () => {
    it('renders without crashing', () => {
        const div= document.createElement('div');
        ReactDOM.render(<Card />, div);
        
        ReactDOM.unmountComponentAtNode(div);
});
    it('renders UI as expected', () => {
        const tree= renderer.create(<Card title='cats' content='dogs' />).toJSON();
        
        expect(tree).toMatchSnapshot(); 
    });
});