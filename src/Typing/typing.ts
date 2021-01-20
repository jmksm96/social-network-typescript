export type MessagesType = {
    id: number
    message: string
  };
  export type DialogsType = {
    id: number
    name: string
  };
  export type PostsType = {
    id: number;
    message: string
    likesCount: number
  };
  export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
  };
  export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
  };
  export type RootStateType = {
    rootType: stateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newPostText: string ) => void
  };
  
  export type stateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
  }



  export type StoreType = {
    _state: stateType
    updateNewPostText: (newPostText: string) => void
    addPost: (postMessage: string) => void
    _callSubscriber: (state: stateType) => void
    subscribe: (observer: (state: stateType) => void) => void
    getState: () => stateType
  }