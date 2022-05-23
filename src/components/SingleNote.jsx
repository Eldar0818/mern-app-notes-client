import { BsFillTrashFill } from 'react-icons/bs'
import { baseUrl } from '../configUrl'
import axios from 'axios'

const SingleNote = ({ note, darkMode }) => {

  const handleDelete = async (id)=> {
    try {
      await axios.delete(`${baseUrl}/${id}`)
      alert('Note deleted!')
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <article className={darkMode ? "single-note dark" : "single-note"} >
        <span>{new Date(note.createdAt).toDateString()}</span>
        <p>{note.title}</p>
        <button className="delete-btn" onClick={()=> handleDelete(note._id)} >
            <BsFillTrashFill className='trash-can'/>
        </button>
    </article>
  )
}

export default SingleNote