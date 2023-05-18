import React from 'react';
import { shallow } from 'enzyme';
import RocketCard from '../components/RocketCard';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('RocketCard component', () => {
  const mockProps = {
    id: '1',
    name: 'Falcon 9',
    description: 'A two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
    flickrImages: 'https://www.flickr.com/photos/spacex/8172705383/in/album-72157631870504441/',
    onClick: jest.fn(),
    reserved: true,
  };

  it('renders without crashing', () => {
    shallow(<RocketCard {...mockProps} />);
  });

  it('displays the rocket name and description', () => {
    const wrapper = shallow(<RocketCard {...mockProps} />);
    expect(wrapper.find('h4').text()).toEqual(mockProps.name);
  });

  it('displays a button to reserve or cancel reservation', () => {
    const wrapper = shallow(<RocketCard {...mockProps} />);
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    expect(button.text()).toEqual('Cancel Reservation');
  });

  it('displays a "Reserved" badge if rocket is reserved', () => {
    const wrapper = shallow(<RocketCard {...mockProps} />);
    const badge = wrapper.find('.bg-success');
    expect(badge).toHaveLength(1);
    expect(badge.text()).toEqual('Reserved');
  });

  it('calls onClick when button is clicked', () => {
    const wrapper = shallow(<RocketCard {...mockProps} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});