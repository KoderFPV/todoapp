import React from 'react';
import { Header } from './components/header/header';
import { Notifications } from './components/notifications/Notifications';
import { TodoApp } from './components/todoApp/todoApp';
import { requestNotificationsPermission } from './services/notifications';

requestNotificationsPermission();

const App = () => <>
    <Header />
    <Notifications/> 
    <TodoApp />
</>

export default App;
