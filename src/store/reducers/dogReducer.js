import { uuid } from "uuidv4";
import { ADD_DOG, EDIT_DOG, REMOVE_DOG } from "../actionTypes";

const initialState = {
  myDogs: [
    {
      uuid: "1",
      name: "Zippy",
      age: 1,
      breed: "Maltese",
      image: require(`../../../assets/dogs/1.jpg`)
    },
    {
      uuid: "2",
      name: "Dobby",
      age: 1,
      breed: "Dachshund",
      image: require(`../../../assets/dogs/2.jpg`)
    },
    {
      uuid: "3",
      name: "Hunter",
      age: 2,
      breed: "Boston Terrier",
      image: require(`../../../assets/dogs/3.jpg`)
    },
    {
      uuid: "4",
      name: "Nacho",
      age: 4,
      breed: "Pug",
      image: require(`../../../assets/dogs/4.jpg`)
    },
    {
      uuid: "5",
      name: "Bean",
      age: 0.5,
      breed: "Golden Retriever",
      image: require(`../../../assets/dogs/5.jpg`)
    },
    {
      uuid: "6",
      name: "Pickles",
      age: 5,
      breed: "Jack Russle",
      image: require(`../../../assets/dogs/6.jpg`)
    },
    {
      uuid: "7",
      name: "Chico",
      age: 4,
      breed: "Pug",
      image: require(`../../../assets/dogs/7.jpg`)
    },
    {
      uuid: "8",
      name: "Max",
      age: 2,
      breed: "Dachshund",
      image: require(`../../../assets/dogs/8.jpg`)
    },
    {
      uuid: "9",
      name: "Nugget",
      age: 1,
      breed: "Golden Retriever",
      image: require(`../../../assets/dogs/9.jpg`)
    },
    {
      uuid: "10",
      name: "Grumpy",
      age: 5,
      breed: "Beagle",
      image: require(`../../../assets/dogs/10.jpg`)
    }
  ]
};

const dogsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_DOG:
      return {
        myDogs: [
          ...state.myDogs,
          {
            uuid: uuid(),
            ...payload
          }
        ]
      };

    case EDIT_DOG:
      /* 
        I have decided to presist the order in which the dogs
        are stored in the array.
      */
      const modifiedDogs = state.myDogs.map(dog => {
        if (dog.uuid === payload.uuid) {
          dog = { ...dog, ...payload };
        }
        return dog;
      });
      return {
        myDogs: modifiedDogs
      };

    case REMOVE_DOG:
      return {
        myDogs: state.myDogs.filter(dog => dog.uuid !== payload)
      };

    default:
      return { ...state };
  }
};

export default dogsReducer;
