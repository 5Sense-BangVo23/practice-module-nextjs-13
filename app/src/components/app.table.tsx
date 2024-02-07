import Table from 'react-bootstrap/Table';
import rs  from '@/styles/table.module.css';
import { Button } from 'react-bootstrap';

interface IProps{
  blogs: IBlog[]
}

const AppTable = (props: IProps) => {
    const { blogs } = props;

    console.log("Blogs:", blogs);
    return (
      <div className={`table-responsive`}>
        <Table responsive="sm" hover >
          <thead>
            <tr>
              <th className={`${rs['sticky-column-left']} shadow-lg p-3 mb-5 bg-white rounded`}>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
              <th>Country</th>
              <th>Phone</th>
              <th>Avatar</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th className={`${rs['sticky-column-right']} shadow-lg p-3 mb-5 bg-white rounded`}>Actions</th>
            </tr>
          </thead>
          <tbody>
            
              {blogs?.map((blog) => {
                  return (
                    <tr key={blog.id}>
                        <td className={`${rs['sticky-column-left']} shadow-lg p-3 mb-5 bg-white rounded`}>{blog.id}</td>
                        <td>{blog.name}</td>
                        <td>{blog.email}</td>
                        <td>{blog.address}</td>
                        <td>{blog.city}</td>
                        <td>{blog.country}</td>
                        <td>{blog.phone}</td>
                        <td>{blog.avatar}</td>
                        <td>{blog.createdAt}</td>
                        <td>{blog.updatedAt}</td>
                        <td className={`${rs['sticky-column-right']} shadow-lg p-3 mb-5 bg-white rounded`}>
                          <div>
                              <Button className='btn btn-primary' style={{marginTop:'5px', width:'100px'}}>Edit</Button>
                              <Button className='btn btn-danger' style={{marginTop:'5px', width:'100px'}}>View</Button>
                              <Button className='btn btn-secondary' style={{marginTop:'5px', width:'100px'}}>Delete</Button>
                          </div>
                        
                        </td>
                    </tr>
                  )
              })}
            
          </tbody>
        </Table>
    </div>
    );
}

export default AppTable;