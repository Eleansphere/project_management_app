import { useRef, useContext } from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';
import { TasksContext } from '../shop/tasks-context.jsx';
export default function NewProject() {
  const { settingData, cancelProject } = useContext(TasksContext);

  //Ref pro formular inputy
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const dialog = useRef();

  //Ukládání hodnot z formuláře
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validace ...
    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      dialog.current.open();
    } else {
      settingData({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
      });
    }
  }

  return (
    <>
      <Modal ref={dialog} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          Invalid input
        </h2>
        <p className="text-stone-600 mb-4">
          Looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input!
        </p>
      </Modal>
      <div className="w-[33rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={cancelProject}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" isTextArea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
