import { Form, useLoaderData } from 'react-router-dom';

export default function EditContact() {
    const { contact } = useLoaderData();

    return (
        <Form method="post" id="contact-form">
            <p>
                <span>Name</span>
                <input
                    type="text"
                    name="first"
                    placeholder="First"
                    aria-label="First name"
                    defaultValue={contact?.first}
                />
                <input
                    type="text"
                    name="last"
                    placeholder="Last"
                    aria-label="Last name"
                    defaultValue={contact?.last}
                />
            </p>

            <label>
                <span>Avatar URL</span>
                <input
                    placeholder="https://example.com/avatar.jpg"
                    aria-label="Avatar URL"
                    type="text"
                    name="avatar"
                    defaultValue={contact?.avatar}
                />
            </label>

            <label>
                <span>Notes</span>
                <textarea
                    name="notes"
                    defaultValue={contact?.notes}
                    rows={6}
                ></textarea>
            </label>

            <p>
                <button type="submit">Save</button>
                <button type="button">Cancel</button>
            </p>
        </Form>
    );
}
