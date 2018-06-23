import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import appReducers from './reducers/index';

//khởi tạo một store chứa toàn bộ các reducers của dự án
const store = createStore(
    appReducers
);

ReactDOM.render(
        //khai báo provinder cấp store cho app
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root')
);
registerServiceWorker();
