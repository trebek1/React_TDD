import React from 'react'; 
import { shallow, mount } from 'enzyme'; 
import { Loot } from './Loot'; 

describe("Loot ", () => {
  const mockFetchBitcoin = jest.fn();
  const props = {balance: 10, bitcoin: {}};
  let loot = shallow(<Loot {...props} />);

  it("renders properly ", () => {
    expect(loot).toMatchSnapshot(); 
  });

  describe("when mounted ", () => {
    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin;
      loot = mount(<Loot {...props} />);
    });

    it('dispatches teh `fetchBitcoin` method it recieves from props ', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    })
  });
  // mount renders children and lifecycle methods 

});