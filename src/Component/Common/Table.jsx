import React, { Fragment, useState } from 'react';




const TableCourses = ({course}) => {
    const [list, setList] = useState();

    const defaultList = [
      { name: "ItemOne" },
      { name: "ItemTwo" },
      { name: "ItemThree" }
    ];
    const [courseData] = useState([
        {
            id: '1',
          name :'مرطوب کننده  ',
          cost:'200.000',
    
        },
        {
            id: '2',
          name :'کرم مرطوب کننده    ',
          cost:'100.000',
    
        },
        {
            id: '3',
          name :'  تونر صورت   ',
          cost:'100.000',
        },
        {
            id: '4',
          name :' سرم روشن ککنده پوست ',
          cost:'100.000',
        },
        {
            id: '5',
            name :'ریمل آبی   ',
            cost:'100.000',
        },
        {
            id: '6',
          name :'سرم جوان سازی پوست   ',
          cost:'100.000',
        },
    
      ]);

      function handleRemove(id) {
   //
      }
    return ( 
        <Fragment>
  <table className="table  table-light-gray rtl">
                        <thead>
                        <tr className="table-warning">
                        <th scope="col">نام کالا</th>
                        <th scope="col">قیمت</th>

      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
                        </thead>
                        <tbody>
                            {courseData.map((course) => (
                                <tr key={course.id}>

                                    <td>{course.name}</td>
                                
                                    <td>
                                       {course.cost} T
                                    </td>
                                  
                                        <td style={{textAlign:"center",color:"red"}}><i onClick={handleRemove} className="btn far fa-trash-alt"></i></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>








        </Fragment>
     );
}
 
export default TableCourses;