import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({ //Let's You create multiple dynamic atoms;
  key: 'todosAtomFamily',
  default: id => {
    return TODOS.find(x => x.id === id)      //Creating an Atom Family and finding that specific toDo item;
  },                                         //Data ek js file mei waha se pura import kar liya and usme filter chala dia
});