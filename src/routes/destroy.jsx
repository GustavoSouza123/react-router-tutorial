import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
    throw new Error('something bad happened');
    await deleteContact(params.contactId);
    return redirect('/');
}