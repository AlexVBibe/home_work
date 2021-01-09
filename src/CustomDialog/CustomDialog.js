import React, { /*useEffect,*/ useState } from "react";
import { useDialog, CustomDialog } from 'react-st-modal';

export function CustomDialogContent() {
    const dialog = useDialog();
    const [value, setValue] = useState();

    return (
        <div>
            <input
                type="text"
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    // Сlose the dialog and return the value
                    dialog.close(value);
                }}
            >
                Custom button
            </button>
        </div>
    );
}

export function showCustomDialog() {
    return CustomDialog(
        <CustomDialogContent />,
        {
            title: 'React home work',
            showCloseIcon: true,
        });
}
