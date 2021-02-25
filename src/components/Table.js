import React, {Component} from 'react'

class TableRow extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        var rowID = this.props.row;
        var columns = this.props.data.map((item, index) => {
          
            switch(this.props.type[index]) {
                case 'date':
                    return <td key={index}>
                            <div className="">{item[0] ? new Date(item[0]).toDateString() : null}</div>
                            <i className="">{item[1]} </i>
                        </td>
                case 'link':
                    return <td key={index}>
                        <div onClick={item[2]} className="icon"><img src={item[0]} /></div>
                        <div onClick={item[2]} className="link">{item[1]}</div>
                    </td>

                case 'link_date':
                    return <td key={index}>
                        <div className="" for={"date_" + item[3].id}></div>
                        <div className="icon"><img src={item[0]} /></div>
                        <div className="link">{item[1]}</div>
                        <input id={"date_" + item[3].id} type="date" onChange={(event)=> {item[2](item, event.target.value)}}></input>
                    </td>
            
                case 'desc':
                    return <td key={index}>
                        <div className="img_icon"><img src={item[0]} /></div>
                        <div className="desc">
                        {item[1].map((ele, index) => {
                            return <div className={"desc_" + index}>{ele}</div>
                        })}
                        </div>
                        
                    </td>
                case 'html':
                    return <td key={index} dangerouslySetInnerHTML={{__html: item}} ></td>
                default:
                    return <td style={{whiteSpace: 'pre-wrap'}} key={index}>{item}</td>
            }
        })
        return (
            <tr>
                {columns}
            </tr>
        )
    }
}

export default class Table extends Component {
    render() {
        var data = this.props.data;
        var table_id = this.props.id;
        if(data) {
            var headers = data.headers.map((item, index) => {
                if(Array.isArray(item)) {
                    return <th className={item[1]} scope="col" key={index}>{item[0]}</th>
                }
                return <th scope="col" key={index}>{item}</th>
            })
            var rows = data.rows.map((item, index) => {
               
                return <TableRow data={item} row={table_id + "_" + index} key={index} type={data.column_type} />
            })
            if(!rows.length) {
                rows.push(<tr key="norecords"><td>No records found</td></tr>)
            }
            return (
                <div className="table-responsive" style={{maxHeight: this.props.maxHeight}}>
                    <table className="align-items-center table-flush table">
                        <thead className="thead-light">
                            <tr>
                                {headers}
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            )
        }
        return null
    }
}

