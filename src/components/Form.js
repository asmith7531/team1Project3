import React from 'react';

export default function From() {
    return (
        <div class="input-field col s12">
            <select>
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
            <label>Degree</label>
        </div>
    )
}