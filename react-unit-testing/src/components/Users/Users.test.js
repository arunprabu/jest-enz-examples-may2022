import { render, screen, waitFor } from "@testing-library/react";
import Users from "./Users";
import * as api from '../../api/users';

jest.mock('../../api/users');

describe('Users', () => { 
  // as the following is gonna get data after sometime, it should have async await.
  // testing upon api request -mocking successful api call
  it('should render comp properly with api data', async () => {
    api.fetchUsersAPI.mockResolvedValue([{
        id: 1,
        name: "Leanne Graham",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442"
      }]
    )
    render(<Users />)
    await waitFor(() => {
      screen.getByText('Leanne Graham')
    })
  });

});