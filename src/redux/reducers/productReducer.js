const INITIAL_STATE = {
  date: "2011-10-05T14:48:00.000Z",
  items: [
    {
      id: '123',
      title: 'buckwheat',
      ccal: 400,
      weight: 425,
      groupBloodNotAllowed: {
        '1': true,
        '2': false,
        '3': true,
        '4': false
      }
    },
    {
      id: '453',
      title: 'salad',
      ccal: 250,
      weight: 300,
      groupBloodNotAllowed: {
        '1': true,
        '2': false,
        '3': true,
        '4': false
      }
    },
    {
      id: '43',
      title: 'juice',
      ccal: 150,
      weight: 250,
      groupBloodNotAllowed: {
        '1': true,
        '2': false,
        '3': true,
        '4': false
      }
    },
  ]
}


const productReducer = (state = INITIAL_STATE, { type, payload }) => {
  return state;
};
export default productReducer;
