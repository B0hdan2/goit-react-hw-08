import { useDispatch } from "react-redux";

import { FaUserTie } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";


function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2 className={s.title}>
          <FaUserTie /> {name}
        </h2>
        <p className={s.number}>
          <FaPhone /> {number}
        </p>
      </div>
      <button
        className={s.button}
        onClick={() => dispatch(deleteContact(id))}
        type='button'
      >
        Delete
      </button>
    </>
  );
}

export default Contact;
