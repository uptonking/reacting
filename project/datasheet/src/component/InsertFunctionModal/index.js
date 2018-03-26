import React from "../../react";
// import React from "react";

import Modal from "../Modal";

import globalStyle from '../../common/style/style';

class InsertFunctionModal extends React.Component {

    constructor() {
        super();
        this.state = {
            funcType: ['Common', 'Math', 'Statistics', 'Datetime'],
            funcCommon: ['Sum', 'Avg', 'Count', 'Max', 'Min'],
        }
    }

    static defaultProps = {
        modalOpen: false,
    };

    handleRequestCloseModalFunc = e => {
        console.log('====handleRequestCloseModalFunc');
    }

    styling() {
        const styleThis = {
            width: '420px',
            minWidth: '20rem',
            maxWidth: '60rem',
            // width: '100%',
            // height: 36,
            // textAlign: 'center',
            // verticalAlign: 'middle',
            // backgroundColor: globalStyle.xlsSkinGreen,
            // color: '#fff',
        };
        const marginRight24 = {
            marginRight: '24px',
        };
        const marginRight8 = {
            marginRight: '8px',
        };
        const sCloseBtn = {
            padding: '24px 0',
        }
        const sModal = {
            //overlay是背景层
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,

            },
            content: {
                border: '1px solid #ccc', background: '#fff',
                overflow: 'auto', WebkitOverflowScrolling: 'touch',
                borderRadius: '4px', outline: 'none', padding: '20px',
                top: '50%', left: '50%', right: 'auto', bottom: 'auto',
                marginRight: '-50%', transform: 'translate(-50%, -50%)',

                // position: 'absolute',
                // top: '40px',
                // left: '40px',
                // right: '40px',
                // bottom: '40px',
                // border: '1px solid #ccc',
                // background: '#fff',
                // overflow: 'auto',
                // WebkitOverflowScrolling: 'touch',
                // borderRadius: '4px',
                // outline: 'none',
                // padding: '20px'
            }
        };
        return {
            styleThis,
            marginRight24,
            marginRight8,
            sModal,
            sCloseBtn,
        }
    }

    render() {

        console.log('====props InsertFunctionModal');
        console.log(this.props);

        const {
            showModalFunc,
            handleCloseModalFunc,
        } = this.props;

        const {
            funcType,
            funcCommon
        } = this.state;

        const s = this.styling();

        return (
            <Modal isOpen={showModalFunc}
                   onRequestClose={this.handleRequestCloseModalFunc}
                   ariaHideApp={false}
                   style={s.sModal}
            >
                {
                    funcType.map(function (item, i) {
                        return <a className="button" key={i} style={s.marginRight24}>{item}</a>
                    })
                }
                <hr/>
                <div>
                    {
                        funcCommon.map(function (item, i) {
                            return <a className="button" key={i} style={s.marginRight8}>{item}</a>
                        })
                    }
                </div>
                <div style={s.sCloseBtn}>
                    <a className="button" onClick={handleCloseModalFunc}>关闭</a>
                </div>
            </Modal>
        );
    }
}

export default InsertFunctionModal;
