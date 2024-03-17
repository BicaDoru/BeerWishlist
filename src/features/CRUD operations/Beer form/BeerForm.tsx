import { Beer } from '../../../models/Beer';
import { BeerFormType } from '../../../types/BeerFormProps.types';
import { FormEntry } from '../Form Entry/FormEntry';
import React from 'react';

import './BeerForm.css';

type FormEntryType = {
    label: string;
    ref: React.RefObject<HTMLInputElement>;
    placeHolder: string;
    defaultValue: string;
    disabled: boolean;
};

function setFormEntriesForBeer(formEntries: FormEntryType[], givenBeer: Beer | undefined) {
    if (givenBeer != undefined) {
        formEntries[0].disabled = true;

        formEntries[0].defaultValue = givenBeer.getID().toString();
        formEntries[1].defaultValue = givenBeer.getName();
        formEntries[2].defaultValue = givenBeer.getManufacturer();
        formEntries[3].defaultValue = givenBeer.getType();
        formEntries[4].defaultValue = givenBeer.getURL();
    }

    return formEntries;
}

function createFormEntries(props: BeerFormType) {
    let formEntries = [
        { label: 'ID', ref: props.idInput, placeHolder: 'ID', defaultValue: '', disabled: false },
        { label: 'Name', ref: props.nameInput, placeHolder: 'Name', defaultValue: '', disabled: false },
        { label: 'Manufacturer', ref: props.manufacturerInput, placeHolder: 'Manufacturer', defaultValue: '', disabled: false },
        { label: 'Type', ref: props.typeInput, placeHolder: 'Type', defaultValue: '', disabled: false},
        { label: 'URL', ref: props.urlInput, placeHolder: 'URL', defaultValue: '', disabled: false },
        
    ];

    if (props.givenBeer !== undefined) {
        formEntries = setFormEntriesForBeer(formEntries, props.givenBeer);
    }

    return formEntries;
}

export function BeerForm(props: BeerFormType) {
    const formEntries = createFormEntries(props);

    return (
        <div className='form-div' data-testid='beer-form'>
            <form className='beer-form'>
                {formEntries.map((entry) => (
                    <FormEntry
                        key={entry.label}
                        ref={entry.ref}
                        label={entry.placeHolder}
                        placeHolder={entry.placeHolder}
                        defaultValue={entry.defaultValue}
                        disabled={entry.disabled}
                    />
                ))}
            </form>
        </div>
    );
}