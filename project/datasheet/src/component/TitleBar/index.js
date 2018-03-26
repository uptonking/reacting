import React from "../../react";
// import React from "react";

// import {Tab, TabList, Tabs, TabPanel} from "../Tab";

import globalStyle from '../../common/style/style';

class TitleBar extends React.Component {

    static defaultProps = {
        title: '当前文件名',
    };


    styling() {
        const styleThis = {
            width: '100%',
            height: 36,
            textAlign: 'center',
            verticalAlign: 'middle',
            backgroundColor: globalStyle.xlsSkinGreen,
            color: '#fff',
        };
        const styleTitleText = {
            lineHeight: '36px',
        };
        return {
            styleThis,
            styleTitleText,
        }
    }

    render() {

        const {
            title,
        } = this.props;

        const s = this.styling();

        return (
            <div style={s.styleThis}>
                <p style={s.styleTitleText}>{title}</p>
            </div>
        );
    }
}

export default TitleBar;
