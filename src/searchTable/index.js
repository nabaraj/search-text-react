// import React, { Component } from 'react';

// class SearchTable extends Component {
//     constructor(props){
//         super(props);
//     }
    // render() {
    //     let searchData = this.props.searchData
    //     return (<div>
    //         {searchData.length === 0 ? (<div>No results</div>)
    //         :
    //         (<table className="table table-striped"><tbody>
            
    //             {this.props.searchData.map(item=>{
    //                 return <tr key={item._id}><td>{item._id}</td><td>{item.name}</td><td>{item.gender}</td></tr>
    //             })}
    //             </tbody>
    //       </table>)
    //     }    
    //     </div>);
    // }
// }

// export default SearchTable;
// @flow
import * as React from 'react';

export default function SearchTable({searchData}) {
    return (<div>
        {searchData.length === 0 ? (<div>No results</div>)
        :
        (<table className="table table-striped"><tbody>
        
            {searchData.map(item=>{
                return <tr key={item._id}><td>{item._id}</td><td>{item.name}</td><td>{item.gender}</td></tr>
            })}
            </tbody>
      </table>)
    }    
    </div>);
};