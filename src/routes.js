import { LOGIN_ROTE,CHAT_ROTE } from "./Util/Const";
import Login from './components/Login'
import Chat from './components/Chat'
export const publicRoute=[
    {
        path:LOGIN_ROTE,
        Component:Login
    }
]
export const privateRoute=[
    {
        path:CHAT_ROTE,
        Component:Chat
    }
]