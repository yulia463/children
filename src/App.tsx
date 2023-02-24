import React, {useState} from 'react';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import {SuperTodolist} from "./components/SuperTodolist";





function App() {
    const tasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    return (
        <div>
            <SuperButton callback={()=>{}} color={"red"}>Red Super button</SuperButton>
            <SuperButton callback={()=>{}} color={'secondary'} >Without color Super button</SuperButton>
            <SuperButton callback={()=>{}} disabled >Rea Super button</SuperButton>

            <SuperTodolist tasks={tasks}>
                <SuperButton callback={()=>{}} color={"red"}>Red Super button</SuperButton>
                <SuperButton callback={()=>{}} color={'secondary'} >Without color Super button</SuperButton>
                <SuperButton callback={()=>{}} disabled >Rea Super button</SuperButton>
            </SuperTodolist>


            <SuperTodolist tasks={tasks}>
                <SuperButton callback={()=>{}} color={"red"}>Red Super button</SuperButton>
                <SuperButton callback={()=>{}} color={'secondary'} >Without color Super button</SuperButton>
             <div>Info</div>
             <div>Info</div>
             <div>Info</div>
             <div>Info</div>
             <div>Info</div>
             <div>Info</div>
             <div>Info</div>
            </SuperTodolist>

            <SuperTodolist tasks={tasks}>
                <div>Info</div>
                <div>Info</div>
                <div>Info</div>
                <div>Info</div>
                <div>Info</div>
                <div>Info</div>
                <div>Info</div>
            </SuperTodolist>


        </div>
    );
}



export default App;
