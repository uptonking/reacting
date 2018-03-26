// import React from 'react';
import React from './react';

import RibbonMenu from './component/RibbonMenu';
import TitleBar from './component/TitleBar';
import CurrentTextarea from './component/CurrentTextarea';
import Workbook from './component/Workbook';

import 'font-awesome/css/font-awesome.css';
import 'bulma/css/bulma.css';

class App extends React.Component {

    render() {

        return (
            <div>
                <TitleBar title={'hello，你打开的文件名出现在这里'}/>
                <RibbonMenu/>
                <CurrentTextarea enableEdit={true}/>
                <Workbook/>
            </div>
        );
    }

}

export default App;
