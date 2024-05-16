import axios from "axios"
import { useForm } from "react-hook-form"
import "./Form.css"

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
    axios.post("http://localhost:8000/users", data)
  }

  return (
    <form className="tableTwo"  onSubmit={handleSubmit(onSubmit)}>
        
        <input {...register("id")} />
            
        <input {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
    
        <input  {...register("age")} />
    
        <input type="email" {...register("email")}/>
    
        <input type="submit" />
    </form>
  )
}