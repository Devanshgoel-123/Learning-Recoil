import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({ //Uses asyncronous queries, for Atom Family use Selector Family
    key: "todoSelectorFamily",
    get: (id) => async ({get}) => {
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);  //explanation of this is given below
      return res.data.todo;
    },
  })
});
// export const todosAtomFamily = atomFamily({
//   key: 'todosAtomFamily',
//   default: selectorFamily({ //Uses asyncronous queries, for Atom Family use Selector Family
//     key: "todoSelectorFamily",
//     get: function (id){
 //           return async ({get}) => {
    //       const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
    //       return res.data.todo;
    //     }
//      } 
//   })
// });