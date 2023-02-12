// import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import FilterList from '../components/prices/FilterList'
import Prices from '../components/prices/Prices'

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import { shallow, mount } from 'enzyme';

const mockStore = configureMockStore();
const initialState = {
   prices: {
      items: [],
      history: [],
   },
   filter: {
      filterBy: 'ALL',
   }
}
const store = mockStore(initialState)

describe('HomePage component', () => {
   const homePageTitle = 'Prices';

   it(`should render "${homePageTitle}" h1 title`, () => {
      const wrapper = shallow(<HomePage store={store} />);

      expect(wrapper.find("h1").text()).toEqual(homePageTitle);
   });

   it('should contain <FilterList /> and <Prices />', () => {
      const wrapper = mount(<Provider store={store}><HomePage /></Provider>);

      expect(wrapper.containsMatchingElement(<FilterList />)).toEqual(true);
      expect(wrapper.containsMatchingElement(<Prices />)).toEqual(true);
   });
});