import profileReducer, {addPostAC, deletePostAC} from "./profile-reducer";
import {ProfilePageType, UserProfileType} from "../Typing/typing";

let state: ProfilePageType = {
    posts: [
        {id: 1, message: "Message one", likesCount: 1},
        {id: 2, message: "Message two", likesCount: 12},
        {id: 3, message: "Message three", likesCount: 5},
        {id: 4, message: "Message four", likesCount: 10},
    ],
    newPostText: "",
    profile: {} as UserProfileType,
    defaultUserId: 12063,
    status: ""
}

it('Length of new post should be incremented', () => {
//1 Исходные данные
    let action = addPostAC('add text')

//2 action
    let newState = profileReducer(state, action)

    //3. Проверяем результат

    expect(newState.posts.length).toBe(5)

})

it('Message of new post should be', () => {
//1 Исходные данные
    let action = addPostAC('add text')

//2 action
    let newState = profileReducer(state, action)

    //3. Проверяем результат

    expect(newState.posts[4].message).toBe('add text')
})


it('after deleting length of messages should be incremented', () => {
//1 Исходные данные
    let action = deletePostAC(1)

//2 action
    let newState = profileReducer(state, action)

    //3. Проверяем результат

    expect(newState.posts.length).toBe(3)

})

