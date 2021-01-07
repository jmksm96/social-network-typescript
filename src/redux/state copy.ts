export type MessagesType = {
  id: number;
  message: string;
};
export type DialogsType = {
  id: number;
  name: string;
};
export type PostsType = {
  id: number;
  message: string;
  likesCount: number;
};
export type ProfilePageType = {
  posts: Array<PostsType>;
};
export type DialogPageType = {
  dialogs: Array<DialogsType>;
  messages: Array<MessagesType>;
};
export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
  addPost: (postMessage: string) => void
};

export type stateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
}

let state: stateType = {
  profilePage: {
    posts: [
      { id: 1, message: "Hey one", likesCount: 1 },
      { id: 2, message: "Message two", likesCount: 12 },
      { id: 3, message: "Message three", likesCount: 5 },
      { id: 4, message: "Message four", likesCount: 10 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Max" },
      { id: 2, name: "Slava" },
      { id: 3, name: "Dimon" },
      { id: 4, name: "Danila" },
      { id: 5, name: "Edik" },
      { id: 6, name: "Mark" },
    ],
    messages: [
      { id: 1, message: "React" },
      { id: 2, message: "Typescript" },
      { id: 3, message: "Angular" },
      { id: 4, message: "Node.js" },
      { id: 5, message: "Javascript" },
      { id: 6, message: "Vue.js" },
    ],
  },
};
export const addPost = (postMessage: string) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
};

export default state;
