import sweetAlert from '@sweetalert/with-react'
import { useNavigate } from "react-router-dom"


export default function SearchBar(){

    const navigate = useNavigate();

    const submitHandler = e => {

        e.preventDefault()
        const keyword = e.currentTarget.keyword.value.trim()
        // console.log(keyword)
        if (keyword.length === 0){
            sweetAlert(<h5>Empty value</h5>)
        } else if(keyword.length < 4){
            sweetAlert(<h5>Please, write more than 4 characters</h5>)
        } else{
            e.currentTarget.keyword.value = ''
            navigate(`/results?keyword=${keyword}`)
        }

    }

    return(

        <form className="d-flex justify-content-center align-items-center" role="search" onSubmit={submitHandler}>
            <label>
                <input className="form-control me-2" type="text" placeholder="Search" name="keyword" />
            </label>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )

}