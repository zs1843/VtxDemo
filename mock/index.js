import { Popconfirm, Input, message } from 'antd';

export const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
    width: 200,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 200,
    sorter: function (a, b) {
        if (a.age < b.age) {
            return -1;
        }
        else if (a.age > b.age) {
            return 1;
        }
        // a must be equal to b
        return 0;
    },
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 200,
    nowrap: true,
    render: (text, record) => (record.editMode ? <Input value={record.address} onChange={(e) => {
        dispatch({
            type: 'example/editRow', payload: {
                key: record.key,
                address: e.target.value
            }
        });
    }} /> : text)
}, {
    title: '自定义Button',
    key: 'action',
    // width:200,
    render: (text, record) => (
        <span>
            <a onClick={() => { }}>查看</a>
            <span className="ant-divider" />
            {
                record.editMode ?
                    <a onClick={() => {
                        dispatch({
                            type: 'example/editRow', payload: {
                                key: record.key,
                                editMode: false
                            }
                        })
                    }}>保存</a>
                    :
                    <a onClick={() => {
                        dispatch({
                            type: 'example/editRow', payload: {
                                key: record.key,
                                editMode: true
                            }
                        })
                    }}>修改</a>
            }
            <span className="ant-divider" />
            <Popconfirm title="确定删除吗？" okText="确定" cancelText="取消" onConfirm={() => {
                dispatch({
                    type: 'vtxGrid/deleteRow',
                })
            }} >
                <a>删除</a>
            </Popconfirm>
        </span>
    ),
}
    // }, , {
    //     title: '封装Button',
    //     key: 'autoaction',
    //     // width:200,
    //     renderButtons: [
    //         {
    //             name: '查看',
    //             onClick(rowData) {
    //                 message.info('查看' + rowData.key, 5);
    //             }
    //         }, {
    //             name: '删除',
    //             onClick(rowData) {
    //                 message.info('删除' + rowData.key, 5);
    //             }
    //         }, {
    //             name: '编辑',
    //             onClick(rowData) {
    //                 message.info('编辑' + rowData.key, 5);
    //             }
    //         }, {
    //             name: 'hehei',
    //             onClick(rowData) {
    //                 let t = Math.random();
    //                 message.info(t)
    //             }
    //         }, {
    //             name: 'test',
    //             onClick(rowData) {
    //                 message.info('dfsf');
    //             }
    //         }
    //     ],
];
