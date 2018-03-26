import React from "../../react";
// import React from "react";


import globalStyle from '../../common/style/style';
import InsertFunctionModal from "../InsertFunctionModal";

class CurrentTextarea extends React.Component {

    constructor() {
        super();
        this.state = {
            showModalFunc: false,
        };
    }

    static defaultProps = {
        enableEdit: true,
        textarea: '',
    };

    styling() {
        const styleThis = {
            width: '100%',
            height: 30,
            // textAlign: 'center',
            backgroundColor: this.props.enableEdit ? '#fff' : 'aaa',
            color: '#000',
            display: 'table',
            margin: '4px 0 ',
        };
        const styleRow = {
            width: '100%',
            display: 'table-cell',
            verticalAlign: 'middle',
        };
        const sIcon = {
            border: globalStyle.borderGray,
            height: 24,
            float: 'left',
            marginLeft: '4px',

        };
        const sInputSpan = {display: 'block', overflow: 'hidden', paddingRight: '4px', paddingLeft: '4px',};
        const styleInput = {
            border: globalStyle.borderGray,
            width: '100%',
            height: 24,

        };
        return {
            styleThis,
            styleRow,
            styleInput,
            sIcon,
            sInputSpan,
        }
    }

    handleCloseModalFunc = e => {
        console.log('====handleCloseModalFunc');
        this.setState({
            showModalFunc: false,
        });
    }


    handleOpenModalFunc = (e) => {
        console.log('====handleOpenModalFunc');

        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.value)
        this.setState({
            showModalFunc: true,
        });
    }

    render() {

        // const {
        //     title,
        // } = this.props;

        const s = this.styling();
        const props4Modal = {
            showModalFunc: this.state.showModalFunc,
            handleCloseModalFunc: this.handleCloseModalFunc,
        };

        return (
            <div style={s.styleThis}>
                <div style={s.styleRow}>
                    <a className="button" style={s.sIcon} onClick={this.handleOpenModalFunc}>
                        <span className="icon">
                          <i className="fa fa-pencil"></i>
                        </span>
                    </a>
                    <span style={s.sInputSpan}>
                    <input placeholder={'当前选中的单元格的值会出现在这里'} type={'text'} style={s.styleInput}/>
                    </span>
                </div>
                <InsertFunctionModal {...props4Modal} />
            </div>
        );
    }
}

export default CurrentTextarea;
