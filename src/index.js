import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Компонент BrowserRouter
// Командный центр управления маршрутизацией который скрывает в себе
// всю логику взаимодействия с историей браузера.Создает маршуртизатор
// и объект истории навигации, чтобы синхронизировать интерфейс с URL
// - адресом.Используя React контекст передает информацию о текущем
// состоянии истории навигации всем потомкам.Все что необходимо сделать,
// это обернуть компонентом BrowserRouter все приложение.