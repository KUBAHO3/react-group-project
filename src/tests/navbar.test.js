import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from '../components/Navbar';

Enzyme.configure({ adapter: new Adapter() });

describe('Navbar component', () => {
  it('renders without crashing', () => {
    shallow(<Navbar />);
  });

  it('contains three navigation links', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('NavLink')).toHaveLength(3);
  });

  it('contains the correct text for each navigation link', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('NavLink').at(0).text()).toEqual('Rockets');
    expect(wrapper.find('NavLink').at(1).text()).toEqual('Missions');
    expect(wrapper.find('NavLink').at(2).text()).toEqual('Profile');
  });
});
