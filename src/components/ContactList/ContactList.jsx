import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice.js";
import { selectLoading } from "../../redux/contacts/selectors.js";

import Contact from "../Contact/Contact.jsx";
import s from "./ContactList.module.css";
import { BallTriangle } from "react-loader-spinner";

function ContactList() {
  const filteredСontacts = useSelector(selectFilteredContacts);

  const loading = useSelector(selectLoading);

  return (
    <>
      <ul className={s.list}>
        {filteredСontacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        ))}
      </ul>
      {loading && (
        <BallTriangle
          height={50}
          width={50}
          radius={5}
          color='#000'
          ariaLabel='ball-triangle-loading'
          wrapperStyle={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: 20,
            paddingBottom: 20,
          }}
          wrapperClass=''
          visible={true}
        />
      )}
    </>
  );
}

export default ContactList;
