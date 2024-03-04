import React from "react";
import { Link } from "react-router-dom";
import Person from "../models/person";
import BaseService from "../service/base.service";
import * as toastr from "toastr";

function Del(Id?: string) {
  //Todo: Use BaseService.delete method to delete this person
}

interface IProps {
  person: Person;
  index: Number;
}

const TableRow: React.FunctionComponent<IProps> = (props) => { 
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
      </td>
      <td>
        {/* Todo: Create a button to delete this person. Use the Del method above for the click event handler. */}
      </td>
    </tr>
  );
};
export default TableRow;
