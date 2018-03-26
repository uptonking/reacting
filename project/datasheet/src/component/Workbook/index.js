import React from "../../react";
// import React from "react";

import Pivotable from '../Pivotable';
import globalStyle from '../../common/style/style';

class Workbook extends React.Component {

    constructor() {
        super();
        this.state = {
            tableData: [
                ['City', 'Beijing', 'Shanghai', 'Guangzhou','wuhan'],
                ['Temperature', '5', '22', '29','19'],
                ['Weather', 'Windy', 'Sunny', 'Rainy','sunny'],
            ],
        };
    }

    static defaultProps = {
        enableEdit: true,
        textarea: '',
    };

    styling() {
        const styleThis = {
            width: '100%',
            height: 32,
            // textAlign: 'center',
            backgroundColor: this.props.enableEdit ? '#fff' : 'aaa',
            color: '#000',
            display: 'table',
            margin: '6px 0 ',
        };
        const styleRow = {
            width: '100%',
            display: 'table-cell',
            verticalAlign: 'middle',
            // overflow: 'hidden',
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

        const {
            tableData,
        } = this.state;

        // const s = this.styling();


        return (
            <Pivotable
                tableData={tableData}
                width={1920}
                // height={600}
                minTableCol={32}
                minTableRow={100}
                minCellWidth={50}
                cellHeight={28}
                getData={function getData(data) {
                    console.log(data);
                }}
            />
        );
    }
}

export default Workbook;
