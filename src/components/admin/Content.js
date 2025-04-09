import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
const Content = () => {
    const { option } = useParams();
    const [category, setCategory] = useState();
    const [categoryFake, setCategoryFake] = useState();
    const [isChangeCategory, setIsChangeCategory] = useState(false);
    const idRef = useRef();
    const nameRef = useRef();
    const updateCategoryNameRefs = useRef({});
  
    useEffect(() => {
      fetch("http://localhost:9999/Category")
        .then((res) => res.json())
        .then((result) => {
          setCategory(result);
          setCategoryFake(result);
        });
    }, [isChangeCategory]);
  
    const deleteCategory = async (id) => {
      fetch(`http://localhost:9999/Category/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        setIsChangeCategory(!isChangeCategory);
      });
    }
  
  
    const submitName = (id) => {
      const updatedCategory = category.find((c) => c.id === id);
     
      if (!updatedCategory) {
        console.error(`Category with id ${id} not found.`);
        return;
      }
  
      // Sử dụng ref dựa trên ID để lấy giá trị của input
      updatedCategory.Category_Name = updateCategoryNameRefs.current[id].value;
    //   console.log(updateCategoryNameRefs.current[id].value);
      try {
        // Make the PUT request
        fetch(`http://localhost:9999/Category/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedCategory),
        });
  
        // Update state after a successful request
        setIsChangeCategory(!isChangeCategory);
      } catch (error) {
        console.error("Error updating category:", error);
        // Handle the error, e.g., show a user-friendly message
      }
    };
    //Check Id 
    const getById = (id)=>{
      for(let i=0;i< category.length;i++) {
        if(category[i].id == id){
          return true;
        }
        
    }
    return false;
  }
    //Add category
    const addCatecory = ()=>{
        let id = idRef.current.value;
        let name = nameRef.current.value;
        if(id == '' || name == '') {
          alert('Nhập dữ liệu vào đẩy đủ các ô')
        }
        else if(getById(id)){
          alert('Id đã tồn tại')
        }
        else{
          let x = {
            id: id,
            Category_Name: name
          }
          console.log(x)
         fetch("http://localhost:9999/Category", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(x),
            });
            idRef.current.value='';
            nameRef.current.value='';
            alert('Add category thành công')
            setIsChangeCategory(!isChangeCategory);
        }
    }
    if (option == 1) {
      return (
        <div>
          <h1>List category</h1>
          Id:  <br /> <input type="number" ref={idRef} /> <br />
          Category Name:  <br /> <input type= "text" ref={nameRef} /> <br />
          <button onClick={()=>addCatecory()} style={{marginTop:"10px"}} className="btn btn-primary">Add category</button>
          <table className="table">
            <thead>
              <td>Id</td>
              <td>Name</td>
            </thead>
            <tbody>
               
              {categoryFake.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.Category_Name}</td>
                  <td>
                    <button onClick={() => deleteCategory(c.id)} className="btn btn-success">
                      Delete
                    </button>
                  </td>
                  {/* <td>
                    <button onClick={() => updateCategory(c.id)} className="btn btn-success">
                      Update
                    </button>
                  </td> */}
                  <td>
                    {/* Sử dụng ref dựa trên ID */}
                    <input type="text" id={c.id} ref={(el) => (updateCategoryNameRefs.current[c.id] = el)}/>
                    <button  onClick={() => submitName(c.id) }>Submit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  
    return null;
  };
  
  export default Content;
  