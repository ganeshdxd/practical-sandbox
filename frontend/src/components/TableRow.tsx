import React from "react"
import { Link } from "react-router-dom"
import Person from "../models/person"
import BaseService from "../service/base.service"
import * as toastr from "toastr"

function Del(Id?: string) {
  //Todo: Use BaseService.delete method to delete this person
}

interface IProps {
  person: Person
  index: Number
}

const TableRow: React.FunctionComponent<IProps> = (props) => {
  function handleDelete(personId: string | undefined) {
    console.log("handle delete", personId)
    if (!personId) {
      console.log("Error: Person id not found")
    } else {
      BaseService.delete("/person/delete/" + personId, {}).then((rp) => {
        if (rp.Status) {
          toastr.success("Member deleted.")
        } else {
          toastr.error(rp.Messages)
          console.log("Messages: " + rp.Messages)
          console.log("Exception: " + rp.Exception)
        }
      })
    }
  }

  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.person.FullName}</td>
      <td>{props.person.Address}</td>
      <td>{props.person.Age}</td>
      <td>
        <Link to={"/edit/" + props.person.Id} className="btn btn-primary">
          Edit
        </Link>
        <button
          className="btn btn-primary"
          style={{ marginLeft: "5px" }}
          onClick={() => handleDelete(props.person.Id)}
        >
          Delete
        </button>
      </td>
      <td>
        {/* Todo: Create a button to delete this person. Use the Del method above for the click event handler. */}
      </td>
    </tr>
  )
}
export default TableRow
